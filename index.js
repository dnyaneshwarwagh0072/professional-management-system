let employees = [];

    // Function to add an employee
    function addEmployee() {
      const name = document.getElementById('name').value.trim();
      const profession = document.getElementById('profession').value.trim();
      const age = document.getElementById('age').value.trim();
      const messageElement = document.getElementById('message');

      if (!name || !profession || !age) {
        messageElement.textContent = 'All fields are required!';
        messageElement.className = 'error';
        return;
      }

      const employee = {
        id: Date.now(),
        name,
        profession,
        age
      };

      employees.push(employee);
      displayEmployees();
      messageElement.textContent = 'Employee added successfully!';
      messageElement.className = 'success';
      document.getElementById('employeeForm').reset();
    }

    // Function to display employees
    function displayEmployees() {
      const employeeList = document.getElementById('employeeList');
      if (employees.length === 0) {
        employeeList.innerHTML = '0 added employees';
        return;
      }

      employeeList.innerHTML = '';
      employees.forEach(employee => {
        const div = document.createElement('div');
        div.className = 'employee';
        div.innerHTML = `
          <span>${employee.name} - ${employee.profession} - ${employee.age} years</span>
          <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(div);
      });
    }

    // Function to delete an employee
    function deleteEmployee(id) {
      employees = employees.filter(employee => employee.id !== id);
      displayEmployees();
    }