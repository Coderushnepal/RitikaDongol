console.log("Question1 Soln");
var list = [
    "Neeta Sapkota",
    "Neha Shiwakoti",
    "Srijana Khatiwada",
    "Smrity Dhakal",
    "Sami Chakradhar",
    "Kirtee Maharjan",
    "Trija Thebe",
    "Sindhu Aryal",
    "Kusum Ranjitkar",
    "Elisha Bista",
    "Rachana Kafle",
    "Barsha Maharjan",
    "Pooja Gurung",
    "Bisikha Subedi",
    "Kritika Baral",
    "Srijana Thulung",
  ];
  
  var obj = {};
  output = [];
  for (let i = 0; i < list.length; i++) {
    var splitted = list[i].split(" ");
    obj.id = i + 1;
    obj.firstName = splitted[0];
    obj.lastName = splitted[1];
    output[i] = obj;
    obj = {};
  }
  console.log(output);

//Question 2
  console.log("Solution 2");
  function find (alpha) {

    var findName = output.filter(function(value) {
        return (value.firstName[0].toUpperCase() == alpha.toUpperCase());
    });

    console.log('find(' + alpha + ') -> ' + findName.length + ' and ' + (output.length - findName.length) );
}

find('s');
find('a');

//Question 3
console.log('\n\n-----Question 3-----\n');

var newObj = {};

for (var i = 0; i < output.length; i++) {
    var objId = output[i].id;
    newObj[objId] = {
        firstName: output[i].firstName,
        lastName: output[i].lastName,
    };
}
console.log(newObj, "object");