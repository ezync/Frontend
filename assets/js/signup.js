var currentTab = 0; 
showTab(currentTab);

var industry = [];

window.onload = function(){
    fetch('http://127.0.0.1:3031/api/v1/accepted-industry').then((res)=>{
        industry = res.json();
    })
}

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    console.log(industry);
    fixStepIndicator(n)
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("sign-up-form").submit();
        document.getElementById("prevBtn").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("finished").style.display = "inline";
        let stps = document.getElementsByClassName("step");
        for (let i = 0; i<stps.length;i++){
            stps[i].style.display = "none";
        }
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
        y[i].className += " invalid";
        valid = false;
        }
    }
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}

window.onerror = function(message, url, lineNumber) {
    console.log('message',message);
    console.log('url',url);
    if (errorCanBeHandled) {
      // display an error message to the user
      displayErrorMessage(message);
      // return true to short-circuit default error behavior
      return true;
    } else {
      // run the default error handling of the browser
      return false;
    }
  }