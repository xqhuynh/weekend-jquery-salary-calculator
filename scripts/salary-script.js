$(readyNow);

function readyNow() {
  console.log("hello");
  // Target on click submit button
  $(".submitButton").on("click", textInputOnSubmit);
}

function textInputOnSubmit() {
  // create variables for getting input values
  let firstNameResult = $(".firstNameInput").val(); // first name input
  let lastNameResult = $(".lastNameInput").val();
  let idNumberResult = $(".idNumberInput").val();
  let titleResult = $(".titleInput").val();
  let salaryResult = $(".annualSalaryInput").val();
  $(".firstNameInput").val("");
  $(".lastNameInput").val("");
  $(".idNumberInput").val("");
  $(".titleInput").val("");
  $(".annualSalaryInput").val("");
  // append text when submit button click
  $(".employeesRows").append(
    `
      <tr>
        <td>${firstNameResult}</td>  
        <td>${lastNameResult}</td> 
        <td>${idNumberResult}</td> 
        <td>${titleResult}</td> 
        <td>${salaryResult}</td> 
      </tr>
       
      `
  );
  // calculate monthly expense
  // this is the element that causes the calculations
  let tr = $(this).parent().parent();
  // 'this' parent until tr
  // Set total expense to zero, take annual salary from input and divide by 12 months
  let totalAnnualExpense = 0;
  let monthyTotal = (totalAnnualExpense += salaryResult / 12);
  $(".totalMonthly").text(`<h3>`+ `${monthyTotal}` + `</h3>`);
}
