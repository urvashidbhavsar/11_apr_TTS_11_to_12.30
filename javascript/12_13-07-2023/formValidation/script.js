// click event
function formCheck() {
    let first = document.getElementById("fname").value;
    let last = document.getElementById("lname").value;
    let birth = document.getElementById("dob").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let adr = document.getElementById("addr").value;
    let mno = document.getElementById("mobile").value;
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let city = document.getElementById("city").value;
    if (first == "" || first == null) {
        document.getElementById("msg1").innerHTML = "Enter Firstname";
        return false;
    } else if (last == "" || last == null) {
        document.getElementById("msg2").innerHTML = "Enter Lastname";
        return false;
    } else if (birth == "" || birth == null) {
        document.getElementById("msg3").innerText = "Select Birthdate"
        return false
    } else if (male == false && female == false) {
        document.getElementById("msg4").innerText = "Select Gender"
        return false
    } else if (adr == "" || adr == null) {
        document.getElementById("msg5").innerText = "Enter Address"
        return false
    } else if (city == "-1") {
        document.getElementById("msg6").innerText = "Select city"
        return false
    }
    else if (mno == "" || mno == null) {
        document.getElementById("msg7").innerText = "Enter Mobile No"
        return false
    } else if (mail == "" || mail == null) {
        document.getElementById("msg8").innerText = "Enter Email id"
        return false
    } else if (pass == "" || pass == null) {
        document.getElementById("msg9").innerText = "Enter Password"
        return false
    }
    else {
        document.getElementById("msg1").innerText = ""
        document.getElementById("msg2").innerText = ""
        document.getElementById("msg3").innerText = ""
        document.getElementById("msg4").innerText = ""
        document.getElementById("msg5").innerText = ""
        document.getElementById("msg6").innerText = ""
        document.getElementById("msg7").innerText = ""
        document.getElementById("msg8").innerText = ""
        document.getElementById("msg9").innerText = ""
        return false
    }
}

// blur event (with parameterized function )
function blankCheck(blnk, msg) {
    if (blnk.value == "" || blnk.value == null) {
        document.getElementById(msg).innerText = "Please, fill this field";
        return false
    }
}
function dropSelect(blnk, msg) {
    if (blnk.value == "-1") {
        document.getElementById(msg).innerText = "Select value"
        return false
    } else {
        document.getElementById(msg).innerText = ""
        return false
    }
}
// keyboard event (with parameterized function)
function nameCheck(blnk, msg) {
    let regEx = /^[a-zA-Z]*$/
    if (!(regEx.test(blnk.value))) {
        document.getElementById(msg).innerText = "Invalid value";
        return false
    } else if (blnk.value.length < 2) {
        document.getElementById(msg).innerText = "Enter more then 2 characters";
        return false
    } else {
        document.getElementById(msg).innerText = "";
        return false
    }
}
// address length
function addressLength() {
    let adr = document.getElementById("addr").value;
    if (adr.length < 30) {
        document.getElementById("msg5").innerText = "enter minimum 30 character"
        return false;
    } else {
        document.getElementById("msg5").innerText = ""
        return false;
    }
}
function MobileValidation() {
    let mno = document.getElementById("mobile").value;
    let regex = /^[0-9]*$/
    let start = /^[6-9]/
    if (!(regex.test(mno)) || (!(start.test(mno)))) {
        document.getElementById("msg7").innerText = "Invalid Number";
        return false
    } else if (mno.length < 10) {
        document.getElementById("msg7").innerText = "Enter Proper number";
        return false
    }
    else {
        document.getElementById("msg7").innerText = "";
        return false
    }
}
// email validation
function emailEx() {
    let mail = document.getElementById("email").value;
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
    if (regEx.test(mail)) {
        document.getElementById("msg8").innerText = "";
        return false
    } else {
        document.getElementById("msg8").innerText = "Enter Proper Email";
        return false
    }
}

// password expression
function passwordEx() {
    let pass = document.getElementById("pass").value;
    let passex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if (passex.test(pass)) {
        document.getElementById("msg9").innerText = "";
        return false
    } else {
        document.getElementById("msg9").innerText = "Enter Strong Password";
        return false
    }
}

// compare password
function passwordCompare() {
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if (cpass != pass) {
        document.getElementById("msg10").innerText = "Password and Confirm password does not match";
        return false
    } else {
        document.getElementById("msg10").innerText = "";
        return false
    }
}

// show password
function showpass() {
    let pass = document.getElementById("pass");
    let icon = document.getElementById("icon1");
    if (pass.type == "password" && icon.classList.contains("fa-eye") == true) {
        pass.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash")
    } else {
        pass.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye")
    }
}
function showcpass() {
    let cpass = document.getElementById("cpass");
    let icon = document.getElementById("icon2");
    if (cpass.type == "password" && icon.classList.contains("fa-eye") == true) {
        cpass.type = "text"
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash")
    } else {
        cpass.type = "password"
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye")
    }
}