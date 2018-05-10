$(document).ready(function () {
    $.get("https://www.reddit.com/r/aww/.json").then(function (json) {
    let text = json.data.children;    
    
    //$("#output").text(text.toString());
    let target = $("#output");
        //list.html(data);
        console.log(text[0].data.author);
        for (i=0; i<text.length; i++) {
            console.log(text[i].data.author);
            target.append(
            `<a href=${text[i]}>
            <h2>${text[i].data.title}</h2>
            <p> Author: ${text[i].data.author}</p>
            <img src="${text[i].data.thumbnail}"/>
            </a>`
        
        );
        }
    });
});