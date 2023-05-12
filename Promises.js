
Promise.reject('failed').catch(console.log('Ooops something went wrong'))


const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
]



const promise1 = Promise.resolve(console.log('success'));

Promise.all(urls.map(url => {
   return fetch(url).then(resp => resp.json())
})).then(results => {
  console.log('1' ,results[0])
  console.log(results[1])
  console.log(results[2])

}).catch(error => console.log('uhoh',error))