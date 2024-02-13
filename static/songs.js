function play(source)
{
    console.log("this the source",source);
    var audio = setListener(source,window);
    audio.play();

    return audio;
}

function setListener(source,element)
{

    console.log("source",source);

    var audio = new Audio(source);
    audio.loop = false;
    audio.paused = true;

    console.log(source);

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