document.querySelector("header").innerHTML = ('<div class="flex-header-button a"><div class="nom">Yanis<span> Oberlé</span></div></div><nav><div class="flex-header-button b"><a href="../index.html"><button class="header-button"><span class="span-button">Accueil</span></button></a><a href="../pages/projets.html"><button class="header-button"><span class="span-button">Projets</span></button></a><a href="../pages/contact.html"><button class="header-button"><span class="span-button">Contact</span></button></a></div></nav><div class="menu-icon"><img src="../images/bars.svg" alt=""><div class="menu"></div></div>')
document.querySelector("footer").innerHTML = ('<div class="flexfooter"><div><div class="footerelement yo">Yanis OBERLÉ</div><a href="../index.html"><div class="footerelement g">Accueil</div></a><a href="../pages/projets.html"><div class="footerelement g">Projets</div></a><a href="../pages/contact.html"><div class="footerelement g">Contact</div></a></div ><div><div class="flex mid"><a href="../pages/mentionslegales.html"><div class="footerelement m">Mentions légales</div></a></div><div class="flex bottom"><div class="footerelement no">Crovore © 2024. Tous droits réservés</div><div class="footerelement no">Updated: 14/03/2024</div></div></div><div><a href="https://www.instagram.com/yaniseau6/"><div class="footericon"><img src="../images/instagram.svg" alt=""></div></a><a href="https://www.linkedin.com/in/yanis-oberl%C3%A9-b4a7072a4/"><div class="footericon"><img src="../images/linkedin-in.svg" alt=""></div></a><a href="https://fr.fiverr.com/s/E7VvGq"><div class="footericon"><img src="../images/fiverr.svg" alt=""></div></a></div></div >')
document.querySelector(".menu").innerHTML = ('<a href="../index.html"><button class="header-button"><span class="span-button">Accueil</span></button></a><a href="../pages/projets.html"><button class="header-button"><span class="span-button">Projets</span></button></a><a href="../pages/contact.html"><button class="header-button"><span class="span-button">Contact</span></button></a></div>')


let urlParams = new URLSearchParams(location.search);
let videoNumber = urlParams.get('video');


let videoInfo = VIDEO[videoNumber];

let competence = ""
for (let comp in VIDEO[videoNumber]["competences"]) {
    competence += "<div class=lignecomp>" + "<span class=spana>" + comp + "</span> " + VIDEO[videoNumber]['competences'][comp] + "</div>"
}
document.querySelector(".comp").innerHTML = competence


document.querySelector(".titre").innerHTML = (videoInfo.titre);
document.querySelector(".desc").innerHTML = (videoInfo.description);
document.querySelector(".vid").innerHTML = (videoInfo.code);
document.querySelector(".role").innerHTML = ('Rôle: ' + videoInfo.role);
document.querySelector(".année").innerHTML = ('('+videoInfo.année+')');
