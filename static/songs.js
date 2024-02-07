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

    element.onclick = (e) => {

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