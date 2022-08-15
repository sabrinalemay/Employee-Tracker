USE myCompany_db;

INSERT INTO department (department_name)

VALUES 
('Host'),
('Server'),
('Cook'),
('Manager');

INSERT INTO roles (title, salary, department_id)

VALUES
('Host', 20000.00, 1),
('Server', 30000.00, 2),
('Server', 30000.00, 2),
('Server', 30000.00, 2),
('Cook', 50000.00, 3),
('Cook', 50000.00, 3),
('Manager', 65000.00, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)

VALUES
('Pam', 'Beesly', 1, 7),
('Dwight', 'Schrute', 2, 7),
('Jim', 'Halpert', 2, 7),
('Andy', 'Bernard', 2, 7),
('Kevin', 'Malone', 3, 7),
('Stanley', 'Hudson', 3, 7),
('Michael', 'Scott', 4, NULL);