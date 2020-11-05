// Make Network Request with fetch()
// API => Application Programming Interface: 
// Software to communicate with other software

// API => helpful service

// REST API

// CRUD => 
// create => POST, 
// read => GET,
// update => PUT / PATCH, 
// deleted => DELETE

// JSON => JavaScript Object Notation
// fetch(url => endpoint)

// GET /posts/1 - single blog post
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))

const blogPost = {
  title: "I'm a title"
}

// Post
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: "POST",
  headers: {
    "content-type": "application/jso" 
  },
  body: JSON.stringify(blogPost)
})

// handle errors
fetch('https://jsonplaceholder.typicode.com/pots/1')
  .then(response => {
      if (!response.ok) {
        throw new Error(response.status);  
      }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))