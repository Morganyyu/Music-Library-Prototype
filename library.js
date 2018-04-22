function Library(name, creator) {
 this.name = name;
 this.creator = creator;
 this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype = Object.create(Library.prototype);

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Track.prototype = Object.create(Playlist.prototype);

Library.prototype.newPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

Library.prototype.newTracks = function(track) {
  this.tracks.push(track);
}

Library.prototype.totalDuration = function(tracks) {
  let totalDur = 0;
  tracks.forEach(function(track) {
    totalDur += track.length;
  })
  return totalDur;
}

Library.prototype.overallRating = function(tracks) {
  let total = 0;
  tracks.forEach(function(track) {
    total += track.rating;
  })
  let ave = total / tracks.length;
  return ave;
}


