function LastFmRequest(method, artist, album, api_key, format) {
  var url = "http://ws.audioscrobbler.com/2.0";
  var method = method ? "/?method=" + method : "";
  var artist = artist ? "&artist=" + artist : "";
  var album = album ? "&album=" + album : "";
  var apiKey = api_key ? "&api_key=" + api_key : "";
  var format = format ? "&format=" + format : "";
  this.load(new QueryParams("GET", url + method + artist + album + apiKey + format));
}

LastFmRequest.prototype = Object.create(Request.prototype);
LastFmRequest.prototype.constructor = LastFmRequest;

LastFmRequest.prototype.load = function (queryParams) {
  Request.prototype.load.apply(this, [queryParams]);
}

LastFmRequest.prototype.doAfterLoad = function () {
  console.log(this.response);
}
