// Move the loadHTML function outside the DOMContentLoaded event listener
function loadHTML(targetElementId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(html => {
      document.getElementById(targetElementId).innerHTML = html;
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
  });
});
