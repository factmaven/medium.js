$(document).ready(function () {
    var divID = document.getElementById('medium-feed');
    var mediumUsername = divID.getAttribute('username');
    var postCount = divID.getAttribute('post-count')
    if (divID) {
        divID.innerHTML = ($.getJSON('https://api.factmaven.com/xml-to-json/?xml=https://medium.com/feed/' + mediumUsername, function (json) {
            var medium = json.rss.channel.item;
            $(divID).html('');
            for (var i in medium.slice(0, postCount)) {
                if (medium[i].category == undefined) {
                    continue;
                }
                $(divID).append(
                    '<div class="blog-post-date">' + dayjs(medium[i].pubDate).format('MMM D, YYYY @ h:mm a') + '</div>' +
                    '<a href="' + medium[i].link + '" target="_blank" class="blog-post-image" style="background-image: url(&quot;' + medium[i].encoded.match(/src="(.+?)"/)[1] + '");&quot;></a>' +
                    '<a href="' + medium[i].link + '" target="_blank" ' + 'title="' + medium[i].title + '">' +
                    '<h3 class="mt-3">' + medium[i].title + '</h3>' +
                    '</a>' +
                    '<small>by ' + medium[i].creator + '</small>' +
                    '<p>' + medium[i].encoded.replace(/<h3>(.+?)<\/h3>/g, '').replace(/<h4>(.+?)<\/h4>/g, '').replace(/<figure>(.+?)<\/figure>/g, '').replace(/<[^>]*>/g, '').substring(0, 140).trim() + '...</p>' +
                    '<small><b>Tags</b>: ' + medium[i].category.join(', ') + '</small>' +
                    '<p><a href="' + medium[i].link + '">Read More →</a></p>'
                );
            }
        }));
    }
});