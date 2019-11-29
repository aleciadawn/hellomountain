



//Example album
var albumOne = {
  description: 'Transcend is the third release and is not even close to the end for the Colorado group. It is a showing of their constant movement ahead. It’s acknowledges the journey through ambiguity and being content with the uncertainty of direction. Transcend was written in order to discern the reasons for the time you’ve misused and the indecision you may find on how to squander it next. This is meant to push you forward; it is not the end.',
  name: 'Transcend',
  pinClass:'album-one',
  albumArtUrl: '../Content/Assets/Images/transcend-cover.png',
  // albumDescription: "Transcend is the third release and is not even close to the end for the Colorado group. It is a showing of their constant movement ahead. It’s acknowledges the journey through ambiguity and being content with the uncertainty of direction. Transcend was written in order to discern the reasons for the time you’ve misused and the indecision you may find on how to squander it next. This is meant to push you forward; it is not the end."",
  tracks: [
    { name: 'Welcome To Paris', length: '3:33' },
    { name: 'Electric Empire', length: '2:28' },
    { name: 'Papercut', length: '4:02' },
    { name: 'Metaman', length: '3:05' },
    { name: 'Instant Beta', length: '2:42' },
    { name: 'Instant Delta', length: '2:55' }
  ]
};
//Example album
var albumTwo = {
  description: 'Transcend is the third release and is not even close to the end for the Colorado group. It is a showing of their constant movement ahead. It’s acknowledges the journey through ambiguity and being content with the uncertainty of direction. Transcend was written in order to discern the reasons for the time you’ve misused and the indecision you may find on how to squander it next. This is meant to push you forward; it is not the end.',
  name: 'Transcend',
  pinClass:'album-two',
  albumArtUrl: '../Content/Assets/Images/transcend-cover.png',
  // albumDescription: "Transcend is the third release and is not even close to the end for the Colorado group. It is a showing of their constant movement ahead. It’s acknowledges the journey through ambiguity and being content with the uncertainty of direction. Transcend was written in order to discern the reasons for the time you’ve misused and the indecision you may find on how to squander it next. This is meant to push you forward; it is not the end."",
  tracks: [
    { name: 'This is super neato', length: '3:33' },
    { name: 'Electric Empire', length: '2:28' },
    { name: 'Papercut', length: '4:02' },
    { name: 'Metaman', length: '3:05' },
    { name: 'Instant Beta', length: '2:42' },
    { name: 'Instant Delta', length: '2:55' }
  ]
};
//Example album
var albumThree = {
  description: 'Transcend is the third release and is not even close to the end for the Colorado group. It is a showing of their constant movement ahead. It’s acknowledges the journey through ambiguity and being content with the uncertainty of direction. Transcend was written in order to discern the reasons for the time you’ve misused and the indecision you may find on how to squander it next. This is meant to push you forward; it is not the end.',
  name: 'Transcend',
  pinClass:'album-three',
  albumArtUrl: '../Content/Assets/Images/transcend-cover.png',
  // albumDescription: "Transcend is the third release and is not even close to the end for the Colorado group. It is a showing of their constant movement ahead. It’s acknowledges the journey through ambiguity and being content with the uncertainty of direction. Transcend was written in order to discern the reasons for the time you’ve misused and the indecision you may find on how to squander it next. This is meant to push you forward; it is not the end."",
  tracks: [
    { name: 'Bob is your uncle', length: '3:33' },
    { name: 'Electric Empire', length: '2:28' },
    { name: 'Papercut', length: '4:02' },
    { name: 'Metaman', length: '3:05' },
    { name: 'Instant Beta', length: '2:42' },
    { name: 'Instant Delta', length: '2:55' }
  ]
};

// Angular Module
copJamz = angular.module('CopJamz', []);

//Cop Jamz Controller
copJamz.controller('Album.controller', ['$scope', 'Player', function($scope, Player) {
  // $scope.album = angular.copy(albumOne);
  $scope.albums = [albumOne, albumTwo, albumThree];

  var hoveredTrack = null;
  var playingTrack = null;

  $scope.onHoverTrack = function(track) {
    hoveredTrack = track;
  };

  $scope.offHoverTrack = function(track) {
    hoveredTrack = null;
  };

  // $scope.firstTrack = $scope.album.tracks[0];

  $scope.getTrackState = function(track) {
    if(track === Player.currentTrack && Player.playing) {
      return 'playing';
    }
    else if(track === hoveredTrack) {
      return 'hovered';
    }
    else {
      return 'default';
    }
  };

  $scope.playTrack = function(album,track) {
    Player.setTrack(album, track);
    Player.play();
    console.log('Track played');
  };

  $scope.pauseTrack = function(album,track) {
    Player.pause();
  };

}]);

//Player Controller
copJamz.controller('Player.controller', ['$scope', 'Player', function($scope, Player) {

  $scope.player = Player;

}]);

//Player Service
copJamz.service('Player', function() {
  var trackIndex = function(album, track) {
    return album.tracks.indexOf(track)
  };

  return {
    currentTrack: null,
    currentAlbum: null,
    playing: false,

    play: function() {
      this.playing = true;
    },
    pause: function() {
      this.playing = false;
    },
    next: function() {
      var currentTrackIndex = trackIndex(this.currentAlbum, this.currentTrack);
      currentTrackIndex++;
      if(currentTrackIndex >= this.currentAlbum.tracks.length) {
        currentTrackIndex = 0;
      }
      this.currentTrack = this.currentAlbum.tracks[currentTrackIndex];
    },
    previous: function () {
      var currentTrackIndex = trackIndex(this.currentAlbum, this.currentTrack);
      currentTrackIndex--;
      if(currentTrackIndex < 0) {
        currentTrackIndex = this.currentAlbum.tracks.length - 1;
      }
       this.currentTrack = this.currentAlbum.tracks[currentTrackIndex];
    },
    setTrack: function(album, track) {
      this.currentAlbum = album;
      this.currentTrack = track;
    }
  };
});
