

let id = 0;

document.querySelector("#reg").addEventListener('click',(e) => {
    e.preventDefault();

    let naam = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let location = document.querySelector("#location").value;
    let pass = document.querySelector("#pass").value;

    let User = JSON.stringify({
        "naam":naam,
        "email":email,
        "location":location,
        "pass":pass,
    });

    localStorage.setItem(++id,User);


    alert("User Registered Successfully");

    window.location.href ="/index.html";
}
);


