$(readyNow);

function readyNow() {
  console.log("hello");
  // Target on click submit button
  $(".submitButton").on("click", textInputOnSubmit);
}

let totalMonthlyExpense = [];

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
}

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
  monthlyOut.append(`$`, sumSalary);
}

// $(".employeesRows").append(
//   `
//     <tr>
//       <td>${firstNameResult}</td>
//       <td>${lastNameResult}</td>
//       <td>${idNumberResult}</td>
//       <td>${titleResult}</td>
//       <td>${salaryResult}</td>
//     </tr>
//     `
// );
