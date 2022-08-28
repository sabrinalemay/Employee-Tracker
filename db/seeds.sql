USE myCompany_db;

-- INSERT INTO department (department_name)

-- VALUES 
-- ('Host'),
-- ('Server'),
-- ('Cook'),
-- ('Manager');

-- INSERT INTO roles (title, salary, department_id)

-- VALUES
-- ('Host', 20000.00, 1),
-- ('Server', 30000.00, 2),
-- ('Server', 30000.00, 2),
-- ('Server', 30000.00, 2),
-- ('Cook', 50000.00, 3),
-- ('Cook', 50000.00, 3),
-- ('Manager', 65000.00, 4);

-- INSERT INTO employees (first_name, last_name, role_id, manager_id)

-- VALUES
-- ('Pam', 'Beesly', 1, 7),
-- ('Dwight', 'Schrute', 2, 7),
-- ('Jim', 'Halpert', 2, 7),
-- ('Andy', 'Bernard', 2, 7),
-- ('Kevin', 'Malone', 3, 7),
-- ('Stanley', 'Hudson', 3, 7),
-- ('Michael', 'Scott', 4, NULL);

INSERT INTO department
  (department_name)
VALUES
  ('Marketing'),
  ('Sales'),
  ('Operations'),
  ('Human Resources');

INSERT INTO roles
  (title, salary, department_id)
VALUES
  ('Marketing Director', '140000', '1'),
  ('Marketing Assistant', '60000', '1'),
  ('Sales Lead', '100000', '2'),
  ('Salesperson', '80000', '2'),
  ('Operations Manager', '60000', '3'),
  ('Operations Assistant', '30000', '3'),
  ('HR Manager', '60000', '4'),
  ('HR Coordinator', '30000', '4');
  
INSERT INTO employees
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Michael', 'Smith', 1, NULL),
  ('Piers', 'Rains', 3, NULL),
  ('Edward', 'Bellamy', 6, NULL),
  ('Amanda', 'White', 2, 1),
  ('Austin', 'Ogburn', 4, 1),
  ('Katherine', 'Giler', 4, 2),
  ('Monica', 'Carrington', 5, 2),
  ('Isabella', 'Savre', 5, 2),
  ('Octavia', 'Butler', 7, 3),
  ('Peters', 'Zurn', 8, 3);