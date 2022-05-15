$(readyNow);

function readyNow() {
  console.log("hello");
  // Target on click submit button
  $(".submitButton").on("click", textInputOnSubmit);
}

// Create empty array to push in new object
let totalMonthlyExpense = [];

// Function to get input values
function textInputOnSubmit() {
  // Get user inputs and store in new object
  let newEmployee = {
    firstNameResult: $(".firstNameInput").val(),
    lastNameResult: $(".lastNameInput").val(),
    idNumberResult: $(".idNumberInput").val(),
    titleResult: $(".titleInput").val(),
    salaryResult: $(".annualSalaryInput").val(),
  };
  // Push object into empty array
  totalMonthlyExpense.push(newEmployee);
  // Empty inputs after user clicks submit
  $(".firstNameInput").val("");
  $(".lastNameInput").val("");
  $(".idNumberInput").val("");
  $(".titleInput").val("");
  $(".annualSalaryInput").val("");
  // Call calculateMonthlyExpense function
  calculateMonthlyExpense();
  displayEmployeeInfo();
}

// Function to calculate monthly expense
function calculateMonthlyExpense() {
  // loop through array
  // for each annual salary, divide by 12 months
  let sumSalary = 0;
  for (let annualSalary of totalMonthlyExpense) {
    sumSalary += annualSalary.salaryResult / 12;
    console.log(annualSalary.salaryResult);
  }
  let monthlyOut = $(".totalMonthlyOut");
  monthlyOut.empty();
  monthlyOut.append(`$ `, sumSalary.toFixed(2));
  if (sumSalary > 20000) {
    monthlyOut.css("background", "red");
  }
}

// Function to display employee info
function displayEmployeeInfo() {
  // Target inputs
  let employeeInfo = $(".employeesRows");
  employeeInfo.empty();
  for (let employees of totalMonthlyExpense) {
    employeeInfo.append(`<tr>
    <td>${employees.firstNameResult}</td>
    <td>${employees.lastNameResult}</td>
    <td>${employees.idNumberResult}</td>
    <td>${employees.titleResult}</td>
    <td>${employees.salaryResult}</td>
    </tr>`);
  }
}
