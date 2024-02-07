function play(source)
{
    var audio = setListener(source,element);
    audio.play();
}

function setListener(source)
{
    var audio = new Audio(source);
    audio.loop = false;
    audio.paused = true;

    window.onclick = (e) => {

        console.log("onclick set");

        if(audio.paused)
        {
            audio.play();
        }
        else 
        {
            audio.pause();
        }
    }

    return audio;
}