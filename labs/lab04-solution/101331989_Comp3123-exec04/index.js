const express = require('express');
const app = express();
const SERVER_PORT = 3000;

//Static middleware (added)
app.use("/test", express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/hello', (req , res)=>{
    res.send('<h1>Hello Express JS</h1>')
});

//http://localhost:3000/user?fName=Neeta&lName=Pant
app.get('/user',(req , res)=>{
    console.log(req.query)
    const fName = req.query.fName;
    const lName = req.query.lName;
    res.send(`First Name: ${fName}, Last Name: ${lName}`)

})


//http://localhost:3000/user/Neeta/Pant
app.post('/user/:fN/:lN', (req, res)=>{
    console.log(req.params)
    const fN = req.params.fN;
    const lN = req.params.lN;
    res.send(`firstname: ${fN}, lastname: ${lN}`)
});





app.listen(SERVER_PORT, ()=>{
    console.log(`Server is running on http://localhost:${SERVER_PORT}`)
});