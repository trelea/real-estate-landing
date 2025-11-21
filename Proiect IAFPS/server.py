import socket
import threading
from DES_Decrypt import decrypt_DES

# Server configuration
HOST = '127.0.0.1'
PORT = 5555
KEY = b'12345678'  # 8-byte DES key

clients = []
nicknames = []

def broadcast(message):
    """Send a message to all connected clients."""
    for client in clients:
        try:
            client.send(message)
        except:
            pass

def handle_client(client):
    """Handle messages from a connected client."""
    while True:
        try:
            # Receive encrypted message
            encrypted_message = client.recv(1024)
            
            if not encrypted_message:
                # Client disconnected
                index = clients.index(client)
                clients.remove(client)
                client.close()
                nickname = nicknames[index]
                broadcast(f'[SERVER] {nickname} a părăsit chat-ul'.encode('utf-8'))
                nicknames.remove(nickname)
                break
            
            # Decrypt the message
            try:
                message = decrypt_DES(encrypted_message, KEY)
                print(f"[{nicknames[clients.index(client)]}] {message}")
                
                # Broadcast the message to all clients
                broadcast(f'[{nicknames[clients.index(client)]}] {message}'.encode('utf-8'))
            except Exception as e:
                print(f"[SERVER] Eroare la decriptare: {e}")
                error_message = f'[{nicknames[clients.index(client)]}] [Eroare la decriptare DES]'
                print(error_message)
                broadcast(error_message.encode('utf-8'))
        except Exception as e:
            # Handle disconnection
            if client in clients:
                index = clients.index(client)
                clients.remove(client)
                client.close()
                nickname = nicknames[index]
                broadcast(f'[SERVER] {nickname} a părăsit chat-ul'.encode('utf-8'))
                nicknames.remove(nickname)
            break

def receive():
    """Accept new client connections."""
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((HOST, PORT))
    server.listen()
    
    print(f'[SERVER] Serverul ascultă pe {HOST}:{PORT}')
    
    while True:
        client, address = server.accept()
        print(f'[SERVER] Conectare reușită cu {str(address)}')
        
        # Request nickname
        client.send('NICK'.encode('utf-8'))
        nickname = client.recv(1024).decode('utf-8')
        
        nicknames.append(nickname)
        clients.append(client)
        
        print(f'[SERVER] {nickname} s-a alăturat chat-ului')
        broadcast(f'[SERVER] {nickname} s-a alăturat chat-ului'.encode('utf-8'))
        client.send('[SERVER] Conectare reușită.'.encode('utf-8'))
        
        # Start thread to handle client
        thread = threading.Thread(target=handle_client, args=(client,))
        thread.start()

if __name__ == '__main__':
    print('[SERVER] Pornire server...')
    receive()
