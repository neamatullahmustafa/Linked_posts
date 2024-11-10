async function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("message");

  try {
    const response = await fetch("http://localhost:5000/auth/logIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("userId", data.id);
      window.location.href = "home.html";
    } else {
      messageElement.textContent = data.message || "Error logging in.";
    }
  } catch (error) {
    messageElement.textContent = "Error connecting to the server.";
  }
}
