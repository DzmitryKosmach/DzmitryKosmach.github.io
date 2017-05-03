function LastFmRequest(reguestMethod, artist, album, api_key) {
  var url = "http://ws.audioscrobbler.com/2.0";
  var reguestMethod = reguestMethod ? "/?method=" + reguestMethod : "";
  var artist = artist ? "&artist=" + artist : "";
  var album = album ? "&album=" + album : "";
  var apiKey = api_key ? "&api_key=" + api_key : "";
  var format = "&format=json";
  this.queryParams = url + reguestMethod + artist + album + apiKey + format;
}

LastFmRequest.prototype = Object.create(Request.prototype);
LastFmRequest.prototype.constructor = LastFmRequest;

LastFmRequest.prototype.load = function () {
  Request.prototype.load.apply(this, [this.queryParams]);
}

LastFmRequest.prototype.parseText = function (text) {
  return JSON.parse(text);
}

LastFmRequest.prototype.doAfterLoad = function () {
  console.log(this.response);
}
