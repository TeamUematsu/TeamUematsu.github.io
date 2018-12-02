$(document).ready(function () {
    console.log("ready!");

    let searchParams = (location.search.substr(1)).split("=")
    let param = searchParams[1]


    if (param == "ff10") {
        $("#title").append("<h2>Final Fantasy X soundtrack</h2>");
        $("#cover").append($('<img>', { class: 'card-img-top', src: '../assets/art10.png' }));
        $("#desc").append("<p> Final Fantasy X - Released on August 1, 2001 by DigiCube and re-released May 10, 2004 by Square Enix. This album spans 4 discs, 92 tracks and covers a complete duration of 272.43 minutes. Composed, arranged and produced by Nobuo Uematsu. This album is regarded as “absolutely amazing” by reviewers with especially high regard for the track “To Zanarkand”.</p>");
        $("#song1").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174808194&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song2").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/155195069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song3").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174807884&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song4").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174808407&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));

    }
    if (param == "ff9") {
        $("#title").append("<h2>Final Fantasy IX soundtrack</h2>");
        $("#cover").append($('<img>', { class: 'card-img-top', src: '../assets/art9.png' }));
        $("#desc").append("<p>Final Fantasy IX - Released on August 30, 2000 by DigiCube and re-released on May 10,  2004 by Square Enix. This album spans 4 discs, 110 tracks and 286.5 minutes. Composed, arranged and produced by Nobuo Uematsu. This album is regarded by reviewers as “a blessing for Final Fantasy music” and is best known for its soundtrack “Melodies of Life” which is the games theme song.</p>");
        $("#song1").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/155194704&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song2").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/205517136&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song3").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/250902835&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song4").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/203947120&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
    }
    if (param == "ff8") {
        $("#title").append("<h2>Final Fantasy VIII soundtrack</h2>");
        $("#cover").append($('<img>', { class: 'card-img-top', src: '../assets/art8.png' }));
        $("#desc").append("<p>Final Fantasy VIII - Released on March 10, 1999 by DigiCube and re-released May 10, 2004 by Square Enix. This album spans 4 discs, 74 tracks and covers a complete duration of 249 minutes.  Composed and produced by Nobuo Uematsu. This album is best known for the two tracks “Eyes on Me” which is the games theme song and “Liberi Fatali” which is played during the games introduction. Music critics have reviewed the album as “one of the most memorable scores that you will ever hear”.</p>");
        $("#song1").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/211511540&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song2").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/164172531&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song3").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/211513226&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song4").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96848378&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
    }
    if (param == "ff6") {
        $("#title").append("<h2>Final Fantasy VI soundtrack</h2>");
        $("#cover").append($('<img>', { class: 'card-img-top', src: '../assets/art6.png' }));
        $("#desc").append("<p>Final Fantasy VI - Released on March 25, 1994 by DigiCube and re-released October 1, 2004 by Square Enix. This album spans 3 discs, 61 tracks and cover a complete duration of 187.76 minutes.  Composed by Nobuo Uematsu. This album is best known for the track “Dancing Mad” which is regarded as some of the “most asounding music ever created on a keyboard”. Music critics have reviewed the album, saying that “almost every track here is truly a very good or even great composition”.</p>");
        $("#song1").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125471164&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song2").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125470931&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song3").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125471284&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
        $("#song4").append($('<iframe>', { width:'100%', height:'166',scrolling:'no', frameborder:'no',allow:'autoplay',src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/211512313&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}));
    }
});

/**<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src=></iframe>
"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/205517136&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src=></iframe>
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src=></iframe>
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src=></iframe>
*/