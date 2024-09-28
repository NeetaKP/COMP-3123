var http = require("http"); 


//TODO - Use Employee Module here
var employee = require('./Employee.js'); // added
console.log("Lab 03 -  NodeJs");


//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write('<h1>Welcome to Lab Exercise 03</h1>'); //added
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.write('<h2> Employees Detail </h2>');

            res.write(JSON.stringify(employee.employees));
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.write('<h2>Employees Name</h2>');

            let temparr = employee.employees.map(x => {return x["firstName"]+" "+ x["lastName"]})
            res.write(JSON.stringify(temparr));
            
            

        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            res.write('<h3>Employee Salary</h3>');  

            let total = employee.employees.reduce((x,y)=>{return x+y["Salary"]},0)
            res.write(JSON.stringify(`total_salary : ${total}`))
    }
    //res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    res.end()
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})