"use strict";

var API_KEY = "61d6600170ff0cf825a3ee62d4bd7fa6";
var format = "json";
new LastFmRequest("chart.gettopartists", null , null, API_KEY, format);
new LastFmRequest("artist.search", "cher" , null ,API_KEY, format);
new LastFmRequest("artist.getInfo", "cher" , null,API_KEY, format);
new LastFmRequest("album.getInfo", "cher", "Believe",API_KEY, format);
