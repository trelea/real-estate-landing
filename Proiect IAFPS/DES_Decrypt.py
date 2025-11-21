from Crypto.Cipher import DES
from Crypto.Util.Padding import unpad

def decrypt_DES(encrypted_message, key):
    """
    Decrypt a message using DES decryption.
    
    Args:
        encrypted_message: The encrypted message (bytes)
        key: The decryption key (must be 8 bytes)
    
    Returns:
        The decrypted message as a string
    """
    # Create a new DES cipher object for each decryption
    cipher = DES.new(key, DES.MODE_ECB)
    
    # Decrypt the message
    decrypted_padded = cipher.decrypt(encrypted_message)
    
    # Remove padding
    decrypted = unpad(decrypted_padded, DES.block_size)
    
    return decrypted.decode('utf-8')
