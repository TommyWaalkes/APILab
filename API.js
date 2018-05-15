$(document).ready(function () {
    let subreddit = "aww";//= prompt("please enter a subreddit name");
    $.get(`https://www.reddit.com/r/${subreddit}/.json`).then(function (json) {
    let text = json.data.children;    
    
    //$("#output").text(text.toString());
    let target = $("#output");
        //list.html(data);
        console.log(text[0].data.author);
        for (i=0; i<10; i++) {
            console.log(text[i].data.author);
            target.append(
            `<a href=${text[i].data.url}>
            <h2>${text[i].data.title}</h2>
            <p> Author: ${text[i].data.author}</p>
            <img src="${text[i].data.thumbnail}"/>
            </a>`
        
        );
        }
    });
});