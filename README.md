# Attendance Board 🎉

![https://media.giphy.com/media/MCVjGlf0A0jde/giphy.gif](https://media.giphy.com/media/MCVjGlf0A0jde/giphy.gif)

## Setting up MySQL
- Login to mysql on command line by doing `mysql -u root`
- Do a `create database attendance_board;`
- This should do the trick

## Adding an employee to the database
- `use attendance_board;`
- `insert into employee set name="name", birthday="seldom", status=true;`

## Running the project
- `yarn run start:dev`

## Viewing attendance
- To see all employees, navigate to: `http://localhost:3000/employees`
- To see a particular employee, navigate to: `http://localhost:3000/employees/name`

## Changing attendance status
- In the browser, navigate to: `http://localhost:3000/employees/name/toggle`
