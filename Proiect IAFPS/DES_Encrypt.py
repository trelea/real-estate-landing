from Crypto.Cipher import DES
from Crypto.Util.Padding import pad

def encrypt_DES(message, key):
    """
    Encrypt a message using DES encryption.
    
    Args:
        message: The message to encrypt (string)
        key: The encryption key (must be 8 bytes)
    
    Returns:
        The encrypted message as bytes
    """
    # Create a new DES cipher object for each encryption
    cipher = DES.new(key, DES.MODE_ECB)
    
    # Pad the message to be a multiple of 8 bytes
    padded_message = pad(message.encode('utf-8'), DES.block_size)
    
    # Encrypt the padded message
    encrypted = cipher.encrypt(padded_message)
    
    return encrypted
