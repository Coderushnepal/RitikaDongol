function censor(str) {
    var output = "";
    words = str.split(" "); 
    for (i = 0; i < words.length; i++) {
      var len = words[i].length;
      if (len > 4) {
        output = output + "*".repeat(len) + " ";
      } 
      else {
        output = output + words[i] + " ";
      }
    }
    return output;
  }
  console.log(censor("The code is fourty"));
  console.log(censor("Two plus three is five"));
  console.log(censor("aaaa aaaaa 1234 12345"));