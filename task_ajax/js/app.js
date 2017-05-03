"use strict";

var apiKey = "61d6600170ff0cf825a3ee62d4bd7fa6";
new TopArtists(apiKey).load();
new ArtistSearch("cher", apiKey).load();
new ArtistGetinfo("cher", apiKey).load();
new AlbumGetInfo("cher", "Believe", apiKey).load();
