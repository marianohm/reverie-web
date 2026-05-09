console.log("JS funcionando");

const API_URL = "https://localhost:7103/api/auth";

// REGISTRO
function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.text())
    .then(data => alert(data))
    .catch(err => console.error(err));
}

// LOGIN
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => {
        if (!res.ok) throw new Error("Error en login");
        return res.text();
    })
    .then(data => {
        alert(data);
        window.location.href = "index.html";
    })
    .catch(err => alert("Credenciales inválidas"));
}