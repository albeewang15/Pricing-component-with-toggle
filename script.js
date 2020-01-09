console.log("js connected");

function toggleFunction(){
    //get the checkbox
    var toggleButton = document.getElementById("toggle-button");
    // get the output text
    var monthlyPrice = document.querySelectorAll(".monthly");
    var annuallyPrice = document.querySelectorAll(".annually");
    //if checkbox is chekced, disply montlyPrice
    if (toggleButton.checked == true){
        monthlyPrice.forEach(price => price.style.display ="block");
        annuallyPrice.forEach(price => price.style.display ="none");
    } else {
        monthlyPrice.forEach(price => price.style.display ="none");
        annuallyPrice.forEach(price => price.style.display ="block");
    }
}