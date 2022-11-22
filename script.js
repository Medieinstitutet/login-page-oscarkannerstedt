const loginBtn = document.getElementById("btn");
const userName = document.getElementById("userName");
const Password = document.getElementById("password");

const user = [
    { userName: "janne", Password: "test"}
]


loginBtn.addEventListener('click', () => {
    console.log('klick på knapp');
    //console.log("userName", userName);
if( user[0].Password === Password.value && user[0].userName === userName.value) {
    
    //Spara användare i localstorage
    console.log("user i Event Listener", user);
    localStorage.setItem("user", user);
    printName();
    } else {
        PrintUnknow();
        //console.log('fel använarnamn eller lösenord');
        //demo.innerHTML = "fel användarnamn eller lösenord"; 
    }
});

//Hämta namnet från Ls och skriv ut på sidan
function printName() {
    let user = localStorage.getItem("user");
    demo.innerText = "Välkommen " + userName.value;
}

//Användaren finns inte
function PrintUnknow() {
    demo.innerText = "Fel användarnamn eller lösenord";
}



//for ( i = 0; i < user.length; i++)