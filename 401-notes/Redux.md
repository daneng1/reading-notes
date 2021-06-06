# Redux

## Questions

1. What are the advantages of storing tokens in “Cookies” vs “Local Storage”?
    1. Local Storage
    - *Pros:*
      - It’s convenient.
      - It’s pure JavaScript and it’s convenient. If you don’t have a back-end and you’re relying on a third-party API, you can’t always ask the third-party API to set a specific cookie for your site.
      - Works with APIs that require you to put your access token in the header, like this: Authorization Bearer ${access_token}.
    - *Cons:*
      - It’s vulnerable to XSS attacks.
      - An XSS attack happens when an attacker can run JavaScript on your website. This means that the attacker can take the access token that you stored in your localStorage. An XSS attack can happen from a third-party JavaScript code included in your website like React, Vue, jQuery, Google Analytics, etc. It's almost impossible not to include any third-party libraries in your site.
    2. Cookies
    - *Pros:*
      - The cookie is not accessible via JavaScript; hence, it is not as vulnerable to XSS attacks as localStorage.
      - If you’re using httpOnly and secure cookies this means that your cookies cannot be accessed using JavaScript so even if an attacker can run JS on your site, they can't read your access token from the cookie.
      - It’s automatically sent in every HTTP request to your server.
    - *Cons:*
      - Depending on the use case, you might not be able to store your tokens in the cookies.
      - Cookies have a size limit of 4KB. Therefore, if you’re using a big JWT Token, storing in the cookie is not an option.
      - There are scenarios where you can’t share cookies with your API server or the API requires you to put the access token in the authorization header. In this case, you won’t be able to use cookies to store your tokens.

1. Explain 3rd party cookies - Third-party cookies are cookies that are set by a website other than the one you are currently on. For example, you can have a "Like" button on your website which will store a cookie on a visitor's computer, that cookie can later be accessed by Facebook to identify visitors and see which websites they visited.
1. How do pixel tags work? - A tag (or often called pixel) is a short snippet of javascript (code) that does something on your website. In the context of marketing/advertising tags and pixels, they are often collecting some information about the visitor to a website and their behavior on the site. This is then

## Vocab

- *cookies* - small text files with pieces of data that are used to identify your computer when you use a network.
- *authorization* - when you ensure that who ever is logging into your site is who they are they are.
- *access control* - when you limit access to specific pages or parts of pages based on a role that is applied to each user. Common roles are user, contibutor, editor, and admin.
- *conditional rendering* - when a condition is met a rendering will occur, otherwise it will not occur.

---

[Back to Read Me](../README.md)
