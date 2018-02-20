  var a = [],
    isFound = false,
    i, fullArray = " ",
    searchNumber = " ",
    inError,
    arraySize= 10;
    
  for (i = 0; i < arraySize; i++) {
    a[i] = Math.floor(Math.random() * 15);
    fullArray = fullArray + a[i] + " ";
  }
    
  do {
    searchNumber = prompt("Search number: ");
    inError = false;
    if (searchNumber !== null) {
      if ((searchNumber == "") || (isNaN(searchNumber))) {
        alert("inError");
        inError = true;
      }
    }
  } while (inError == true);
  
  if (searchNumber !== null) {
    for (i = 0; i < arraySize; i++) {
      if (a[i] == searchNumber) {
        isFound = true;
      }
    }
  alert(fullArray);
  
  if (isFound !== true) {
    alert("Element " + searchNumber + " not found");
  } else {
    alert("Element " + searchNumber + " is found!");
    }
  }
