/*
Name: John
Date: 10/04/2026
*/

//java script for the nav button
const topnav = document.getElementById('topnav');
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  const isOpen = topnav.classList.toggle('isopen');
})

