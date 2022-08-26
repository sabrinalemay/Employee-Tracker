const mysql2 = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
require("dotenv").config()

const names = [];
const roles = [];

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
    ]).then((response) => {
        switch (response.options) {
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

const addDepartment = () => {
    inquirer.prompt(
        {
            type: "input",
            name: "department",
            message: "Input name of Department",
        })
        .then(res => {
            db.query("INSERT INTO department SET ?",
                {
                    department_name: res.department
                },
                (err, res) => {
                    if (err)
                        throw err;
                    console.log("Department has been added.");
                    promptEmployee();
                })
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

const addRole = () => {
    db.query("SELECT * FROM department", (err, res) => {
        if (err)
            throw err;
        inquirer.prompt([
            {
                type: "input",
                name: "role",
                message: "Input name of the new role",
            },
            {
                type: "input",
                name: "salary",
                message: "Input the salary of this role",
            },
            {
                type: "list",
                name: "departmentId",
                message: "Choose the Department ID",
                choices:
                    res.map(department => department.department_name)
            }
        ]).then(data => {
            const departmentId = res.find(department => department.department_name === data.departmentId)
            db.query("INSERT INTO roles_table SET ?", {
                title: data.role, salary: data.salary, departmentId: departmentId.id
            },
                err => {
                    if (err)
                        throw err;
                    console.log("Role has been added.")
                    promptEmployee();
                })
        })
    })
}

const viewEmployees = () => {
    db.query("SELECT first_name, last_name FROM employees", (err, res) => {
        if (err)
            throw err;
        console.table(res)
        promptEmployee();
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Input the employee's first name",
        },
        {
            type: "input",
            name: "lastName",
            message: "Input the employee's last name",
        },
        {
            type: "input",
            name: "roleId",
            message: "Input the employee's role ID",
        },
        {
            type: "input",
            name: "managerId",
            message: "Input the ID of the employee's manager",
        }
    ]).then(res => {
        db.query("INSERT INTO employee SET ?",
            {
                first_name: res.firstName,
                last_name: res.lastName,
                role_id: res.roleId,
                manager_id: res.managerId,
            },
            (err, res) => {
                if (err)
                    throw err;
                console.log("New employee has been added.")
                promptEmployee();
            })
    })
}

const updateEmployeeRole = () => {
    db.query('SELECT CONCAT(employee.first_name, " ", employee.last_name) AS employeeName FROM employee',
        function (err, res) {
            if (err)
                throw err;
            for (let i = 0; i < res.length; i++) {
                let name = res[i].employeeName;
                names.push(name);
            }
            inquirer.prompt([
                {
                    type: "list",
                    name: "employeeChosen",
                    message: "Which employee's role do you want to update?",
                    choices: names
                    // this might be an issue to look into 
                }
            ]).then((res) => {
                let employee = res.employeeChosen;
                db.query("SELECT role_table.title AS Role_Title FROM role_table",
                    function (err, res) {
                        if (err)
                            throw err;
                        for (let i = 0; i < res.length; i++) {
                            let role = res[i].Role_Title;
                            roles.push(role);
                        }
                        inquirer.prompt([
                            {
                                type: "list",
                                name: "updateRole",
                                message: "What is this employee's new role?",
                                choices: roles
                            }
                        ]).then((res) => {
                            let roleName = res.updateEmployeeRole;
                            console.log("chosen role:", roleName);
                            db.query("UPDATE employees SET ? WHERE CONCAT(employees.first_name,' ', employees.last_name) = '${employee}'; ",
                                {
                                    role_id: roles.indexOf(roleName) + 1
                                },
                                (err, res) => {
                                    if (err) throw err;
                                    console.log("Employee's role has been updated");
                                    promptEmployee();
                                });
                        });
                });
            });
        });
}