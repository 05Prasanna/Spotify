console.log("Welcome to spotify")
//Initialize the variable
let songindex=0;
let audioelement =new Audio('songs');
let:masterPlay=document.getElementById('masterPlay');
let:myprogressBar=document.getElementById('myprogressBar');
let:gif=document.getElementById('gif');
let:songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:" Abhi-Na-Jao-Chhod-Kar",Filepath:"songs/song 1.mp3",coverpath:"cover/1.jpeg"},
    {songName:"Kora Kagaz Tha Yeh",Filepath:"songs/song 2.mp3",coverpath:"cover/2.jpeg"},
    {songName:"Brekup song ",Filepath:"songs/song 3.mp3",coverpath:"cover/3.jpeg"},
    {songName:"jee le zara",Filepath:"songs/jee le zara,mp3",coverpath:"cover/4.jpeg"},
    {songName:"tu jane na ",Filepath:"songs/song 5.mp3",coverpath:"cover/5.jpeg"},
]
songItem.forEach((element, i)=>{

    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].src=innerText=songs[i].songName


})
//audioelement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classlist.add(' fa-pause-circle');
        masterPlay.classlist.clear('far fa-3x fa-play-circle');
       
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
         masterPlay.classlist.clear('far fa-3x fa-pause-circle');
        masterPlay.classlist.add('far fa-3x fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to events 
audioelement.addEventListener('timeupdate',()=>{
    
 //update seekbar   
 progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
 console.log(progress); 
 myprogressBar.value=progress;
 
   
})