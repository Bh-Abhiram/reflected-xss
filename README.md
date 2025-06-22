💥 Reflected XSS Attack Simulation : 
This project demonstrates a Reflected Cross-Site Scripting (XSS) attack using a vulnerable search feature. It simulates how an attacker can craft a malicious URL containing JavaScript code to trick victims into giving up sensitive information like login credentials — even though the data isn't stored on the server.

📌 Objective
Simulate a Reflected XSS Attack using a search bar vulnerable to unsanitized user input.

Capture stolen credentials using a fake login form hosted on a separate attacker server.

Show how attackers can use malicious URLs to instantly execute JavaScript in the victim’s browser.

Demonstrate the risks of insecure frontend rendering (dangerouslySetInnerHTML in React).

🧪 Attack Flow – Reflected XSS (Credential Theft)
Reconnaissance
The attacker discovers a search bar that reflects user input into the page without sanitization.

Fake Server Setup
The attacker runs a background server (xss-fake-server) to collect stolen data via a route like /steal.

Fake Login Form Creation
A cloned version of the platform’s real login page is hosted as fake-login-page.html to fool users.

Crafting Malicious URLs
The attacker creates a URL like:
http://localhost:5000/search?q=<script>window.location='http://localhost:3001'</script>
Phishing in Action
Victims are tricked into clicking the malicious URL (via email, chat, QR codes, or comments).

The page reflects the search query and executes the JavaScript.

Victims see a legitimate-looking login form and unknowingly enter their credentials.

Credential Theft
The form sends credentials to the attacker's server using a hidden JavaScript request.
They're saved in stolen_credentials.txt.

Post-Exploitation
The attacker now:

Gains full access to the victim’s account.

Can impersonate users, escalate privileges, or steal data.
