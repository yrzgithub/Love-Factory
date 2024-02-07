function play(source)
{
    var audio = new Audio(source);
    audio.loop = false;
    audio.play();
}

function setListener(source,element)
{
    var audio = new Audio(source);
    audio.loop = false;

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
}