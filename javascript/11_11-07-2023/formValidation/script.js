// click event
function formCheck() {
    let first = document.getElementById("fname").value;
    let last = document.getElementById("lname").value;
    let birth = document.getElementById("dob").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let adr = document.getElementById("addr").value;
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
    }
    else {
        document.getElementById("msg1").innerText = ""
        document.getElementById("msg2").innerText = ""
        document.getElementById("msg3").innerText = ""
        document.getElementById("msg4").innerText = ""
        document.getElementById("msg5").innerText = ""
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