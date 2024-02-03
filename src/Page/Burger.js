const Burger=document.getElementById('burger');
const burger_div=document.getElementById('Div_Burger');
const overlay=document.getElementById('overlay');
const Cross=document.getElementById('close_burger');


function close(){
    burger_div.classList.toggle("hidden");
    burger_div.classList.toggle('flex');
}
Burger.addEventListener('click',close);
overlay.addEventListener('click',close);
Cross.addEventListener('click',close);

    
  


