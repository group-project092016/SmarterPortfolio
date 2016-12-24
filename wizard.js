    var income = 0;
    var creditScore = "";
    var expensesText = "";
    var higherRewardText = "";
    var pointsText = "";
    var annualFeeText = "";
    var waiveText = "";
    var networksText = "";
    
    //get value of income and creditscore

    function getTextboxInput(){

      income = document.getElementById("number-income").value;
      creditScore = document.getElementById("number-creditscore").value;
    }

    //get user input from select boxes

    function getExpenses(element){

      expensesText = element.options[element.selectedIndex].text;
    }
    
    function getRewards(element){

      higherRewardText = element.options[element.selectedIndex].text;
    }

    function getPoints(element){

      pointsText = element.options[element.selectedIndex].text;
    }

    function getFee(element){

      annualFeeText = element.options[element.selectedIndex].text;
    }

    function getWaive(element){

      waiveText = element.options[element.selectedIndex].text;
    }

     //get input from checkbox. may change to accomodate multiple textbox entry.

    function getNetworks(){

      if(document.getElementById("checkbox-group-veto-0").checked){
        networksText = document.getElementById("checkbox-group-veto-0").value;
      }

      else if(document.getElementById("checkbox-group-veto-1").checked){
        networksText = document.getElementById("checkbox-group-veto-1").value;
      }

      else if(document.getElementById("checkbox-group-veto-2").checked){
        networksText = document.getElementById("checkbox-group-veto-2").value;
      }

      else if(document.getElementById("checkbox-group-veto-3").checked){
        networksText = document.getElementById("checkbox-group-veto-3").value;
      }
    }

    function printResult(){

      //print user input
      document.getElementById("sampleResultIncome").innerHTML = income;
      document.getElementById("sampleResultCreditScore").innerHTML = creditScore;
      document.getElementById("sampleResultExpenses").innerHTML = expensesText;
      document.getElementById("sampleResultRewards").innerHTML = higherRewardText;
      document.getElementById("sampleResultPoints").innerHTML = pointsText;
      document.getElementById("sampleResultFee").innerHTML =  annualFeeText;
      document.getElementById("sampleResultWaive").innerHTML = waiveText;
      document.getElementById("sampleResultNetwork").innerHTML = networksText;

      //clear user input
      document.getElementById("number-income").value = "";
      document.getElementById("number-creditscore").value = "";
      document.getElementById("select-expenses").value = " ";
      document.getElementById("select-rotating").value = " ";
      document.getElementById("select-pointspref").value = " ";
      document.getElementById("select-annualfee").value = " ";
      document.getElementById("select-waive").value = " ";
      document.getElementById("checkbox-group-veto-0").checked = false;
      document.getElementById("checkbox-group-veto-1").checked = false;
      document.getElementById("checkbox-group-veto-2").checked = false;
      document.getElementById("checkbox-group-veto-3").checked = false;

      //clear variables incase user wants to run form again
      income = 0;
      creditScore = 0;
      expensesText = "";
      higherRewardText = "";
      pointsText = "";
      annualFeeText = "";
      waiveText = "";
      networksText = "";
    }

    $(document).ready(function(){

      $(".flip").click(function(){

          $(this).next(".panel").slideToggle("fast"); //slide next "panel" below "flip"
      });
    });
