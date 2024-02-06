function play(source)
{
    console.log(source);

    var audio = new Audio(source);
    audio.loop = false;
    audio.paused = true;

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