const Card_song1= document.getElementById('play1');
const play=document.querySelector('.play')
const pause=document.querySelector('.pause')
const play_pause_btn=document.querySelector('.play_div');
const play_Bar_bottom=document.querySelector('.play_Section');
const audio = document.getElementById("myAudio");
// 
const Audio_Source=document.getElementById('playing_song_audio');
const Playing_song_image=document.getElementById('playing_song_image');
const Playing_song_name=document.getElementById('playing_song_name');
const Playing_song_artist=document.getElementById('playing_song_artist');



const Card_song2=document.getElementById('play2');

const Card_song3=document.getElementById('play3');

const Card_song4=document.getElementById('play4');


Card_song1.addEventListener('click',()=>{

    // play_Bar_bottom.classList.remove('hidden');
    Audio_Source.src='./DataBase/badtameez.mp3';
    Playing_song_name.textContent='Badtameez Dil(Ranbir Kapoor)';
    Playing_song_artist.textContent='Benny Dayal';
    Playing_song_image.src='./Image/badtameez_dil.jpg'; 
    play_Bar_bottom.classList.remove('hidden');
    play.classList.add('hidden');

    pause.classList.remove('hidden');

    audio.load();
    audio.play();

      
})

Card_song2.addEventListener('click',()=>{
      
        //   play_Bar_bottom.classList.remove('hidden');
          Audio_Source.src='./DataBase/HOOKAH BAR  (LYRICS)  [Slowed & Reverb].mp3';
          Playing_song_name.textContent="Hookah Bar"
          Playing_song_artist.textContent='Yo Yo Honey Sing';
          Playing_song_image.src='./Image/Hookah.jpg';
          audio.load();
          audio.play();


          play_Bar_bottom.classList.remove('hidden');
    play.classList.add('hidden');

    pause.classList.remove('hidden');


         

     

})

Card_song3.addEventListener("click",()=>{{

    Audio_Source.src='./DataBase/gone_Girl_Badshah.m4a';
    Playing_song_name.textContent="Gone Girl(#लड़कीख़राब)"
    Playing_song_artist.textContent='Badshah';
    Playing_song_image.src='./Image/gone_girl.jpg';
  //   audio.currentTime=0;
    audio.load();
    audio.play();

    play_Bar_bottom.classList.remove('hidden');
    play.classList.add('hidden');

    pause.classList.remove('hidden');



}})

Card_song4.addEventListener('click',()=>{

    Audio_Source.src='./DataBase/SalmanKhan.mp3';
    Playing_song_name.textContent="Oh Oh Jane Jaana"
    Playing_song_artist.textContent='"Oh Oh Jane Jaana" Salman Khan Full Song';
    Playing_song_image.src='./Image/OhOH_jane_jaana.jpg';
  //   audio.currentTime=0;
    audio.load();
    audio.play();

    play_Bar_bottom.classList.remove('hidden');
    play.classList.add('hidden');

    pause.classList.remove('hidden');

    

})

// function btn_Change(){
//     play.classList.toggle('hidden');
//     pause.classList.toggle('hidden');
//     play_pause_btn.classList.toggle('bg-red-800');
// }

// play_pause_btn.addEventListener("click",btn_Change);

// function playMusic() {
    
//     audio.play();
// }

// function pauseMusic() {
   
//     audio.pause();
// }

play.addEventListener('click',()=>{
      audio.play();
      pause.classList.remove('hidden');
      play.classList.add('hidden');
        
})
pause.addEventListener('click',()=>{
         audio.pause();
         pause.classList.add('hidden');
         play.classList.remove('hidden');
})




