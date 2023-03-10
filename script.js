var hasVisited = false;

function openForm() {
  hasVisited = true
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

if (hasVisited != true) {
  //window.onload = openForm;
}
