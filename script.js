const loginBtn = document.getElementById("btn");
const userName = document.getElementById("userName");
const Password = document.getElementById("password");

const user = [
    { userName: 'janne', Password: 'test'}
]


loginBtn.addEventListener('click', () => {
    console.log('klick på knapp');
    //console.log("userName", userName);
if( user[0].Password === Password.value && user[0].userName === userName.value) {
    console.log('inloggad');
    } else {
        console.log('fel använarnamn eller lösenord');
    }
});


/*document.body.onload = addElement;
function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }*/


//for ( i = 0; i < user.length; i++)