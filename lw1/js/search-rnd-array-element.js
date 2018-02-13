var a = [],
  isFound = false,
  i, fullarr = " ",
  razm_arr = 10;
  
  for (i = 0; i < razm_arr; i++) {
  a[i] = Math.floor(Math.random() * 15);
  fullarr = fullarr + a[i] + " ";
}
  
  
  
  writeln('Filled random array: ');
  for i := 1 to N do
  begin
    write(a[i], ' ');
  end;  
  
  
  
  writeln;  
 
 
 
  k := Random(15);
 
 
 
  IsFound := False;
  for i:=1 to N do
  begin
    if a[i] = k then 
    begin
      IsFound := True;
      break;
    end;
  end;
 
 
 
  if IsFound then
  begin
    writeln('Element ', k, ' is found!');
  end  
  else
  begin
    writeln('Element ', k, ' not found');
  end;  
end.
