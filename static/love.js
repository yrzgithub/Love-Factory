function redirect(button)
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

    fetch("/get_stream_url")

    .then(response => response.text())

    .then(url => {

            url = "https://rr1---sn-p5qs7nsr.googlevideo.com/videoplayback?expire=1707646924&ei=bEvIZa7TKL6O_9EP7s-yyA0&ip=52.3.228.40&id=o-AK6Mt7YX2pI88VUeZ__VAmuBfPm8Ij3m9PBS6Cb1tYRt&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Fv&mm=31%2C29&mn=sn-p5qs7nsr%2Csn-p5qlsn76&ms=au%2Crdu&mv=m&mvi=1&pl=19&gcr=us&initcwndbps=1281250&spc=UWF9f8rEjW6hdMnnP1BLSBZoeKsbT6VyJSQy9LZ2yshSWvI&vprv=1&svpuc=1&mime=audio%2Fwebm&ns=dtRpl9Cu8VXziVLnRV8AmjMQ&gir=yes&clen=6208128&dur=358.741&lmt=1700451760111212&mt=1707625004&fvip=2&keepalive=yes&fexp=24007246&c=WEB&sefc=1&txp=5532434&n=FDznPOZxifSjMbswC&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AAO5W4owRQIgcSp53T0QtfFmGDBJSIPdZwsj4ZoNQ1GH0zjdXdeepPgCIQDW9LgbYoMtHsvCWALwMNrEmf8Mop_0Hle8kqg1Oy6dVQ%3D%3D&sig=AJfQdSswRQIgY2R46XRt5FNPCvz60NWsucFcZvvUxIefmO7moemxwZcCIQDqLfaTWoldie-4jb1eRjuxQn1YDDhnhDtsjPZUZqyChw==";
            var audio = new Audio(url);

            var promise = new Promise((resolve,reject) => {

                audio.oncanplay = (event) => {
                    resolve("Done");
                };

                audio.onerror = (event) => {
                    reject("Reject")
                }

            });

            promise

            .then(() => 
            {
                console.log(url);
                var link = window.location.origin +"/you?from=" + name + "&to=" + their +"&dedicate=" + btoa(song);

                navigator
                .clipboard
                .writeText(link)
                .then(() => 
                    {
                        alert("Link Copied to Clipboard");
                    }
                )
                .catch((error) => 
                    {
                        console.log(error);
                    });
            })

            .catch((error) => {
                console.log(error);
                alert("Change the query and try again");
            });
    
        });
    
}