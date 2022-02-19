XMLHttpRequest.send(
    "GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=123&key=AIzaSyCMeZuPzewkR9PjjKH1YCP4gZbiz-xUnBg HTTP/1.1"
).then((response) => console.log(response));
