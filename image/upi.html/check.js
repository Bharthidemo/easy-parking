function checkSession(){
    let userSession = sessionStorage.getItem("USER");
    if(userSession == null){
        window.location.href = "./login1.html";
    }
}

function logoutUser(){
    sessionStorage.removeItem('USER');
    window.location.href = "./login1.html";
}