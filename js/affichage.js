document.addEventListener("DOMContentLoaded", function() {
    const loaderWrapper = document.getElementById("loader-wrapper");
    const content = document.getElementById("content");

    // Désactiver le défilement pendant le chargement
    document.body.style.overflow = 'hidden';

    // Set a minimum loading time of 2 seconds
    setTimeout(function() {
        loaderWrapper.style.display = "none";
        content.style.display = "block";

        // Réactiver le défilement après le chargement
        document.body.style.overflow = 'auto';
    }, 2500);
});
document.querySelector("header > .header-button:first-child").classList.add("selected");
document.querySelector(".motion").classList.add("visible");
document.querySelector(".video").classList.add("caché");
document.querySelector(".video").classList.remove("visible")
document.querySelector(".photo").classList.add("caché");
document.querySelector(".photo").classList.remove("visible")
document.querySelector(".infographie").classList.add("caché");
document.querySelector(".infographie").classList.remove("visible")
document.querySelector(".web").classList.add("caché");
document.querySelector(".web").classList.remove("visible")
document.querySelector(".divers").classList.add("caché");
document.querySelector(".divers").classList.remove("visible")

document.querySelector("header > .header-button:first-child").addEventListener("click", showmotion)
function showmotion() {
    document.querySelector("header > .header-button:first-child").classList.add("selected");
    document.querySelector("header > .header-button:nth-child(2)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(3)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(4)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(5)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(6)").classList.remove("selected");
    document.querySelector(".motion").classList.add("visible");
    document.querySelector(".video").classList.add("caché");
    document.querySelector(".video").classList.remove("visible")
    document.querySelector(".photo").classList.add("caché");
    document.querySelector(".photo").classList.remove("visible")
    document.querySelector(".infographie").classList.add("caché");
    document.querySelector(".infographie").classList.remove("visible")
    document.querySelector(".web").classList.add("caché");
    document.querySelector(".web").classList.remove("visible")
    document.querySelector(".divers").classList.add("caché");
    document.querySelector(".divers").classList.remove("visible")
}

document.querySelector("header > .header-button:nth-child(2)").addEventListener("click", showvideo)
function showvideo() {
    document.querySelector("header > .header-button:nth-child(2)").classList.add("selected");
    document.querySelector("header > .header-button:nth-child(1)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(3)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(4)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(5)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(6)").classList.remove("selected");
    document.querySelector(".video").classList.add("visible");
    document.querySelector(".motion").classList.add("caché");
    document.querySelector(".motion").classList.remove("visible")
    document.querySelector(".photo").classList.add("caché");
    document.querySelector(".photo").classList.remove("visible")
    document.querySelector(".infographie").classList.add("caché");
    document.querySelector(".infographie").classList.remove("visible")
    document.querySelector(".web").classList.add("caché");
    document.querySelector(".web").classList.remove("visible")
    document.querySelector(".divers").classList.add("caché");
    document.querySelector(".divers").classList.remove("visible")
}

document.querySelector("header > .header-button:nth-child(3)").addEventListener("click", showphoto)
function showphoto() {
    document.querySelector("header > .header-button:nth-child(3)").classList.add("selected");
    document.querySelector("header > .header-button:nth-child(2)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(1)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(4)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(5)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(6)").classList.remove("selected");
    document.querySelector(".photo").classList.add("visible");
    document.querySelector(".motion").classList.add("caché");
    document.querySelector(".motion").classList.remove("visible")
    document.querySelector(".video").classList.add("caché");
    document.querySelector(".video").classList.remove("visible")
    document.querySelector(".infographie").classList.add("caché");
    document.querySelector(".infographie").classList.remove("visible")
    document.querySelector(".web").classList.add("caché");
    document.querySelector(".web").classList.remove("visible")
    document.querySelector(".divers").classList.add("caché");
    document.querySelector(".divers").classList.remove("visible")
}

document.querySelector("header > .header-button:nth-child(4)").addEventListener("click", showinfographie)
function showinfographie() {
    document.querySelector("header > .header-button:nth-child(4)").classList.add("selected");
    document.querySelector("header > .header-button:nth-child(2)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(3)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(1)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(5)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(6)").classList.remove("selected");
    document.querySelector(".infographie").classList.add("visible");
    document.querySelector(".motion").classList.add("caché");
    document.querySelector(".motion").classList.remove("visible")
    document.querySelector(".video").classList.add("caché");
    document.querySelector(".video").classList.remove("visible")
    document.querySelector(".photo").classList.add("caché");
    document.querySelector(".photo").classList.remove("visible")
    document.querySelector(".web").classList.add("caché");
    document.querySelector(".web").classList.remove("visible")
    document.querySelector(".divers").classList.add("caché");
    document.querySelector(".divers").classList.remove("visible")
}

document.querySelector("header > .header-button:nth-child(5)").addEventListener("click", showweb)
function showweb() {
    document.querySelector("header > .header-button:nth-child(5)").classList.add("selected");
    document.querySelector("header > .header-button:nth-child(2)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(3)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(4)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(1)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(6)").classList.remove("selected");
    document.querySelector(".web").classList.add("visible");
    document.querySelector(".motion").classList.add("caché");
    document.querySelector(".motion").classList.remove("visible")
    document.querySelector(".video").classList.add("caché");
    document.querySelector(".video").classList.remove("visible")
    document.querySelector(".photo").classList.add("caché");
    document.querySelector(".photo").classList.remove("visible")
    document.querySelector(".infographie").classList.add("caché");
    document.querySelector(".infographie").classList.remove("visible")
    document.querySelector(".divers").classList.add("caché");
    document.querySelector(".divers").classList.remove("visible")
}

document.querySelector("header > .header-button:nth-child(6)").addEventListener("click", showdivers)
function showdivers() {
    document.querySelector("header > .header-button:nth-child(6)").classList.add("selected");
    document.querySelector("header > .header-button:nth-child(2)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(3)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(4)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(5)").classList.remove("selected");
    document.querySelector("header > .header-button:nth-child(1)").classList.remove("selected");
    document.querySelector(".divers").classList.add("visible");
    document.querySelector(".motion").classList.add("caché");
    document.querySelector(".motion").classList.remove("visible")
    document.querySelector(".video").classList.add("caché");
    document.querySelector(".video").classList.remove("visible")
    document.querySelector(".photo").classList.add("caché");
    document.querySelector(".photo").classList.remove("visible")
    document.querySelector(".infographie").classList.add("caché");
    document.querySelector(".infographie").classList.remove("visible")
    document.querySelector(".web").classList.add("caché");
    document.querySelector(".web").classList.remove("visible")
}