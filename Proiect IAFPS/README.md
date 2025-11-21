# DES Encrypted Chat Application

## Problem Fixed

**Issue**: After sending one message from a client and then another from a different client, the server displayed:
```
[SERVER] Conectare reușită.
[SERVER] roman s-a alăturat chat-ului
[SERVER] roman s-a alăturat chat-ului
[roman] salut
[roman] [Eroare la decriptare DES]
[roman] [Eroare la decriptare DES]
```

**Root Cause**: The DES cipher object was being reused across multiple encryption/decryption operations, causing state persistence issues. In block cipher modes like ECB or CBC, reusing the same cipher object can cause the internal state to become corrupted.

**Solution**: Modified `DES_Encrypt.py` and `DES_Decrypt.py` to create a **new cipher object for each encryption/decryption operation**. This ensures that each operation starts with a clean state.

## Key Changes

### DES_Encrypt.py
```python
def encrypt_DES(message, key):
    # Create a NEW cipher object for each encryption
    cipher = DES.new(key, DES.MODE_ECB)
    # ... rest of encryption
```

### DES_Decrypt.py
```python
def decrypt_DES(encrypted_message, key):
    # Create a NEW cipher object for each decryption
    cipher = DES.new(key, DES.MODE_ECB)
    # ... rest of decryption
```

## Installation

1. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

### Start the Server
```bash
python server.py
```

### Start Clients (in separate terminals)
```bash
python client.py
```

When prompted, enter a nickname for each client.

## Testing

Run the test script to verify the fix:
```bash
python test_chat.py
```

This will test:
- Multiple clients sending messages
- Same client sending multiple messages
- Proper encryption/decryption without state persistence issues

## Technical Details

- **Encryption**: DES (Data Encryption Standard) in ECB mode
- **Key Size**: 8 bytes (64 bits)
- **Padding**: PKCS7 padding to ensure message length is a multiple of 8 bytes
- **Protocol**: TCP sockets with encrypted message transmission

## Security Note

⚠️ **Warning**: DES is considered cryptographically weak by modern standards. This implementation is for educational purposes only. For production applications, use stronger encryption algorithms like AES-256.
