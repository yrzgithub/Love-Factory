function play(source)
{
    console.log("Playing",source);

    var audio = new Audio(source);
    audio.loop = false;
    audio.play();
    // audio.paused = true;

    window.onclick = (e) => {
        if(audio.paused)
        {
            audio.play();
        }
        else 
        {
            audio.pause();
        };
    }
}