//var
const form = document.querySelector("#contact"),
    sendBtn = form.querySelector("#contact-submit"),
    resetBtn = form.querySelector("#contact-reset"),
    Fname = document.getElementsByTagName("input")[1],
    Lname = document.getElementsByTagName("input")[2],
    Fullemail = document.getElementsByTagName("input")[3],
    phoneNumber = document.getElementsByTagName("input")[4],
    pass = document.getElementsByTagName("input")[5],
    repass = document.getElementsByTagName("input")[6]

// man inja kar ba tabindex ra yad gerftam ke estefade konam ba getEleba shomarashoon
// console.log(repass);


// console.log(form);

// eventlistener
eventlisteners()

function eventlisteners() {
    document.addEventListener("DOMContentLoaded", startSendBtn)
    Fname.addEventListener("blur", validateField)
    Lname.addEventListener("blur", validateField)
    Fullemail.addEventListener("blur", validateField)
    phoneNumber.addEventListener("blur", validateField)
    pass.addEventListener("blur", validateField)
    repass.addEventListener("blur", validateField)
    resetBtn.addEventListener("click", resetForm)
    form.addEventListener("submit", submitForm)



}




// functions
function submitForm(e) {


    e.preventDefault();

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'کد فعال سازی به ایمیلتان فرستاده شد',
        showConfirmButton: false,
        timer: 1500
    })


}


function startSendBtn() {
    sendBtn.disabled = true


}

function validateField() {
    // console.log(this);
    validateLength(this)

    // let error = document.querySelectorAll(".error");
    // if (email.value !== "" && subject.value !== "" && message.value !== "") {
    //     if (error.length === 0) {
    //         sendBtn.disabled = false;
    //     }
    // }


    let error = document.querySelectorAll(".error");
    // console.log(error);

    if (Fname.value !== "" && Lname.value !== "" && Fullemail.value !== "" && phoneNumber.value !== "" && pass.value !== "" && repass.value !== 0) {
        if (error.length == '') {
            sendBtn.disabled = false
        }
    }

}


function validateLength(field) {

    // console.log(field);
    // console.log(field.value);
    // console.log(field.value.length);
    if (field.value.length > 0) {
        field.style.borderBottom = "3px solid green"
        field.style.backgroundColor = "#b3fbb9b3"
        field.style.transition = "1s"


        field.classList.remove("error")
    } else {
        field.style.borderBottom = "3px solid red"
        field.style.backgroundColor = "#fac8c8c4"
        field.style.transition = "1s"
        field.classList.add("error")
    }

    // baraie shamel shodan email ba @ fagaht
    if (field.type === "email") {
        validateEmail(field);
    }

}

function validateEmail(field) {
    const emailText = field.value
    if (emailText.includes("@")) {
        field.style.borderBottom = "3px solid green"
        field.style.backgroundColor = "#b3fbb9b3"
        field.style.transition = "1s"


        field.classList.remove("error")
    } else {
        field.style.borderBottom = "3px solid red"
        field.style.backgroundColor = "#fac8c8c4"
        field.style.transition = "1s"
        field.classList.add("error")
    }

}


function resetForm(e) {
    form.reset()
}