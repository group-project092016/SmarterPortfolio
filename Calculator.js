
    var investmentValue = 0;
	var compound = 0;
	var additionalInvestment= 0;
    var percentage = 0.00;
    var years = 0;
    var result=0;
    var percentageindec=0;
	var growth= [];
	

       window.onload = function() {
            var dps = []; //dataPoints. 
			var investmentValue1 = 0;
	var compound1 = 0;
	var additionalInvestment1= 0;
    var percentage1 = 0.00;
    var years1 = 0;
	
            var chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "Expected growth"
                },
                data: [{
                    type: "line",
                    dataPoints: dps
                }]
            });

            function addDataPointsAndRender() {
				
                investmentValue1 = Number(document.getElementById("number-1").value);
                percentage1 =Number(document.getElementById("number-2").value);
				years1 = Number(document.getElementById("number-3").value);
				compound1= Number(document.getElementById("number-4").value);
				additionalInvestment1=Number(document.getElementById("number-5").value);
				var percentageindec1;
				percentageindec1=percentage1/100;
				for(i=0;i<=years;i++){
                dps.push({
                    x: i,
                    y: investmentValue1*Math.pow((1+percentageindec1/compound1),compound1*i)+additionalInvestment1*(Math.pow((1+percentageindec1/compound1),compound1*i)-1)/(percentageindec1/compound1)
                });
			}
                chart.render();
						while (dps.length > 0) {
					dps.pop();
				}
            }

			
            var renderButton = document.getElementById("button-submit");
            renderButton.addEventListener("click", addDataPointsAndRender);
			 var doneButton = document.getElementById("button-done");
            doneButton.addEventListener("click", newgraph);
        }
    //get user input for textboxes.
    function getInput(){

      investmentValue = document.getElementById("number-1").value;
      percentage = document.getElementById("number-2").value;
      years = document.getElementById("number-3").value;
	  compound = document.getElementById("number-4").value;
	  additionalInvestment= document.getElementById("number-5").value;
    }

    function expectedgrowth(){
    	percentageindec=percentage/100;
		for (i = 0; i <= years; i++) { 
		result= investmentValue*Math.pow((1+percentageindec/compound),compound*i)+additionalInvestment*(Math.pow((1+percentageindec/compound),compound*i)-1)/(percentageindec/compound);
		}
    	result = "$"+((result)*1).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

	
    //check if retrieval is successful.
    function printResult(){

      //print user input
        investmentValue = "$"+((investmentValue)*1).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 		percentage = ((percentage)*1)+"%";
      document.getElementById("sampleResultInvestmentValue").innerHTML = investmentValue;
     document.getElementById("sampleResultPercentage").innerHTML = percentage;
      document.getElementById("sampleResultYears").innerHTML = years;
	  document.getElementById("sampleResultCompound").innerHTML = compound;
	  document.getElementById("sampleResultAdditionalInvestment").innerHTML = additionalInvestment;
      document.getElementById("sampleResultResult").innerHTML = result;

    }

    $(document).ready(function(){

      $(".flip").click(function(){

          $(this).next(".panel").slideToggle("fast"); //slide next "panel" below "flip"
      });
   });
