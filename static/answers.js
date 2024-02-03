const name = "{{frm}}";
const to = "{{to}}"

console.log(name);

function showanswer(para)
{
    para.setAttribute("style","display:block;")
}

function hide(id)
{
    document.getElementById(id).setAttribute("style","color:darkgrey");
}

function happy(element,ans)
{
    var para = document.getElementById("happyExp");

    console.log(ans,name.length);

    if(ans == to.length)
    {
        showanswer(para);
    }
    else 
    {
        element.disabled = true;
        hide(ans);
    }
}

function dna(element,ans)
{
    var para = document.getElementById("dna");

    if(ans=="C++")
    {
        showanswer(para);
    }
    else 
    {
        element.disabled = true;
    }
}
            
function tales(element,ans)
{
    var para = document.getElementById("tales");
    showanswer(para);
}

function abcd(element)
{
    var ans = element.value;
}

function love(element,ans)
{
    var para = document.getElementById("love");
    if(ans=="u")
    {
        showanswer(para);
    }
    else 
    {
        element.disabled = true;
        hide(ans);
    }
}

function abcd(element,ans)
{
    var para = document.getElementById("abcd");

    if(ans == "else")
    {
        showanswer(para);
    }
    else 
    {
        element.disabled = true;
        hide(ans);
    }
}

function camera(element,ans)
{
    var para = document.getElementById("camera");
    showanswer(para);
    console.log("Clicked");
}

function letters(element,ans)
{
    var para = document.getElementById("letters");

    if(ans == 2)
    {
        showanswer(para);
    }
    else 
    {
        element.disabled = true;
        hide(ans);
    }
}

function highway(element,ans)
{
    var par = document.getElementById("highway");
    showanswer(par);
}

function father(element,ans)
{
    var par = document.getElementById("father");

    if(ans=="Practice")
    {
        showanswer(par);
    }
    else 
    {
        element.disabled = true;
        hide(ans);
    }
}

function coffee(element,ans)
{
    showanswer(document.getElementById("coffee"));
}

function drugs(element,ans)
{
    showanswer(document.getElementById("drugs"));
}

function wonders(element,ans)
{
    if(ans==9)
    {
        showanswer(document.getElementById("wonders"));
    }
    else 
    {
        element.disabled = true;
        hide(ans);
    }
}

function iloveu(element)
{
    window.location.href = window.location.origin + "/iloveu";
}