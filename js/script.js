function terms_changed(termsCheckBox){
    //If the checkbox has been checked
    var isAge = document.getElementById("agebox").checked;
    var isTnC = document.getElementById("tncbox").checked;
    if(isAge && isTnC){
        //Set the disabled property to FALSE and enable the button.
        document.getElementById("submit_button").disabled = false;
    } else{
        //Otherwise, disable the submit button.
        document.getElementById("submit_button").disabled = true;
    }
}


function start_call_error() {
  document.getElementById("starterror").innerHTML = "Please agree to the terms above before proceeding";
  setTimeout(function() {
    $('#starterror').html('');
  }, 3000);
}