

// 
const All=document.querySelector('.section_All');
const Trending_song=document.querySelector('.section_Trending_Now');
const Old_song=document.querySelector('.section_old_song');
const new_song=document.querySelector('.section_new_song');
const mood_song=document.querySelector('.section_mood');
const podcast_song=document.querySelector('.section_podcast');

// anchor


const All_btn=document.getElementById('All');
const Trending_song_btn=document.getElementById('Trending');
const Old_song_btn=document.getElementById('Old');
const new_song_btn=document.getElementById('New_song');
const mood_song_btn=document.getElementById('Mood');
const podcast_song_btn=document.getElementById('Podcast');


  
function Hide(){
     All.classList.add('hidden');
     Trending_song.classList.add('hidden');
     Old_song.classList.add('hidden');
     new_song.classList.add('hidden');
     mood_song.classList.add('hidden'); 
     podcast_song.classList.add('hidden');
                     

}


     All_btn.addEventListener('click',()=>{
          Hide();

     All.classList.remove('hidden'); 
    



     });
     Trending_song_btn.addEventListener('click',()=>{
          Hide();

     Trending_song.classList.remove('hidden');
    

     })
     Old_song_btn.addEventListener('click',()=>{
        Hide();
     
     Old_song.classList.remove('hidden');
   
     })
     new_song_btn.addEventListener('click',()=>{
          Hide();
          
          new_song.classList.remove('hidden');
         
     })
     mood_song_btn.addEventListener("click",()=>{
          Hide();
          // All.classList.add('hidden');
          // Trending_song.classList.add('hidden');
          // Old_song.classList.add('hidden');
          // new_song.classList.add('hidden');
          mood_song.classList.remove('hidden'); 
          // podcast_song.classList.add('hidden');
     })
     podcast_song_btn.addEventListener("click",()=>{
          Hide();
          // All.classList.add('hidden');
          // Trending_song.classList.add('hidden');
          // Old_song.classList.add('hidden');
          // new_song.classList.add('hidden');
          // mood_song.classList.add('hidden'); 
          podcast_song.classList.remove('hidden');
     })
 
