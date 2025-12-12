$(document).ready(function () {

  $("#submitBtn").click(function () {
    let isValid = true;

    $(".error-text").text("");
    $("input, select").removeClass("error-border");

    $("#username, #email, #password, #confirmPassword").each(function () {
      if ($(this).val().trim() === "") {
        $(this).addClass("error-border");
        $(this).next(".error-text").text("This field must not be empty");
        isValid = false;
      }
    });

    let pass = $("#password").val();
    let confirmPass = $("#confirmPassword").val();

    if (pass !== "" && confirmPass !== "" && pass !== confirmPass) {
      $("#confirmPassword").addClass("error-border");
      $("#confirmPassword").next(".error-text")
        .text("Confirmed password mismatched the password");
      isValid = false;
    }

    if ($(".topic:checked").length === 0) {
      $("#topicError").text("At least one topic must be selected");
      isValid = false;
    }

    if ($("#gender").val() === "--") {
      $("#genderError").text("Please choose your gender");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });

});

