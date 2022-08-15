const connection = require('./connection.js');

class DB {



viewDepartment(){
    return this.connection.promise().query("SELECT department.id, department.name FROM department;");
}
}

module.export = new DB(connection);