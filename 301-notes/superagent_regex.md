# SuperAgent 

> SuperAgent is a light-weight progressive ajax API crafted for flexibility, readability, and a low learning curve after being frustrated with many of the existing request APIs. It also works with Node.js!


```
request
   .post('/api/pet')
   .send({ name: 'Manny', species: 'cat' })
   .set('X-API-Key', 'foobar')
   .set('Accept', 'application/json')
   .then(res => {
      alert('yay got ' + JSON.stringify(res.body));
   });
```

### Request basics

- A request can be initiated by invoking the appropriate method on the request object, then calling .then() (or .end() or await) to send the request. For example a simple GET request:

```
request
   .get('/search')
   .then(res => {
      // res.body, res.headers, res.status
   })
   .catch(err => {
      // err.message, err.response
   });
```

- DELETE, HEAD, PATCH, POST, and PUT requests can also be used, simply change the method name:

```
request
  .head('/favicon.ico')
  .then(res => {

  });
```

### Setting header fields

- Setting header fields is simple, invoke .set() with a field name and value:

```
 request
   .get('/search')
   .set('API-Key', 'foobar')
   .set('Accept', 'application/json')
   .then(callback);
```

### GET requests

- The .query() method accepts objects, which when used with the GET method will form a query-string. The following will produce the path `/search?query=Manny&range=1..5&order=desc`.

```
request
   .get('/search')
   .query({ query: 'Manny' })
   .query({ range: '1..5' })
   .query({ order: 'desc' })
   .then(res => {

   });
```

### HEAD requests

- You can also use the .query() method for HEAD requests. The following will produce the path /users?email=joe@smith.com.

```
  request
    .head('/users')
    .query({ email: 'joe@smith.com' })
    .then(res => {

    });
```

[Back to Read Me](../README.md)