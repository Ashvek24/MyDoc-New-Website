import { app } from "./firebaseConfig.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login successful! Welcome back, " + user.email);
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
