function identicalFilter(array) {
    let identicalArray = [];
    for (let i = 0; i < array.length; i++) {
      let firstLetter = array[i][0];
      if (array[i] === firstLetter.repeat(array[i].length)) {
        identicalArray.push(array[i]);
      }
    }
    return identicalArray;
  }
  
  console.log(identicalFilter(["88", "999", "22", "545", "133"]));
  console.log(identicalFilter(["xxxxo ", "oxo ", "xox ", "ooxxoo ", "oxo"]));