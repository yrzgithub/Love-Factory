function play(source)
{
    var audio = setListener(source,window);
    audio.play().catch((error)=>console.log(error));

    return audio;
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
            console.log("playing");
            audio.play();
        }
        else 
        {
            console.log("paused");
            audio.pause();
        }
    }

    console.log("onclick set");

    return audio;
}