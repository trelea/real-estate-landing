#!/usr/bin/env python3
"""
Test script to verify DES encryption/decryption works correctly
for multiple messages without state persistence issues.
"""

import sys
from DES_Encrypt import encrypt_DES
from DES_Decrypt import decrypt_DES

KEY = b'12345678'  # 8-byte DES key

def test_multiple_encryptions():
    """Test that multiple encryptions and decryptions work correctly."""
    print("Testing DES encryption/decryption for multiple messages...")
    
    # Simulate first client sending a message
    message1 = "salut"
    print(f"\n[Client 1] Original message: {message1}")
    encrypted1 = encrypt_DES(message1, KEY)
    print(f"[Client 1] Encrypted: {encrypted1.hex()}")
    
    # Server decrypts first message
    try:
        decrypted1 = decrypt_DES(encrypted1, KEY)
        print(f"[Server] Decrypted message 1: {decrypted1}")
    except Exception as e:
        print(f"[Server] ERROR decrypting message 1: {e}")
        return False
    
    # Simulate second client sending a message
    message2 = "buna ziua"
    print(f"\n[Client 2] Original message: {message2}")
    encrypted2 = encrypt_DES(message2, KEY)
    print(f"[Client 2] Encrypted: {encrypted2.hex()}")
    
    # Server decrypts second message
    try:
        decrypted2 = decrypt_DES(encrypted2, KEY)
        print(f"[Server] Decrypted message 2: {decrypted2}")
    except Exception as e:
        print(f"[Server] ERROR decrypting message 2: {e}")
        return False
    
    # Verify the decrypted messages match the originals
    if decrypted1 == message1 and decrypted2 == message2:
        print("\n✓ SUCCESS: Both messages encrypted and decrypted correctly!")
        return True
    else:
        print("\n✗ FAILURE: Decrypted messages don't match originals")
        return False

def test_same_client_multiple_messages():
    """Test that the same client can send multiple messages successfully."""
    print("\n\nTesting same client sending multiple messages...")
    
    messages = ["primul mesaj", "al doilea mesaj", "al treilea mesaj"]
    
    for i, message in enumerate(messages, 1):
        print(f"\n[Message {i}] Original: {message}")
        encrypted = encrypt_DES(message, KEY)
        print(f"[Message {i}] Encrypted: {encrypted.hex()}")
        
        try:
            decrypted = decrypt_DES(encrypted, KEY)
            print(f"[Message {i}] Decrypted: {decrypted}")
            
            if decrypted != message:
                print(f"✗ FAILURE at message {i}: decrypted doesn't match original")
                return False
        except Exception as e:
            print(f"✗ ERROR at message {i}: {e}")
            return False
    
    print("\n✓ SUCCESS: All messages from same client encrypted/decrypted correctly!")
    return True

if __name__ == '__main__':
    # Run tests
    test1_passed = test_multiple_encryptions()
    test2_passed = test_same_client_multiple_messages()
    
    print("\n" + "="*60)
    print("TEST RESULTS:")
    print(f"  Multiple clients test: {'PASSED ✓' if test1_passed else 'FAILED ✗'}")
    print(f"  Same client test: {'PASSED ✓' if test2_passed else 'FAILED ✗'}")
    print("="*60)
    
    # Exit with appropriate code
    sys.exit(0 if (test1_passed and test2_passed) else 1)
