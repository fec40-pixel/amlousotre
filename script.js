function showMessage(product) {

    const notification = document.getElementById("notification");

    notification.innerHTML =
        `${product} — contactez-nous pour commander.`;

    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3500);
}


function sendForm(event) {

    event.preventDefault();

    const notification = document.getElementById("notification");

    notification.innerHTML =
        "Merci ! Votre message a bien été envoyé.";

    notification.classList.add("show");

    event.target.reset();

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3500);
}


function toggleMenu() {

    const nav = document.querySelector("nav");

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "82px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.background = "#f8f4ea";
        nav.style.padding = "25px";
    }
}
