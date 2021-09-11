var audioPlayer = document.getElementById('audioplayer');
var loaded = false;
var playBtn = document.getElementById('play-btn');
var pauseBtn = document.getElementById('pause-btn');


pauseBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";
    audioPlayer.pause();
    
    return false;
});
playBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    audioPlayer.play();
    
    return false;
});

const playSong = (File) => {
    if(loaded == false){
        audioPlayer.innerHTML = `<source src = "`+File+`" type = "audio/mp3" />`;
        loaded = true;
    }
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    
}
document.querySelectorAll('.main-col').forEach(Item =>{
    Item.addEventListener("click", event =>{
        let image = Item.getAttribute('data-image');
        let artist = Item.getAttribute('data-artist');
        let song = Item.getAttribute('data-song');
        let file = Item.getAttribute('data-file');

        let playArtistComponent = document.getElementsByClassName('player-artist');
        
        playArtistComponent[0].innerHTML = `
        <img src = "`+image+`" />
        <h3> `+artist+`<br/><span>`+song+`</span></h3>
        `;
        playSong(file);
    })
});