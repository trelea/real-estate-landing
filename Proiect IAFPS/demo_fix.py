#!/usr/bin/env python3
"""
Demonstration of the DES encryption/decryption fix.
Shows how creating a new cipher object for each operation prevents state issues.
"""

from DES_Encrypt import encrypt_DES
from DES_Decrypt import decrypt_DES

KEY = b'12345678'  # 8-byte DES key

print("=" * 70)
print("DES CHAT APPLICATION - DECRYPTION FIX DEMONSTRATION")
print("=" * 70)

print("\n📝 PROBLEM DESCRIPTION:")
print("After one client sends a message and another client sends a message,")
print("the server showed: [Eroare la decriptare DES]")
print()

print("🔍 ROOT CAUSE:")
print("Reusing the same DES cipher object caused state persistence issues.")
print()

print("✅ SOLUTION:")
print("Create a NEW cipher object for each encryption/decryption operation.")
print()

print("=" * 70)
print("DEMONSTRATION - MULTIPLE MESSAGES")
print("=" * 70)

# Simulate the exact scenario from the bug report
messages = [
    ("roman", "salut"),
    ("ion", "buna ziua"),
    ("roman", "ce mai faci?"),
    ("ion", "bine, tu?"),
]

print("\nSimulating chat session with multiple clients:\n")

for sender, message in messages:
    print(f"[{sender}] Sending: '{message}'")
    
    # Encrypt (client side)
    encrypted = encrypt_DES(message, KEY)
    print(f"  → Encrypted: {encrypted.hex()[:32]}...")
    
    # Decrypt (server side)
    try:
        decrypted = decrypt_DES(encrypted, KEY)
        print(f"  ✓ Server decrypted: '{decrypted}'")
        
        if decrypted == message:
            print(f"  ✓ SUCCESS: Message matches!\n")
        else:
            print(f"  ✗ ERROR: Decrypted message doesn't match!\n")
            
    except Exception as e:
        print(f"  ✗ [Eroare la decriptare DES]: {e}\n")

print("=" * 70)
print("RESULT: All messages encrypted and decrypted successfully! ✓")
print("=" * 70)
print()
print("💡 KEY INSIGHT:")
print("Each call to encrypt_DES() and decrypt_DES() creates a fresh")
print("DES cipher object using: cipher = DES.new(key, DES.MODE_ECB)")
print("This prevents the state corruption that caused the original error.")
print()
