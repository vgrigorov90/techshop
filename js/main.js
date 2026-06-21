// Compatibility entry for older HTML pages in this folder.
// The finished project requested for submission uses /index.html, /style.css and /script.js.
if (document.querySelector("#productGrid")) {
    const script = document.createElement("script");
    script.src = "script.js";
    document.body.appendChild(script);
}
