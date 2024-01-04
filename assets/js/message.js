const nameInputField = document.getElementById("name");
const emailInputField = document.getElementById("email");
const messageInputField = document.getElementById("message");
const saveMessageButton = document.getElementById("sendMessage");

console.log(messageInputField)

saveMessageButton.addEventListener('click', function(){
    console.log(nameInputField.value + emailInputField.value + messageInputField.value);

    const payload = {
        name: nameInputField.value,
        email: emailInputField.value,
        message: messageInputField.value
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    };
    fetch('https://portfolio-api-0i1n.onrender.com/message', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error: ", error));



})