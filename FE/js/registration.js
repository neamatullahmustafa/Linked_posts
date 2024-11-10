async function register(event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("message");
  const gender = document.getElementById("gender").value;

  try {
    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        username,
        gender,
        email,
        password,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      window.location.href = "index.html";
    } else {
      messageElement.textContent = data.message || "Registration failed.";
    }
  } catch (error) {
    console.error("Error:", error);
    messageElement.textContent = "Error connecting to the server.";
  }
}
