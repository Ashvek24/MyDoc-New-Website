import { app } from "./firebaseConfig.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const database = getDatabase(app);

document.getElementById("bookForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const appointmentData = {
    patientName: document.getElementById("name").value,
    doctor: document.getElementById("doctor").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
  };

  const appointmentRef = ref(database, "appointments/" + Date.now());
  set(appointmentRef, appointmentData)
    .then(() => {
      alert("Appointment booked successfully!");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
