function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var gender = document.getElementById("gender").value;
    var color = document.getElementById("color").value;

    // Validation
    if (name === "") {
      alert("Please enter your name");
      return;
    }
    if (email === "") {
      alert("Please enter your email");
      return;
    }
    if (mobile === "") {
      alert("Please enter your mobile number");
      return;
    }
    if (gender === "") {
      alert("Please select your gender");
      return;
    }
    if (color === "") {
      alert("Please enter your favorite color");
      return;
    }

    // Combine and display information
    var information =
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Mobile No: " + mobile + "\n" +
      "Gender: " + gender + "\n" +
      "Favorite Color: " + color;

    document.getElementById("result").value = information;
  }