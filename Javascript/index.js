// Move the loadHTML function outside the DOMContentLoaded event listener
function loadHTML(targetElementId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(html => {
      document.getElementById(targetElementId).innerHTML = html;
      if (targetElementId === 'header') {
        const logo = document.querySelector('#logo');
        if (logo) {
          logo.style.cursor = 'pointer'; // Makes the cursor change to a pointer when hovering over the logo
          logo.addEventListener('click', function() {
            window.location.href = '/emmanuel-azouvi/index.html'; // Adjust this path to match your home page URL
          });
        }
      }
    });
}

document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('click', function (e) {
      if (e.target.closest('.menu-box')) {  
          const menuList = document.querySelector('#menu-list');
          const menuBackground = document.querySelector('#menu-background');
          menuList.classList.toggle('zero-opacity');
          menuBackground.classList.toggle('pageBlancheOpened');

          document.querySelector('.span.one').classList.toggle('rotate-one');
          document.querySelector('.span.two').classList.toggle('disparait-two');
          document.querySelector('.span.three').classList.toggle('rotate-three');
      }
    
        if (e.target.closest('#menu-list a')) {
      const menuList = document.querySelector('#menu-list');
      if (menuList.classList.contains('zero-opacity')) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  });
});
