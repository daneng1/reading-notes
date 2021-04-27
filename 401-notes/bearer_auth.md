# Bearer Auth

### Write the following steps in the correct order:

- Register your application to get a client_id and client_secret
- Receive access token
- Ask the client if they want to sign in via a third party
- Make a request to the access token endpoint
- Redirect to a third party authentication endpoint
- Make a request to a third-party API endpoint
- Receive authorization code

### Questions

1. What can you do with an authorization code?

- The only thing you can do with the authorization code is to make a request to get an access token.

1. What can you do with an access token?

- Access tokens are the thing that applications use to make API requests on behalf of a user. The access token represents the authorization of a specific application to access specific parts of a user's data. Access tokens must be kept confidential in transit and in storage.

1. What’s a benefit of using OAuth instead of your own basic authentication?

- It enables apps to obtain limited access (scopes) to a user's data without giving away a user's password. It decouples authentication from authorization and supports multiple use cases addressing different device capabilities. 

### Vocab

- *Client ID* - A Client ID represents a unique browser/device and is created and assigned by Universal Analytics cookie _ga. Client ID is assigned to each unique user of your website.
- *Client Secret* - The client_secret is a secret known only to the application and the authorization server. It must be sufficiently random to not be guessable, which means you should avoid using common UUID libraries which often take into account the timestamp or MAC address of the server generating it.
- *Authentication Endpoint* - Endpoint authentication is an authentication mechanism used to verify the identity of a network's external or remote connecting device. This method ensures that only valid or authorized endpoint devices are connected to a network. 
- *Access Token Endpoint* - A token endpoint is an HTTP endpoint that micropub clients can use to obtain an access token given an authorization code.
- *API Endpoint* - an API endpoint is the point of entry in a communication channel when two systems are interacting. It refers to touchpoints of the communication between an API and a server.
- *Authorization Code* - An authorization code is an alphanumeric password that authorizes its user to purchase, sell or transfer items, or to enter information into a security-protected space.
- *Access Token* - An access token is an object encapsulating the security identity of a process or thread. A token is used to make security decisions and to store tamper-proof information about some system entity.

[Back to Read Me](../README.md)
