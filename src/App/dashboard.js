

let op = document.querySelector("#myDetails");

let key = localStorage.getItem("token");

let User = JSON.parse(localStorage.getItem(key));

op.innerHTML = `
<p>
    Name: ${User.naam}<br>
    Email: ${User.email}<br>
    Location: ${User.location}<br>
</p>
`

