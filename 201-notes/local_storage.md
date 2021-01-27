# Local Storage

### What is local storage?

* It’s a way for web pages to store named key/value pairs locally, within the client web browser.
* “HTML5 Storage” is a specification named Web Storage, which was at one time part of the HTML5 specification proper, but was split out into its own specification for uninteresting political reasons. Certain browser vendors also refer to it as “Local Storage” or “DOM Storage.”
* Which browsers support local storage? You can find out with this code:
>`function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}`

* HTML5 Storage is based on named key/value pairs. You store data based on a named key, then you can retrieve that data with the same key. The named key is a string. The data can be any type supported by JavaScript, including strings, Booleans, integers, or floats.
* You will need to use functions like parseInt() or parseFloat() to coerce your retrieved data into the expected JavaScript datatype.
* Calling `setItem()` with a named key that already exists will silently overwrite the previous value. Calling `getItem()` with a non-existent key will return null rather than throw an exception.
* Calling removeItem() with a non-existent key will do nothing.

---


[Back to Read Me](../README.md)    