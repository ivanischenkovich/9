var a = [],
  isFound = false,
  i, fullarr = " ",
  SN = " ",
  Error,
  razm_arr = 10;
  
  for (i = 0; i < razm_arr; i++) {
  a[i] = Math.floor(Math.random() * 15);
  fullarr = fullarr + a[i] + " ";
}
  
 do {
  SN = prompt("Search number: ");
  Error = false;
  if (SN !== null) {
    if ((SN == "") || (isNaN(SN))) {
      alert("Error");
      Error = true;
    }
  }
} while (Error == true);
  
if (SN !== null) {
  for (i = 0; i < razm_arr; i++) {
    if (a[i] == SN) {
      isFound = true;
    }
  }
  alert(fullarr);

 if (isFound !== true) {
    alert("Element " + SN + " not found");
  } else {
    alert("Element " + SN + " is found!");
  }
}
