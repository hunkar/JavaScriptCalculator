 
  var result = 0;
  var stored = 0;
  var process;
  
  function calculate(values)
  {
    
	 if(values == "+" || values == "-" || values == "/" || values == "*") 
	 {
	   process = values;
	   
	   if(result != 0)
		stored = result;
	   
	   result = 0;
	   return;
     }
	 else if(values == "=")
	 {
	   switch(process)
	   {
			 case '+': stored = stored + result; break;
	         case '-': stored = stored - result; break;
	         case '/': stored = stored / result; break;
	         case '*': stored = stored * result; break;
	         
	   }
	   
	   setRes(stored);
	   result = 0;
	   return;
	 }
	  
	  
	 result = (result*10)+values;
     setRes(result);
  }
  
  function setRes(writeRes)
  {
     document.calcul.res.value = writeRes;
  }
  
  function clearAll()
  {
       result = 0;
  	   stored = 0;
  	   process = "&";
	   setRes(result);
	   return;
  }
  