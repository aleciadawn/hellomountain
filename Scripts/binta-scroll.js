



//Example album
var albumOne = {
  name: 'Transcend',
  description: 'Transcend is the third release and is not even close to the end for the Colorado group. It is a showing of their constant movement ahead. It’s acknowledges the journey through ambiguity and being content with the uncertainty of direction. Transcend was written in order to discern the reasons for the time you’ve misused and the indecision you may find on how to squander it next. This is meant to push you forward; it is not the end.',
  pinClass:'album-one',
  albumArtUrl: '../Content/Assets/Images/transcend-cover.png',
  // albumDescription: "Transcend is the third release and is not even close to the end for the Colorado group. It is a showing of their constant movement ahead. It’s acknowledges the journey through ambiguity and being content with the uncertainty of direction. Transcend was written in order to discern the reasons for the time you’ve misused and the indecision you may find on how to squander it next. This is meant to push you forward; it is not the end."",
  tracks: [
    { name: 'The Window', length: '4:40', song: new Audio('../Content/Assets/Audio/Transcend/01_the_window.mp3') },
    { name: 'Face You Know', length: '3:02', song: new Audio('../Content/Assets/Audio/Transcend/02_face_you_know.mp3') },
    { name: 'Futures', length: '4:17', song: new Audio('../Content/Assets/Audio/Transcend/03_futures.mp3') },
    { name: 'Wasting It Right', length: '4:38', song: new Audio('../Content/Assets/Audio/Transcend/04_wasting_it_right.mp3') },
    { name: 'Rewind', length: '6:14', song: new Audio('../Content/Assets/Audio/Transcend/05_rewind.mp3') },
    { name: 'Moving', length: '6:18', song: new Audio('../Content/Assets/Audio/Transcend/06_moving.mp3') },
    { name: 'The End', length: '2:58', song: new Audio('../Content/Assets/Audio/Transcend/07_transcend.mp3') }
  ]
};
//Example album
var albumTwo = {
  name: 'Machine',
  description: 'The follow up release is a polished continuation from the Denver, Colorado based trio. There is an identity in place; soaring vocals, matured arrangements, with a driving rhythm section backing it up. The EP confronts the struggles of monotony and the constant progression that comes with the state of equilibrium and the trepidation of what comes next. Each song on this record will tell you a story about yourself that helps push you forward even in your most repetitive and complacent states.',
  pinClass:'album-two',
  albumArtUrl: '../Content/Assets/Images/machine-cover.png',
  // albumDescription: "Transcend is the third release and is not even close to the end for the Colorado group. It is a showing of their constant movement ahead. It’s acknowledges the journey through ambiguity and being content with the uncertainty of direction. Transcend was written in order to discern the reasons for the time you’ve misused and the indecision you may find on how to squander it next. This is meant to push you forward; it is not the end."",
  tracks: [
    { name: 'Squares', length: '2:38', song: new Audio('../Content/Assets/Audio/Machine/01_squares.mp3') },
    { name: 'Fear of Heights', length: '3:17', song: new Audio('../Content/Assets/Audio/Machine/02_fear_of_heights.mp3')},
    { name: 'My Morning', length: '4:16', song: new Audio('../Content/Assets/Audio/Machine/03_my_morning.mp3')},
    { name: 'Right or Wrong', length: '4:11', song: new Audio('../Content/Assets/Audio/Machine/04_right_or_wrong.mp3')},
    { name: 'Upstate', length: '4:32', song: new Audio('../Content/Assets/Audio/Machine/05_upstate.mp3')},
    { name: 'Heyman', length: '6:43', song: new Audio('../Content/Assets/Audio/Machine/06_hayman.mp3')}
  ]
};
//Example album
var albumThree = {
  name: 'Enigma',
  description: 'The debut release from Hello, Mountain is an inception of unique sound. The band found itself difficult to define and Enigma strives to explain the mystery. It is an attempt to find a place and purpose. Enigma addresses the unknown and uncertainty in the routine, much like repeating the same word and doubting if there is still knowledge of the accent or definition. You’ll find yourself listening to the raw sounds long enough to create an anomaly within and a struggle to define what is seemingly obvious.',
  pinClass:'album-three',
  albumArtUrl: '../Content/Assets/Images/enigma-cover.png',
  // albumDescription: "Transcend is the third release and is not even close to the end for the Colorado group. It is a showing of their constant movement ahead. It’s acknowledges the journey through ambiguity and being content with the uncertainty of direction. Transcend was written in order to discern the reasons for the time you’ve misused and the indecision you may find on how to squander it next. This is meant to push you forward; it is not the end."",
  tracks: [
    { name: 'Hello, Mountain', length: '3:32', song: new Audio('../Content/Assets/Audio/Enigma/01_hello_mountain.mp3') },
    { name: 'Everyting', length: '3:33', song: new Audio('../Content/Assets/Audio/Enigma/02_everything.mp3') },
    { name: 'Deer', length: '4:37', song: new Audio('../Content/Assets/Audio/Enigma/03_deer.mp3') },
    { name: 'Something New', length: '4:24', song: new Audio('../Content/Assets/Audio/Enigma/04_something_new.mp3') },
    { name: 'Manhattan', length: '3:58' , song: new Audio('../Content/Assets/Audio/Enigma/05_manhattan.mp3')},
    { name: 'Over the Fence', length: '5:22', song: new Audio('../Content/Assets/Audio/Enigma/06_over_the_fence.mp3') }

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
      this.currentTrack.song.play();
      this.playing = true;
    },
    pause: function() {
      this.currentTrack.song.pause();
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
