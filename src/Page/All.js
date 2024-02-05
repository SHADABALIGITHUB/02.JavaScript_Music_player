// const Banner_one1=document.getElementById('scrolling_div1');
// const Banner_one_image=document.getElementById('scrolling_div1_image');
// // const Banner_one_text=document.getElementById('scrolling_div1_text');
// const Banner_two=document.getElementById('scrolling_div2');
// const Banner_three=document.getElementById('scrolling_div3');
// const Banner_four=document.getElementById('scrolling_div4');
// const Banner_five=document.getElementById('scrolling_div5');
// const Banner_six=document.getElementById('scrolling_div6');
// const Banner_seven=document.getElementById('scrolling_div7');
// const AllDIVS=document.getElementById('main_ALL');
// let target=500;
// setInterval(()=>{
//    AllDIVS.style.left=target+'px';
// },100)



// first Banner

const Banner_Image_one=document.getElementById('image_scrolling');
const Banner_one_text=document.getElementById('text_banner_one');
const Banner_Image_four=document.getElementById('image_scrolling_four');
const Banner_Four_text=document.getElementById('text_banner_four');
const Banner_Four_overlay=document.getElementById('image_scrolling_Overlay');

// 2 nd banner
const Banner_Image_two=document.getElementById('image_scrolling_two');
const Banner_two_text=document.getElementById('text_banner_two');
const Banner_Image_five=document.getElementById('image_scrolling_five');
const Banner_five_text=document.getElementById('text_banner_five');
const Banner_five_overlay=document.getElementById('image_scrolling_Overlay4');



setInterval(()=>{
  
obe=setInterval(()=>{
           
    Banner_Image_one.style.top="100%";
    Banner_one_text.style.top="150%";

    // 2
    Banner_Image_two.style.top="100%";
    Banner_two_text.style.top="150%";
    clearInterval(obe)

},2000)

obe_reverse=setInterval(()=>{
           
  Banner_Image_four.style.top="0%";
  Banner_Four_text.style.top="50%";
  Banner_Four_overlay.style.top="0%";

  // 2

  Banner_Image_five.style.top="0%";
  Banner_five_text.style.top="50%";
  Banner_five_overlay.style.top="0%";

  clearInterval(obe_reverse);

},2000)

obe1=setInterval(()=>{
           
  Banner_Image_four.style.top="100%";
  Banner_Four_text.style.top="150%";
  Banner_Four_overlay.style.top="100%";


  // 2

  Banner_Image_five.style.top="100%";
  Banner_five_text.style.top="150%";
  Banner_five_overlay.style.top="100%";

  clearInterval(obe1)

},6000)

obe_reverse1=setInterval(()=>{
         
Banner_Image_one.style.top="0%";
Banner_one_text.style.top="50%";

Banner_Image_two.style.top="0%";
Banner_two_text.style.top="50%";


clearInterval(obe_reverse1);

},6000)

},8000);




// const div_all=document.querySelector('.my-divs');

// div_all.style.left="100%";