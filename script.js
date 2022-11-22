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
    //console.log('inloggad');
    demo.innerHTML = "Du är inloggad som: " + user.userName;
    } else {
        //console.log('fel använarnamn eller lösenord');
        demo.innerHTML = "fel användarnamn eller lösenord"; 
    }
});



//for ( i = 0; i < user.length; i++)