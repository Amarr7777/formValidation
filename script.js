function validate() {
    var name = document.getElementById('fullName');
    var email = document.getElementById('exampleInputEmail1');
    var password = document.getElementById('exampleInputPassword1');
    var cPassword = document.getElementById('exampleInputPassword2');
    var dob = document.getElementById('dob')
    
    var reName = /^[A-Za-z ]{3,}$/;
    var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var rePass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    var year = dob.value.slice(0,4);
    var dobNew = parseInt(year);
    var eighteenYearsAgo = 2023-dobNew 

    if (name.value.trim() === "" || !reName.test(name.value)) {
        window.alert("Enter your name");
        console.log("Enter your name");
    } else if (!reEmail.test(email.value) || email.value === "") {
        window.alert("Invalid Email");
        console.log("Invalid Email");
    } else if (password.value === "" || !rePass.test(password.value)) {
        window.alert("Invalid password");
        console.log("Invalid password");
    } else if (cPassword.value === "" ) {
        window.alert("Confirm your password");
        console.log("Confirm your password");
    } else if (cPassword.value !== password.value) {
        window.alert("Passwords are not matching");
        console.log("Passwords are not matching");
    } else if(eighteenYearsAgo < 18 ){
        window.alert("You should be atleast 18 years old");
        console.log("You should be atleast 18 years old");
    }
    else {
        window.alert("Form submitted successfully");
        console.log("Form submitted successfully");
    }
}
