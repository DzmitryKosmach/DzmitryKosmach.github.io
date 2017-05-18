function LastFmRequest() {  
}

LastFmRequest.URL = "http://ws.audioscrobbler.com/2.0";
LastFmRequest.API_KEY = "61d6600170ff0cf825a3ee62d4bd7fa6";
LastFmRequest.FORMAT_RESPONSE = "json";

LastFmRequest.prototype = Object.create(Request.prototype);
LastFmRequest.prototype.constructor = LastFmRequest;

LastFmRequest.prototype.load = function (requestMethod, artist, album, page) {   
  var requestMethod = requestMethod ? "/?method=" + requestMethod : "";
  var artist = artist ? "&artist=" + artist : "";
  var album = album ? "&album=" + album : "";
  var apiKey = "&api_key=" + LastFmRequest.API_KEY;
  var format = "&format=" + LastFmRequest.FORMAT_RESPONSE;
  var page = page ? "&page=" + page : "";
  var queryParams = LastFmRequest.URL + requestMethod + artist + album + apiKey + format + page;  
  Request.prototype.load.apply(this, [queryParams]);
}

LastFmRequest.prototype.parseText = function (text) {
  return JSON.parse(text);
}

LastFmRequest.prototype.doAfterLoad = function () {
  console.log(this.response);
}
