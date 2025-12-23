import socket
import threading
from DES_Encrypt import encrypt_DES

# Client configuration
HOST = '127.0.0.1'
PORT = 5555
KEY = b'12345678'  # 8-byte DES key

nickname = input("Alege-ți un nickname: ")

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect((HOST, PORT))

def receive():
    """Receive messages from the server."""
    while True:
        try:
            message = client.recv(1024).decode('utf-8')
            
            if message == 'NICK':
                client.send(nickname.encode('utf-8'))
            else:
                print(message)
        except:
            print("[CLIENT] O eroare a apărut!")
            client.close()
            break

def write():
    """Send messages to the server."""
    while True:
        try:
            message = input('')
            
            if message:
                # Encrypt the message before sending
                encrypted_message = encrypt_DES(message, KEY)
                client.send(encrypted_message)
        except:
            print("[CLIENT] O eroare a apărut!")
            client.close()
            break

# Start threads for receiving and sending messages
receive_thread = threading.Thread(target=receive)
receive_thread.start()

write_thread = threading.Thread(target=write)
write_thread.start()
