# OAuth

### What is OAuth? 

- OAuth is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential. In authentication parlance, this is known as secure, third-party, user-agent, delegated authorization.

### Why is it important?

- OAuth is used whenever you log into a website and it offers you one or more opportuntites to log on using antoher wesites login. Like using Facebook to login to Yelp.
- OAuth scenarios almost always represent two unrelated sites or services trying to accomplish something on behalf of users or their software. 
- OAuth is about authorization in particular and not directly about authentication.
  - Authentication is the process of a user/subject proving its ownership of a presented identity, by providing a password or some other uniquely owned or presented factor.
  - Authorization is the process of letting a subject access resources after a successful authentication, oftentimes somewhere else.

### How does OAuth work?

1. The first website connects to the second website on behalf of the user, using OAuth, providing the user’s verified identity.
1. The second site generates a one-time token and a one-time secret unique to the transaction and parties involved.
1. The first site gives this token and secret to the initiating user’s client software.
1. The client’s software presents the request token and secret to their authorization provider (which may or may not be the second site).
1. If not already authenticated to the authorization provider, the client may be asked to authenticate. After authentication, the client is asked to approve the authorization transaction to the second website.
1. The user approves (or their software silently approves) a particular transaction type at the first website.
1. The user is given an approved access token (notice it’s no longer a request token).
1. The user gives the approved access token to the first website.
1. The first website gives the access token to the second website as proof of authentication on behalf of the user.
1. The second website lets the first website access their site on behalf of the user.
1. The user sees a successfully completed transaction occurring.
1. OAuth is not the first authentication/authorization system to work this way on behalf of the end-user. In fact, many authentication systems, notably Kerberos, work similarly. What is special about OAuth is its ability to work across the web and its wide adoption. It succeeded with adoption rates where previous attempts failed (for various reasons).


Sources:

[CSO.com](https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html)

[AuthO Docs](https://auth0.com/docs/flows)

---

[Back to Read Me](../README.md)