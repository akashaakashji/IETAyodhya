// Load navbar & footer
fetch("navbar.html").then(res => res.text()).then(data => {
  document.getElementById("navbar").innerHTML = data;
});

fetch("footer.html").then(res => res.text()).then(data => {
  document.getElementById("footer").innerHTML = data;
});

// Mobile menu
function toggleMenu(){
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}