// start header and landing

let menu = document.getElementById("menu");
let mega = document.getElementById("mega");
let ul = document.getElementsByTagName("ul")[0];
let up = document.getElementById("upp");
menu.onclick = () => {
 ul.classList.toggle("show");
};

upp.onclick = () => {
 if (window.scrollY >= 400) {
  window.scrollTo({
   top: 0,
   left: 0,
   behaviour: "smooth",
  });
 }
};

window.onscroll = () => {
 if (window.scrollY >= 400) {
  up.style.display = "block";
 } else {
  up.style.display = "none";
 }
};

// end header and landing

let time = new Date();
let day = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

day.innerHTML = time.getUTCDay();
hours.innerHTML = time.getHours();
minutes.innerHTML = time.getMinutes();
seconds.innerHTML = time.getSeconds();

// section stats
let clients = document.getElementById("clients");
let projects = document.getElementById("projects");
let countries = document.getElementById("countries");
let money = document.getElementById("money");

// section stat
