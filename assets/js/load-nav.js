
window.addEventListener('load', function() {
    document.getElementById("header").innerHTML = `
    <a href="#"><div class="logo"></div></a>
    <div class="search">
        <input type="text" id="inputText" placeholder="Ezync Search">
        <div class="search-icon">
            <img src="http://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Search-icon.png" ></img>
        </div>
    </div>    
    <div class="right-side">
        <ul>
            <li><a href = "./feed.html"><img src="../../images/user-page/news.png"></a></li>
            <li><a href = "./profile.html"><img class="profile" src="../../images/logo_192x192.png"></a></li>
            <li><a href = "./chat.html"><img src="../../images/user-page/chat.png"></a></li>
            <li><a href = "./negotiation.html"><img src="../../images/user-page/handshake.png"></a></li>
            <li><a href = "#setting"><img src="../../images/user-page/settings.png"></a></li>
        </ul>
    </div>`;
});