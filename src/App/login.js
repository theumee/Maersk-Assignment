
document.querySelector("#login").addEventListener('click',(e) =>{
    e.preventDefault();

    let currMail = document.querySelector("#email").value;
    let currPass = document.querySelector("#pass").value;
    for(let key in localStorage){
        let User = JSON.parse(localStorage.getItem(key));
        if(User != null && User.email === currMail && User.pass === currPass){
            window.location.href = "/src/html/dashboard.html";
            localStorage.setItem("token",key);  
            return;
        }
    }
    alert("Authentication Failed!")
});
