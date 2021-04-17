# Node Ecosystem

## What is Array.map()?

- Sometimes, you need to take an array, transform its elements, and include the results in a new array.

- Typically, you use a for loop to iterate over the elements, transform each individual one, and push the results into a new array.


- The `map()` method calls a callback function on every element of an array and returns a new array that contains the results.

- The `map()` method takes two named arguments, the first one is required whereas the second one is optional.

- Similar to the other iterative method such as  `every(),  some(),  filter(), forEach() and  sort()`, the callback() function has the following form:

## How about Array.reduce()?

- In Javascript, the reduce() method is called on an array object, and accept a callback function. The main use of a reduce() method is to iterate over the given array, and output a value that is a consolidation of the data in each index of that array.

- This is very handy for finding the sum of all data in an array.


## How to use Superagent?


### Using Async/Await

```
Media.handleMovie = async(req, res) => {
  const url = `https://api.themoviedb.org/3/trending/movie/week`;
  const queryMovie = {
    api_key: movieKey,
    language: "en-US"
  };

  console.log('made it to movies');

  await superagent
    .get(url)
    .query(queryMovie)
    .then((results) => {
      // console.log(results.body);
      const movieArray = results.body.results.map((film) => new MediaObj(film.title, film.overview, film.poster_path, film.release_date, film.vote_average));
      // console.log(movieArray[0]);
      res.status(200).send({
        movieArray
      });
    }).catch((err) =>{
      console.log('error in movies', err);
      res.status(500).send('something went wrong');
    });
}
```

### Using Promise .then() Syntax
```
import request from 'superagent'
class UsersComponent extends React.Component {
    constructor() {
        this.state = {
            users: [],
            done: false
        }
    }
    componentDidMount() {
        request
            .get('api/users')
            .then(res => this.setState({users: res.json(), done: true}))
            .catch(err => log(err))
    }
    render() {
        if(!this.state.done) {
            return (
                <div>
                    Users Loading 
                </div>
            )
        } else {
            return (
                <div>
                    Users: {this.state.users}            
                </div>
            )
        }
    }
}
```

## Promises 

- JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

- A Promise exists in one of these states
  - Pending: initial state, neither fulfilled nor rejected.
  - Fulfilled: operation completed successfully.
  - Rejected: operation failed.

## Callbacks

- Not all callbacks are asyncronous!!

- The best way to know if a callback is syncronous or asyncronous is to determine if the parent function call will return before or after the child function returns.
- If the parent function has to wait until the child function returns before it returns, then it is syncronous. 
- If the parent function can return anytime regardless if the child function has returned, then it is asyncronous.

![](/syncronous_callback.png)

![](/asyncronous_callback.png)

[Back to Read Me](../README.md)