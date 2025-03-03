
// Server Instantiate or create

const express = require ('express');
const app = express();

//used to parse req.body in express -> PUT OR POST 
const bodyParser = require('body-parser');

//specifiaclly parse Json data & add it to the request.Body object
app.use(bodyParser.json());


//activate the server om 3000 port
app.listen(3000, () =>{
    console.log("Server started at port no . 3000")
});

// route create get , post 

app.get('/' , (request,response) => {
    response.send("hello jee kese ho sare ");
}) 

app.post ('/api/cars', (request,response)=>{
    const {name , brand} =request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully");
})