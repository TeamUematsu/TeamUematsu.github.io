$(document).ready(function () {
    console.log("ready!");

    let searchParams = (location.search.substr(1)).split("=")
    let param = searchParams[1]


    if (param == "ff10") {
        $("#title").append("<p>Final Fantasy X soundtrack</p>");
        $("#cover").append($('<img>', { class: 'card-img-top', src: '../assets/art10.png' }));
        $("#desc").append("<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>");
        $("#song1").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174808194&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song2").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/155195069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song3").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174807884&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song4").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174808407&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));

    }
    if (param == "ff9") {
        $("#title").append("<p>Final Fantasy IX soundtrack</p>");
        $("#cover").append($('<img>', { class: 'card-img-top', src: '../assets/art9.png' }));
        $("#desc").append("<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>");
        
    }
    if (param == "ff8") {
        $("#title").append("<p>Final Fantasy VIII soundtrack</p>");
        $("#cover").append($('<img>', { class: 'card-img-top', src: '../assets/art8.png' }));
        $("#desc").append("<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>");
        $("#song1").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/211511540&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song2").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/164172531&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song3").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/211513226&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song4").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/195179678&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
    }
    if (param == "ff6") {
        $("#title").append("<p>Final Fantasy VI soundtrack</p>");
        $("#cover").append($('<img>', { class: 'card-img-top', src: '../assets/art6.png' }));
        $("#desc").append("<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>");
        
    }

/**<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src=></iframe>

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src=></iframe>

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src=></iframe>
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src=></iframe>
<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="></iframe>
*///
});