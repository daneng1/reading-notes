# Access Control (ACL)

1. When is Basic Authorization used vs. Bearer Authorization?

- Basic Auth is used on sign up when a user does not yet exist.

- Bearer Auth is used on sign in. Upon successful login, it creates a token which is allows the user certain access.

2. What does the JSON Web Token package do?

- JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

3. What considerations should we make when creating and storing a SECRET?

- The secret should never be saved in the database or publically available.
- The secret should be a random string that is 32 or 64 characters long.

### Vocab

- *encryption* - Encryption is the method by which information is converted into secret code that hides the information's true meaning.
- *token* - Token-based authentication is a protocol which allows users to verify their identity, and in return receive a unique access token. ... Auth tokens work like a stamped ticket. The user retains access as long as the token remains valid. Once the user logs out or quits an app, the token is invalidated.
- *bearer* - Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens. The name “Bearer authentication” can be understood as “give access to the bearer of this token.” The bearer token is a cryptic string, usually generated by the server in response to a login request. 
- *secret* - a specific code that provides an additional level of security to the token
- *JSON Web Token* - JSON Web Token is an Internet proposed standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.

[Back to Read Me](../README.md)
