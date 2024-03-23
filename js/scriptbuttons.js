// Affichage des boutons Vidéo

video = "";
for (let lien in VIDEO) {
  video += '<a href="../pages/video.html?video=' + lien + '"><button style="background-image: url(../images/' + lien + '.png);" class="vid"> <div class="titrevid">' + VIDEO[lien].titre + '</div> </button></a>';
}
document.querySelector(".gridvid").innerHTML = video
