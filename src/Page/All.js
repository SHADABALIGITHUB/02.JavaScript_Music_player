const Banner_one1=document.getElementById('scrolling_div1');
const Banner_two=document.getElementById('scrolling_div2');
const Banner_three=document.getElementById('scrolling_div3');
const Banner_four=document.getElementById('scrolling_div4');
const Banner_five=document.getElementById('scrolling_div5');
const Banner_six=document.getElementById('scrolling_div6');
const Banner_seven=document.getElementById('scrolling_div7');



const divs = document.querySelectorAll('.shad'); // Select all divs with the class "my-divs"
let currentDiv = 0;
let second=1;

function showNextDiv() {

divs.forEach((div, index) => {
    if (index % 2 === 0) {
      div.classList.add('hidden');
    }
  });
//   Show the current div with a smooth fade-in transition
   divs[currentDiv].classList.remove('hidden')
  divs[currentDiv].classList.add('block');
    currentDiv = (currentDiv + 2) % 6; // Move to the next div
 
}
function oddNext(){
   

divs.forEach((div, index) => {
  if (index % 2 !== 0) {
    div.classList.add('hidden');
  }
});


//   Show the current div with a smooth fade-in transition
   divs[second].classList.remove('hidden')
  divs[second].classList.add('block');
//   divs[second].classList.remove('-top-96');
//   divs[second].classList.add('top-2');

  second=(second+2)%6;
   
}

// const interval = setInterval(showNextDiv, 1000); 


function start(){
one=setInterval(()=>{
    showNextDiv(); 
},1000);
};
start();
function oddstart(){
 st=setInterval(()=>{
   two=setInterval(()=>{
        oddNext();
   },1000);
   clearInterval(st);
},500);

}
oddstart();


Banner_one1.addEventListener('mouseover',()=>{
     
    clearInterval(one);
        
})

Banner_one1.addEventListener('mouseleave',()=>{
      
      start();

})

Banner_three.addEventListener('mouseover',()=>{
     clearInterval(one);
     Banner_three.style.scale='0.9';
})
Banner_three.addEventListener('mouseleave',()=>{
    Banner_three.style.scale='1';
      start();
})

Banner_five.addEventListener('mouseover',()=>{
    clearInterval(one);
})
Banner_five.addEventListener('mouseleave',()=>{
     start();
})
Banner_two.addEventListener('mouseover',()=>{
    clearInterval(two);
})
Banner_two.addEventListener('mouseleave',()=>{
     oddstart();
})
Banner_four.addEventListener('mouseover',()=>{
    clearInterval(two);
})
Banner_four.addEventListener('mouseleave',()=>{
     oddstart();
})
Banner_six.addEventListener('mouseover',()=>{
    clearInterval(two);
})
Banner_six.addEventListener('mouseleave',()=>{
     oddstart();
})


  


