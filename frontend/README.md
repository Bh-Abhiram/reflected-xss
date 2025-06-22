# 💥 Reflected XSS Attack Simulation — Fake Login Phishing Demo

This project demonstrates a **Reflected Cross-Site Scripting (XSS)** attack using a vulnerable search bar to redirect users to a fake login form. It simulates how attackers can phish credentials using social engineering and a simple payload injection.

---

## 📌 Objective

* Simulate a **Reflected XSS** attack using realistic payloads.
* Redirect users to a **fake login page** that steals credentials.
* Log the stolen data in the attacker's server.
* Educate users on the **risk of improper input sanitization**.

---

## 🚀 Sample Test Case Execution

### 🔹 Step 1: Run Reflected-XSS Main Project (Frontend + Backend)

**1. Start Frontend**

```bash
cd frontend
npm install
npm start
```

**2. Start Backend**

```bash
cd backend
node server.js
```

This will start the vulnerable React app on: `http://localhost:3000`

---

### 🔹 Step 2: Start Attacker Server (Fake Login Setup)

**Inside `xss-fake-server/` root directory:**

```bash
node server.js
```

This starts the fake login page server at: `http://localhost:3001`

---

## 🧪 Test Reflected XSS Payloads

When the main project is running, you'll see a **search bar** vulnerable to XSS. Use the following payloads to simulate an attack:

### ✅ Payload 1: Alert Box (Simple Proof of XSS)

```html
<script>alert('XSS Attack Successful!');</script>
```

**Run this in browser URL:**

```
http://localhost:5000/search?q=<script>alert('XSS Attack Successful!');</script>
```

**Encoded URL:**

```
http://localhost:5000/search?q=%3Cscript%3Ealert(%27XSS%20Attack%20Successful!%27);%3C/script%3E
```

---

### ✅ Payload 2: Redirecting Link to Fake Login

```html
<a href="http://localhost:3001/" style="font-size:20px; color:red; font-weight:bold;">
    🔴 Click Here to Login Again
</a>
```

This creates a **red link** that redirects users to the attacker's fake login form.

---

### ✅ Payload 3: Redirecting Button to Fake Login

```html
<button onclick="window.location='http://localhost:3001/'" style="font-size:20px; background:red; color:white; padding:10px;">
    🔴 Click Here to Login Again
</button>
```

This creates a **fake red login button** that feels legitimate to users.

---

## 🛑 Security Insight

* **Reflected XSS** doesn’t require stored payloads.
* Attackers usually **send malicious links** (containing injected scripts) via emails, chats, or comments.
* Victims **unknowingly execute** them when they click or search with injected input.
* Real users may be redirected to a **fake login page** that looks identical to the original.
* Credentials are then stolen and saved silently in `stolen_credentials.txt` on the attacker's machine.

---

## 🔒 Mitigation Tips

* Always **sanitize user input** before using it in HTML.
* Use **output encoding** for dynamic data.
* Never use `dangerouslySetInnerHTML` in React without a strong reason.
* Enforce **Content Security Policy (CSP)** headers.
* Escape HTML entities: `<`, `>`, `"`, `&`, etc.

---

## ✅ Conclusion

This project is a practical demonstration of a **Reflected XSS vulnerability** and shows how easy it is for attackers to phish users by injecting malicious scripts through unsanitized inputs. It's built for **educational purposes only**.

Stay aware. Sanitize everything. Never trust user input!
