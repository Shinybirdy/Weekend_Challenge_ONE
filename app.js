$(document).ready(function () {
var array = [ ];
$('#employeeinfo').on('submit', function(event) {
  event.preventDefault();

  var values = {};
  $.each('#employeeinfo').serializeArray(), function(i, field) {
    values[field.name] = field.value;
}
//clear out inputs
$('#employeeinfo').find( ' input[type=text] ').val(');')
});
//add to list
array.push(values);
//append to DOM
appendDom(values);
function appendDom(empInfo) {
  $('container').append ('<div class=""></div>');
var $el = $('#container').children().last();
//append information to the DOM

$el.append('<p>'+ empInfo.annualSalary + '</p>')

//set input parameters
function employeeInfo(firstName, lastName, empIdNumber, jobTitle, annualSalary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.empIdNumber = empIdNumber;
  this.jobTitle = jobTitle;
  this.annualSalary = annualSalary;
};

var allEmployees = new Object(employeeInfo);
//submit button
//clears out form
$('.allEmpolyees').on('click', '.delbtn', deleteEmployee);
var averageMonthlyCost;
//stores submitted information
//calculate all employee salaries
//report monthly cost of salaries
var averageMonthlyCost= function (allEmployees) {
  annualSalary = document.getElementById('employeeInfo').elements[4].value;
  annualSalary += allEmpolyees.annualSalary;
averageMonthlyCost = (annualSalary / 12);
  print(averageMonthlyCost);
};


//HARD MODE
//create delete button
//delete button removes employee from DOM
//PRO MODE
//update total salaries to discount removed empolyee's salary
//use .data() function
