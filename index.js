function theBeatlesPlay(music, instrument){
  let musical = [];
  for (var i = 0; i < music.length; i++) {
    musical.push(`${music[i]} plays ${instrument[i]}`);
}
return musical;
  }
