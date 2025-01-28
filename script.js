let captchChecked = false;

function beforesubmit() {
    if(captchChecked) {
        let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate.value", inputdate.value); //string --> date (en_IN)
    

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;
    console.log("outputdate.value", outputdate.value);

    } else {
        alert("Please check the reCAPTCH box to Submit the lead");
        event.preventDefault();
    }
}


 function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 


 function captchsuccess() {
    captchChecked = true;
 }