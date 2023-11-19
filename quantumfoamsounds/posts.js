// https://github.com/fureweb-com/public-google-sheets-parser



function getSheetsJSON() {
    const spreadsheetId = '1LUelze7VDmzCczxojkIRPjOgFJGTvyhHBGPYFg9637w'
    const parser = new PublicGoogleSheetsParser()
    parser.parse(spreadsheetId, "Posts").then((items) => {
        generatePosts(items);
    });
}



function getPostContents(youtubeUrl, title, date, description) {
    var date = new Date(date);
    var dateStr = date.toLocaleDateString();

    var urlSplit = youtubeUrl.split("watch?v=");
    var vidId = urlSplit[urlSplit.length-1];
    var newUrl = youtubeUrl.replace("watch?v=", "embed/");


    return `
        <div class="post">
            <iframe
                width="512"
                height="288"
                src="https://tube.rvere.com/embed?v=${vidId}"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
            <p class="post-title">${title}</p>
            <p class="post-date">${dateStr}</p>
            <p class="description">${description}</p>
        </div>
        `;
}



const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
function generatePosts(json) {
    console.log("Raw sheets JSON:");
    console.log(json);

    var postsHTML = [];

    for (var i = 0; i < json.length; i++) {
        newDesc = json[i]['Post'].replaceAll(urlRegex, function(url) {
            console.log(url);
            return `<a target="_blank" href="${url}">${url}</a>`;
        }).replaceAll("\n", "<br>");

        postsHTML.push(
            getPostContents(
                json[i]['Youtube URL (watch?v= format)'].replaceAll("\n", "<br>"),
                json[i]['Title'].replaceAll("\n", "<br>"),
                json[i]['ISO time of post (see https://greenwichmeantime.com/articles/clocks/iso/)'].replaceAll("\n", "<br>"),
                newDesc
            )
        );
    }

    for (var i=0; i<postsHTML.length; i++) {
        if (i != 0) {
            document.getElementById("posts").innerHTML += '<div class="post-divider"></div>';
        }
        document.getElementById("posts").innerHTML += postsHTML[i];
    }

}