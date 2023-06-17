var isSubmenuVisible = false;

function showSubmenu() {
  var submenu = document.getElementById('submenu');
  submenu.classList.add('show');
  isSubmenuVisible = true;
}

function hideSubmenu() {
  if (!isSubmenuVisible) {
    var submenu = document.getElementById('submenu');
    submenu.classList.remove('show');
  }
}

document.addEventListener('mousemove', function(event) {
  var heading = document.querySelector('.heading');
  var submenu = document.getElementById('submenu');
  var isCursorOverHeading = heading.contains(event.target);
  var isCursorOverSubmenu = submenu.contains(event.target);
  
  if (!isCursorOverHeading && !isCursorOverSubmenu) {
    isSubmenuVisible = false;
    hideSubmenu();
  }
});
