let changepass = () => {
    let key = localStorage.getItem("token");

    let User = JSON.parse(localStorage.getItem(key));

    let oldPass = document.querySelector("#old").value;
    let newPass = document.querySelector("#new").value;

    if(oldPass === User.pass){
        User.pass = newPass;
        localStorage.setItem(key,JSON.stringify(User));
        alert("password Changed Successfully");
        window.location.href = "/src/html/dashboard.html";
    }else{
        alert("Authentication Failed!");
    }
}
