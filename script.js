const loginBtn = document.getElementById("btn");
const userName = document.getElementById("userName");
const Password = document.getElementById("password");
const logInOut = document.getElementById("logInOut");

const user = [
    { userName: "janne", Password: "test"}
]

// kolla om någon är inloggad med en if
// Om true visa välkomst sida för inloggad = printName och ta bort loggin formuläret - klar
// Om false visa inloggningformulär
loginBtn.addEventListener('click', () => {
    console.log('klick på knapp');
    //console.log("userName", userName);
if( user[0].Password === Password.value && user[0].userName === userName.value) {
    
    //Spara användare i localstorage
    console.log("user i Event Listener", user);
    localStorage.setItem("user", user[0].userName);
    printName();
    } else {
        PrintUnknow(); 
    }
});

//Hämta namnet från Ls och skriv ut på sidan
function printName() {
    logInOut.innerHTML = ""
    let user = localStorage.getItem("user");
    demo.innerText = "Välkommen " + userName.value;
    demo.innerHTML += '<div id="picture"></div>'
}

//Användaren finns inte
function PrintUnknow() {
    demo.innerText = "Fel användarnamn eller lösenord";
}


//Skapa function log in form

//var x =document.getElementById("picture");
	//x.className = (x.className === "activate") ? "" : "activate";






//for ( i = 0; i < user.length; i++)