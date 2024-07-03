const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()

    let username = document.querySelector(".user1").value
    let username2 = document.querySelector(".user2").value
    let email = document.querySelector(".email").value
    let pwrd = document.querySelector(".pwrd").value

    if(username === ""){
        document.querySelector('.user1-err').innerHTML = "Ooops! First Name cannot be empty"
        document.querySelector('.user1').style.borderColor = "red"
    }else{
        document.querySelector('.user1-err').innerHTML = ""
        document.querySelector('.user1').style.borderColor = "grey" 
    }

    if(username2 == ""){
        document.querySelector('.user2-err').innerHTML = "Ooops! Last Name cannot be empty"
        document.querySelector('.user2').style.borderColor = "red"
    }else{
        document.querySelector('.user2-err').innerHTML = ""
        document.querySelector('.user2').style.borderColor = "grey"
    }

    if(email == ""){
        document.querySelector('.email-err').innerHTML = "Ooops! Look like this is not an email"
        document.querySelector('.email').style.borderColor = "red"
    }else{
        document.querySelector('.email-err').innerHTML = ""
        document.querySelector('.email').style.borderColor = "grey"
    }

    if(pwrd == ""){
        document.querySelector('.pwrd-err').innerHTML = "Password cannot be empty"
        document.querySelector('.pwrd').style.borderColor = "red"

    }else{
        document.querySelector('.pwrd-err').innerHTML = ""
        document.querySelector('.pwrd').style.borderColor = "grey"
    }
}