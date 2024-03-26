/*
=================================================================================
 opening and closing the navigation for small screens 
=================================================================================
*/
const closeNav=document.getElementById('close-nav');
const openNav=document.getElementById('open-nav');

const header=document.getElementById('header');

openNav.addEventListener('click',function(){
  header.classList.toggle('show');
})

closeNav.addEventListener('click',function(){
  header.classList.toggle('show');
})