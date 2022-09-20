USE myCompany_db;

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
  ('Pam', 'Beesly', 1, NULL),
  ('Dwight', 'Schrute', 3, NULL),
  ('Jim', 'Halpert', 6, NULL),
  ('Andy', 'Bernard', 2, 1),
  ('Kevin', 'Malone', 4, 1),
  ('Stanley', 'Hudson', 4, 2),
  ('Michael', 'Scott', 5, 2),
  ('Angela', 'Martin', 5, 2),
  ('Gabe', 'Lewis', 7, 3),
  ('Kelly', 'Kapoor', 8, 3);