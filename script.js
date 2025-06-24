function showNavigator() {
    document.getElementById("info-output").innerHTML = `
        <h3>Navigator Info</h3>
        <p>appName: ${navigator.appName}</p>
        <p>product: ${navigator.product}</p>
        <p>appVersion: ${navigator.appVersion}</p>
        <p>userAgent: ${navigator.userAgent}</p>
        <p>platform: ${navigator.platform}</p>
        <p>language: ${navigator.language}</p>
    `;
}

function showWindow() {
    document.getElementById("info-output").innerHTML = `
        <h3>Window Info</h3>
        <p>innerHeight: ${window.innerHeight}</p>
        <p>innerWidth: ${window.innerWidth}</p>
    `;
}

function showScreen() {
    const s = screen;
    document.getElementById("info-output").innerHTML = `
        <h3>Screen Info</h3>
        <p>width: ${s.width}</p>
        <p>height: ${s.height}</p>
        <p>availWidth: ${s.availWidth}</p>
        <p>availHeight: ${s.availHeight}</p>
        <p>colorDepth: ${s.colorDepth}</p>
        <p>pixelDepth: ${s.pixelDepth}</p>
    `;
}

function showLocation() {
    const l = location;
    document.getElementById("info-output").innerHTML = `
        <h3>Location Info</h3>
        <p>href: ${l.href}</p>
        <p>hostname: ${l.hostname}</p>
        <p>pathname: ${l.pathname}</p>
        <p>protocol: ${l.protocol}</p>
    `;
}

function validatePassword() {
    const pwd = document.getElementById("password").value;
    const msg = document.getElementById("password-msg");
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{10,}$/.test(pwd);

    msg.textContent = isValid ? "✔️ Valid" : "❌ Invalid";
    msg.style.color = isValid ? "green" : "red";
}
