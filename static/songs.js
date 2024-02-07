function play(source)
{
    var audio = setListener(source,window);
    audio.play();
}

function setListener(source,element)
{
    var audio = new Audio(source);
    audio.loop = false;
    audio.paused = true;

    if(element.onclick!=null) return audio;

    element.onclick = (e) => {

        if(audio.paused)
        {
            audio.play();
        }
        else 
        {
            audio.pause();
        }
    }

    console.log("onclick set");

    return audio;
}