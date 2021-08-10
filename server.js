const express = require('express')

var users = require("./users.json")

const app = express()

app.use(express.json())
app.get("/", function (request, response) {
    return response.send("Welcome to Home page")
})

app.get("/user", function (request, response) {
    return response.send({ data: users })

})
app.post("/user", function (request, response) {
    const x = request.body
    console.log(x);
    users.push(request.body);
    response.send('users added succefully')
})
//console.log(users)
app.delete("/users/:id", function (request, response) {
    var { id } = request.params;
    users.forEach(el => {
        if (el.id == id) {
            //console.log(users.indexOf(el));
            users.splice(users.indexOf(el),1);
            response.send("users deletion successfull")

        }
        
    })
})
app.patch("/users/:id/:parameter/:newValue", function (request, response) {
    let { id } = request.params
    let parameter=request.params.parameter
    let idValue = request.params.newValue
    users.forEach(el => {
        if (el.id == id) {
            //console.log(users.indexOf(el));
            users[users.indexOf(el)][parameter]=idValue
            response.send("users update successfull")

        }
        
    })
    
    
    
    
 })

app.listen(2345, () => {
    console.log("listening on port")
})






