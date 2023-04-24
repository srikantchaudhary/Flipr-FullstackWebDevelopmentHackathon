let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")



console.log(song_play)

let songs_list = [
    {
        name : 'Baller',
        Image : 'images/Baller.jpg',
        Song : 'music/Baller_192(PagalWorld.com.se).mp3',
        Singer : 'Shubh'
    },
    {
        name : 'Raatan Lambiyan',
        Image : 'images/raatan lambiyan.jpeg',
        Song : 'music/Raatan Lambiyan.mp3',
        Singer : 'Jubin Nautiyal, Asees Kaur'
    },
    {
        name : 'Lover',
        Image : 'images/lover_image.jpg',
        Song : 'music/Lover.mp3',
        Singer : 'Diljit'
    },
    {
        name : 'Maan Meri Jaan',
        Image : 'images/maan meri jaan.jpeg',
        Song : 'music/Maan Meri Jaan.mp3',
        Singer : 'King'
    },
]

let i=0;
let flag=false;

var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer

song_play.addEventListener("click", function(){

    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    else{
        audio.pause()
        flag=false;
        console.log(flag)
    }
})

song_next.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i+1;
    if(i>=songs_list.length){
        
        i=0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    
})

song_prev.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i-1;
    if(i<=0){
        i=songs_list.length-1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    
    
})




