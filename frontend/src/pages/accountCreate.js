import React, { useState } from "react";

function AccountCreate() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear any previous errors
    setSuccessMessage("");

    // Basic client-side validation
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("YOUR_API_ENDPOINT/accounts/create", {  // Replace with your actual API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      const data = await response.json(); // Assuming your API returns JSON

      if (response.ok) {
        // Account creation was successful
        setSuccessMessage("Account created successfully!");
        // Clear the form
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        // Account creation failed
        setError(data.message || "Account creation failed."); // Display error from the API (if available)
        console.error("Account creation failed:", data);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error("Account creation error:", err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Create Account</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Confirm Password:</label><br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default AccountCreate;