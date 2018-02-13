var a = [],
  isFound = false,
  i, fullarr = " ",
  SN = " ",
  razm_arr = 10;
  
  for (i = 0; i < razm_arr; i++) {
  a[i] = Math.floor(Math.random() * 15);
  fullarr = fullarr + a[i] + " ";
}
  
 
 SN = prompt("Search number: "); 
 
  
if (SN !== null) {
  for (i = 0; i < N; i++) {
    if (a[i] == SN) {
      isFound = true;
    }
  }
  alert(fullarr);
 
 
 
 if (isFound != true) {
    alert("Element " + SN + " not found");
  } else {
    alert("Element " + SN + " is found!");
  }
}
