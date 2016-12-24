var age = 0;
  var moneyAmount = 0;
  var goalText = "";
  var preferenceText = "";
  var internationalText = "";

  //get value of age and money
  function getTextBoxInput(){

    age = document.getElementById("number-age").value;
    moneyAmount = document.getElementById("number-capital").value;
  }

  //get user input from select boxes

  function getGoal(element){

    goalText = element.options[element.selectedIndex].text;
  }

  function getPreference(element){

    preferenceText = element.options[element.selectedIndex].text;
  }

  //get checkbox input
  function getInternational(){

    if(document.getElementById("checkbox-1474621289446").checked){
      internationalText = document.getElementById("checkbox-1474621289446").value;
    }

    else if(document.getElementById("checkbox-1474621289447").checked){
      internationalText = document.getElementById("checkbox-1474621289447").value;
    }
  }

//  function printResult(){
//
//    //print user input
//    document.getElementById("sampleResultAge").innerHTML = age;
//    document.getElementById("sampleResultMoneyAmount").innerHTML = moneyAmount;
//    document.getElementById("sampleResultGoal").innerHTML = goalText;
//    document.getElementById("sampleResultPreference").innerHTML = preferenceText;
//    document.getElementById("sampleResultInternational").innerHTML = internationalText
//
//    //clear user input
//    //document.getElementById("number-age").value = "";
//    document.getElementById("number-capital").value = "";
//   // document.getElementById("select-goal").value = "";
//    document.getElementById("select-1474621416872").value = "";
//    document.getElementById("checkbox-1474621289446").checked = false;
//    document.getElementById("checkbox-1474621289447").checked = false;
//
//    //clear variables incase user wants to run form again
//    age = 0;
//    moneyAmount = 0;
//    goalText = "";
//    preferenceText = "";
//    internationalText = "";
//  }

  $(document).ready(function(){

    $(".flip").click(function(){

        $(this).next(".panel").slideToggle("fast"); //slide next "panel" below "flip"
    });

  });
    
   $('body').on('hidden.bs.modal', '.modal', function () {
        $(this).removeData('bs.modal');
      }); 
