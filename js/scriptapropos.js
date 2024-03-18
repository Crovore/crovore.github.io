centres = "";
for (let lien in CI) {
  centres += '<div><div class="flex-icone-nom"><div class="icon"><img src="../images/'+lien+'.svg" alt=""></div><div class="nom-ci">'+lien+'</div></div><div class="annee">Pratique: '+CI[lien].année+'</div></div>';
}
document.querySelector(".interest").innerHTML = centres