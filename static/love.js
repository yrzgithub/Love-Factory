function redirect()
{
    var form = document.getElementById("form");
    var name = document.getElementById("name").value.trim();
    var their = document.getElementById("their").value.trim();
    var boy = document.getElementById("boy").value;
    var girl = document.getElementById("girl").value;
    var song = document.getElementById("song").value; 

    if(name=="" || their=="")
    {
        return;
    }

    var link = window.location.origin +"/you?from=" + name + "&to=" + their +"&song=" + song.replace(" ","%");
    navigator.clipboard.writeText(link);

    alert("Link Copied to clipboard");
    
    console.log(link);
}

function select(element,gen)
{
    var boy = document.getElementById("boy");
    var girl = document.getElementById("girl");

    if(gen=="boy")
    {
        girl.setAttribute("style","background-color:white;");
        boy.setAttribute("style","background-color:lightblue;");
    }
    else 
    {
        girl.setAttribute("style","background-color:lightpink;");
        boy.setAttribute("style","background-color:white;");
    }
}