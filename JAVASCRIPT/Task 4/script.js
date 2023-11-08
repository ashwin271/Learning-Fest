

function submit() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phone  = document.getElementById("phone").value
    var rollnum = document.getElementById("rollnum").value

    var message = document.getElementById("message")

    console.log(typeof parseInt(phone))
    console.log(parseInt(phone))

    if(name == "" || phone == "" ) {
        message.innerHTML = "*enter the required fields"
    }
    else if(isNaN(parseInt(phone))) {
        message.innerHTML = "*enter a valid phone number"
    }
    else {
        console.log("Name: " + name)
        console.log("Email: " + email)
        console.log("Phone: " + phone)
        console.log("Roll Number: " + rollnum)
        
        message.style.color = "white"
        message.style.fontSize = "25px"
        message.innerHTML = "Form Submitted Successfully"

        document.getElementById("head").style.display = "none";
        document.getElementById("inp-area").style.display = "none";
        document.getElementById("submit").style.display = "none";

        document.getElementById("inner-container").style.backgroundColor = "rgb(85, 224, 85)"
        document.getElementById("inner-container").style.width = "400px"
        document.getElementById("inner-container").style.height = "140px"
    }
}
