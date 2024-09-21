 // Hamburger menu functionality
 const menuToggle = document.querySelector('.menu-toggle');
 const menuItems = document.querySelector('.menu-items');
 
 function toggleMenu() {
     menuToggle.classList.toggle('open');
     menuItems.classList.toggle('show');
 }

 // Submenu functionality
 const submenuParents = document.querySelectorAll('.submenu-parent');
 
 submenuParents.forEach(parent => {
     parent.addEventListener('click', (e) => {
         e.preventDefault();
         const submenu = parent.nextElementSibling;
         const toggle = parent.querySelector('.submenu-toggle');
         submenu.classList.toggle('show');
         toggle.classList.toggle('open');
     });
 });

 function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    menuToggle.classList.toggle('open');
    menuItems.classList.toggle('show');
}
 
 // Close the menu when clicking outside
 document.addEventListener('click', (event) => {
     if (!menuToggle.contains(event.target) && !menuItems.contains(event.target)) {
         menuToggle.classList.remove('open');
         menuItems.classList.remove('show');
     }
 });

 