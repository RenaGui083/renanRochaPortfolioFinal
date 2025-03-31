function instagram() {
    window.location.href = 'https://www.instagram.com/renangui_rocha/'; 
  }

function linkedin() {
    window.location.href = 'https://www.linkedin.com/in/renan-rocha-078770359/';  
  }

function desenvolvimento() {
    window.location.href = 'portfolioWebSite - Renan/desenvolvimento.html';
}
function design() {
    window.location.href = 'portfolioWebSite - Renan/design.html';  
}
function suporte() {
  window.location.href = 'portfolioWebSite - Renan/suporte.html';  
}
function contatar(){
    window.scrollTo({
        top: 10000,  
        left: 0,   
        behavior: 'smooth' 
    });
}
function filterImages() {
  let filter = document.getElementById("filter").value;
  let images = document.querySelectorAll(".gallery img");
  
  images.forEach(img => {
      if (filter === "all" || img.classList.contains(filter)) {
          img.style.display = "block";
      } else {
          img.style.display = "none";
      }
  });
}
