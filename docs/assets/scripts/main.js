//To enter mor than one email address, when more than one contact email is needed.
function onMainFormSubmit(ev){
    const csdname = document.getElementById("csdname");
    //returns the input object
    alert(csdname.value);
    //to prevent form from submitting (refreshing page)
    //go through each field and read the data from form, to build a string
    return false;
  }
  
  //input id="expiryDate" should be hidden by default, unless id="expireAcct" is Yes 
  function hideExpiryDateOnChange(obj){
  if (obj.value == "yes"){
    document.getElementById("hiddenField").hidden = false;
  }
  else
    document.getElementById("hiddenField").hidden = true;
  }
  
  
  const mainForm=document.getElementById("mainForm");
  
  console.log(mainForm);
  
  
  mainForm.onsubmit=onMainFormSubmit;
  