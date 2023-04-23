import http from 'node:http'

const user = []

const server = http.createServer((req, res) => {
       const { method, url} = req
       
       if (method === 'GET' && url === "/users"){

             return res
             .setHeader('Content-Type', 'application/json')
             .end(JSON.stringify(user))
       } 

       if (method === 'POST' && url === "/users"){
              user.push([{
                     name: 'John Smith',
                     email: 'john.smith@gmail.com',
                     age: 21,
                     active: true

              }])
       }

       res.end("Hello, Worlda!")
})

server.listen(3333)
