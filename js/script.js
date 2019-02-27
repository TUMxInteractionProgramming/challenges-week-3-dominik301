console.log('app is alive')

function switchChannel(channelName){
    console.log('Tuning into channel ' + channelName);
    document.getElementById('app-bar').innerHTML = channelName + 
        '<small> by ' +
            '<a href="http://w3w.co/cheeses.yard.applies" target="_blank">' +
                '<strong>upgrading.never.helps</strong>' +
            '</a>' +
        '</small>'
    switchNotStarred()
}

function switchNotStarred(){
    $('#app-bar-star').attr("src","http://ip.lfe.mw.tum.de/sections/star-o.png");
}

function switchStarred(){
    $('#app-bar-star').attr("src","http://ip.lfe.mw.tum.de/sections/star.png");
}