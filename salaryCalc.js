$('#addUser').click(function(event) {
  event.preventDefault();
    $('#addUser').submit(function(event){
      event.preventDefault();
        const firstName = $("#fName").val();
        const lastName = $("#lName").val();
        const id = $("#id").val();
        const title = $("#title").val();
        const annualSalary = $("#annualSalary").val();

console.log(firstName);









});
  if (firstName === null || lastName === null ||
  id === null || title === null || annualSalary === null) {
    alert("All fields must be filled!");
  else {
    ${"#b-fName"} = fName + ${"#b-fName"};
    ${"#b-lName"} = lName + ${"#b-lName"};
    ${"#b-id"} = id +  ${"#b-id"};
    ${"#b-title"} = title + ${"#b-title"};
    ${"#b-annualSalary"} = annualSalary + ${"#b-annualSalary"};
  }
});
