//To enter mor than one email address, when more than one contact email is needed.
async function onMainFormSubmit(event){  
  try {
    //Prevents reloading the page
    event.preventDefault();
    const data = new FormData(event.target);
  
    //Get all the values from the form, but doesn't include input for multiple values such as checkboxes
    const value = Object.fromEntries(data.entries());
  
    //The Object contains an array in topics that contains all the checked values
    value.ewsServices = data.getAll("ewsServices");

    //TODO: hide the private token here
    const token = 'Jh7Y-uuxM2eETchK6ifg';

    //TODO: Add a const that contains all the necessary attributes to create a new issue in GitLab
  
    //POST implementation    
    const response = await fetch('https://reqres.in/api/user', {
        method: 'POST',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json'
            //Add a "PRIVATE-TOKEN": "" for GitLab API
        },
        //TODO: change this to stringify each issue data object, not the whole webForm data (value) 
        body: JSON.stringify(value),
    });
    return response.json(); 
  }
   catch(error){
     alert(error.message);
   } 
  }
  
  /*
  input id="expiryDate" should be hidden by default, unless id="expireAcct" is Yes 
  */
  function hideExpiryDateOnChange(obj){
  if (obj.value == "yes"){
    document.getElementById("hiddenField").hidden = false;
    //TODO: add require to expiryDate input, to make this entry mandatory
  }
  else
    document.getElementById("hiddenField").hidden = true;
  }

 
  //TODO: create a function called sdsRequestInitForm() and add this in the function
  function sdsRequestInitForm() {
    const form = document.querySelector('form');
  
  form.addEventListener('submit', onMainFormSubmit);
  }

  //Call the function to submit the form 
  sdsRequestInitForm();
  