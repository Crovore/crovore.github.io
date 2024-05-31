
//-----------------
// CHANGER LES NOMS 
//-----------------

const words = ["Vidéo", "Graphisme", "Photo", "Web", "Motion Design"];
let index = 0;
const h2Element = document.querySelector("h2");

function changeWord() {
  // Remove fade-in class if present
  h2Element.classList.remove('h2-fade-in');
  
  // Add fade-out class
  h2Element.classList.add('h2-fade-out');

  // Wait for the fade-out transition to complete (500ms)
  setTimeout(() => {
    // Change the text
    h2Element.innerText = words[index];
    
    // Increment the index and reset if needed
    index = (index + 1) % words.length;
    
    // Remove fade-out class
    h2Element.classList.remove('h2-fade-out');
    
    // Add fade-in class
    h2Element.classList.add('h2-fade-in');
  }, 500);
}

// Initial fade-in
h2Element.classList.add('h2-fade-in');

// Change the word every 1.5 seconds (1500ms)
setInterval(changeWord, 2000);

//------------
// SCROLL PHOTO
//------------

document.addEventListener('DOMContentLoaded', () => {
  const photoyanis = document.querySelector('.photoyanis');
  const footer = document.querySelector('footer');
  const windowHeight = window.innerHeight;
  const photoHeight = photoyanis.clientHeight;
  const footerTop = footer.offsetTop;

  window.addEventListener('scroll', () => {
      let scrollPosition = window.scrollY;
      let maxTranslateY = footerTop - (scrollPosition + windowHeight - photoHeight);
      maxTranslateY = Math.min(maxTranslateY, 0); // Ensure maxTranslateY doesn't go positive
      photoyanis.style.transform = `translateY(${Math.max(scrollPosition * 0.36, maxTranslateY)}px)`;
  });
});


//------------
// LIENS VIDEO
//------------

document.addEventListener('DOMContentLoaded', function() {
  const videoElements = document.querySelectorAll('.grid-elt2');
  const videoPlayDiv = document.getElementById('videoplay');

  videoElements.forEach(function(element) {
      element.addEventListener('click', function() {
          const videoUrl = element.getAttribute('data-url');
          const videoId = new URL(videoUrl).searchParams.get('v');
          const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

          videoPlayDiv.innerHTML = `<div class="X">X</div><iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          
          // Ajoutez l'écouteur d'événements pour la croix après l'avoir ajoutée au DOM
          document.querySelector(".X").addEventListener("click", function() {
              videoPlayDiv.innerHTML = '';
          });
      });
  });
});