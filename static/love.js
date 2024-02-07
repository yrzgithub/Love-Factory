function redirect(e)
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

    /*   
    if(!window.isSecureContext)
    {
        alert("not secure");
        return;
    } 
    */

    var link = window.location.origin +"/you?from=" + name + "&to=" + their +"&dedicate=" + btoa(song);

    navigator.
    clipboard.
    writeText(link).

    then(success => {
        alert("Link Copied to clipboard");
        console.log(success,link);
    }).
    
    catch(error => {
        console.log(error);
    });
}

function select(element,gen)
{
   /* var areu = document.getElementById("areu");

    if(gen=="boy")
    {
        boy.setAttribute("style","background-color:lightblue;");
    }
    else 
    {
        girl.setAttribute("style","background-color:lightpink;");
    } */
}