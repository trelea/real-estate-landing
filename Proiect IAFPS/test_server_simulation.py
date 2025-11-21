#!/usr/bin/env python3
"""
Simulate the exact scenario from the bug report:
1. Client connects
2. Client sends 1 message
3. Another client connects
4. Second client sends a message
"""

import socket
import threading
import time
from DES_Encrypt import encrypt_DES

# Configuration
HOST = '127.0.0.1'
PORT = 5556  # Use different port for testing
KEY = b'12345678'

def simulate_client(nickname, message, delay=0):
    """Simulate a client connecting and sending a message."""
    time.sleep(delay)
    
    try:
        client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        client.connect((HOST, PORT))
        print(f"[TEST] {nickname} connected")
        
        # Handle NICK request
        response = client.recv(1024).decode('utf-8')
        if response == 'NICK':
            client.send(nickname.encode('utf-8'))
            print(f"[TEST] {nickname} sent nickname")
        
        # Receive welcome message
        welcome = client.recv(1024).decode('utf-8')
        print(f"[TEST] {nickname} received: {welcome}")
        
        # Small delay before sending message
        time.sleep(0.5)
        
        # Send encrypted message
        encrypted = encrypt_DES(message, KEY)
        client.send(encrypted)
        print(f"[TEST] {nickname} sent message: {message}")
        
        # Wait a bit to receive responses
        time.sleep(1)
        
        # Try to receive broadcast messages
        client.settimeout(2.0)
        try:
            while True:
                msg = client.recv(1024).decode('utf-8')
                if msg:
                    print(f"[TEST] {nickname} received broadcast: {msg}")
        except socket.timeout:
            pass
        
        client.close()
        print(f"[TEST] {nickname} disconnected")
        
    except Exception as e:
        print(f"[TEST] {nickname} error: {e}")

def run_simulation():
    """Run the complete simulation test."""
    print("="*70)
    print("SIMULATING BUG SCENARIO:")
    print("1. Start server")
    print("2. Client 'roman' connects and sends 'salut'")
    print("3. Client 'ion' connects and sends 'buna'")
    print("="*70)
    
    # Import and start server in a separate thread
    import sys
    import importlib.util
    
    # Load server module dynamically
    spec = importlib.util.spec_from_file_location("server_test", "server.py")
    server_module = importlib.util.module_from_spec(spec)
    
    # Modify server to use different port
    server_module.HOST = HOST
    server_module.PORT = PORT
    server_module.KEY = KEY
    
    # Start server in background thread
    server_thread = threading.Thread(target=lambda: exec(open('server.py').read(), {
        '__name__': '__main__',
        'HOST': HOST,
        'PORT': PORT,
        'KEY': KEY
    }), daemon=True)
    server_thread.start()
    
    print("\n[TEST] Waiting for server to start...")
    time.sleep(2)
    
    # Simulate first client (roman) sending a message
    print("\n[TEST] Starting client 'roman'...")
    client1_thread = threading.Thread(target=simulate_client, args=('roman', 'salut', 0))
    client1_thread.start()
    
    # Wait a bit, then simulate second client
    time.sleep(3)
    
    print("\n[TEST] Starting client 'ion'...")
    client2_thread = threading.Thread(target=simulate_client, args=('ion', 'buna', 0))
    client2_thread.start()
    
    # Wait for both clients to finish
    client1_thread.join()
    client2_thread.join()
    
    print("\n[TEST] Simulation complete!")
    print("="*70)
    print("If you see '[Eroare la decriptare DES]' above, the bug still exists.")
    print("If both messages were decrypted successfully, the bug is FIXED!")
    print("="*70)

if __name__ == '__main__':
    try:
        run_simulation()
    except KeyboardInterrupt:
        print("\n[TEST] Test interrupted by user")
    except Exception as e:
        print(f"\n[TEST] Error during simulation: {e}")
        import traceback
        traceback.print_exc()
