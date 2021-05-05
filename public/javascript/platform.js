function learning(evt, sales) {
  var i, tabpane, active;
  tabpane = document.getElementsByClassName("tabpane");
  for (i = 1; i < tabpane.length; i++) {
    tabpane[i].style.display = "none";
  }
  active = document.getElementsByClassName("active");
  for (i = 0; i < active.length; i++) {
    active[i].className = active[i].className.replace(" active", "");
  }
  document.getElementById(sales).style.display = "block";
  evt.currentTarget.className += " active";
}
function openSales(evt, sales) {

  document.getElementById('defaultOpen').classList.remove('active')
  var i, tabpane, active;
  tabpane = document.getElementsByClassName("tabpane");
  for (i = 0; i < tabpane.length; i++) {
    tabpane[i].style.display = "none";
  }
  active = document.getElementsByClassName("active");
  for (i = 0; i < active.length; i++) {
    active[i].className = active[i].className.replace(" active", "");
  }
  document.getElementById(sales).style.display = "block";
  evt.currentTarget.className += " active";
}
