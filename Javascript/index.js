// document.querySelector("body").style.backgroundColor = "blue";


// document.querySelector(".menu-box").addEventListener("click", deployMenu);

// function deployMenu(){
//     document.querySelector("#menu-background").classList.toggle("pageBlancheOpened");
//     // document.querySelector("span.one").style.backgroundColor = "yellow";
//     document.querySelector("span.one").classList.toggle("rotate-one");
//     document.querySelector("span.two").classList.toggle("disparait-two");
//     document.querySelector("span.three").classList.toggle("rotate-three");
//     document.querySelector("#menu-list").classList.toggle("zero-opacity");
//     document.querySelectorAll("li")[0].classList.toggle("li-margin");
//     document.querySelectorAll("li")[1].classList.toggle("li-margin");
//     document.querySelectorAll("li")[2].classList.toggle("li-margin");

// };

document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('click', function (e) {
      if (e.target.closest('.menu-box')) {  // Checks if the click is on the burger menu
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


function loadHTML(targetElementId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(html => {
      document.getElementById(targetElementId).innerHTML = html;
    });
}

  // Load the header and footer dynamically

// document.querySelector("#menu-background").classList.add("pageBlancheOpened");