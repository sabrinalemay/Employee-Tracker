const mysql2 = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const dotenv = require("dotenv").config()

const position = [];
const EmployeeName = [];

const db = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
});

// db.connect(() => {
//     promptEmployee()
// })

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "Please select what you would like to do.",
            choices: [
                "View departments",
                "Add a department",
                "View roles",
                "Add a role",
                "View employees",
                "Add an employee",
                "Update an employee's role",
                "Exit"
            ],
        },
    ]).then ((response) => {
        switch(response.options) {
            case "View departments":
                viewDepartment()
                break;
            case "Add a department":
                addDepartment()
                break;
            case "View roles":
                viewRoles()
                break;
            case "Add a role":
                addRole()
                break;
            case "View employees":
                viewEmployees()
                break;
            case "Add an employee":
                addEmployee()
                break;
            case "Update an employee's role":
                updateEmployeeRole()
                break;
            case "Quit":
                db.end()
        }
    })
}

const viewDepartment = () => {
    db.query("SELECT * FROM department", (err, res) => {
        if (err)
            throw err;
            console.table(res)
            promptEmployee();
    })
}



const viewRoles = () => {
    db.query("SELECT title FROM roles", (err, res) => {
        if (err)
            throw err;
            console.table(res)
            promptEmployee();
    })
}

const viewEmployees = () => {
    db.query("SELECT first_name, last_name FROM employees", )
}