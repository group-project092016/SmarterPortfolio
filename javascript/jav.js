var age, capital, int_stock = 0, bonds, stocks, wealth_stocks, wealth_bonds, saftey_stocks, saftey_bonds;
function getidea(internationalText, preferenceText){
age = $('#number-age').val();
capital = $('#number-capital').val();
console.log(age);
localStorage.agevalue = age;
localStorage.internationalbool = internationalText;
localStorage.capitalvalue = capital;
localStorage.preferencevalue = preferenceText;
}


function grapher(){
    console.log(localStorage.internationalbool);
    console.log(localStorage.capitalvalue);
    console.log(localStorage.preferencevalue);
    console.log(localStorage.agevalue);
    
    age = localStorage.agevalue;
    
      if (age < 10){age = 10;};
      if (age > 90){age = 90;};
        stocks = 100 - age;
        bonds = age;
        if(localStorage.internationalbool == "option-1"){
            int_stocks =stocks/4;
            stocks = stocks - int_stocks;
        }else{int_stocks = 0;}
    
    var RETIRE_CHART = document.getElementById("myPieChart");
    let Retirement_Chart = new Chart(RETIRE_CHART, {
    type: 'doughnut',
    data: {
    labels: [
        "Bonds",
        "International Stocks",
        "Stocks"
    ],
    datasets: [
        {
            data: [age, int_stocks, stocks],
            backgroundColor: [
                 "#FF6384",
                "#FFCE56",
                "#36A2EB"
                
            ],
            hoverBackgroundColor: [
                 "#FF6384",
                "#FFCE56",
                "#36A2EB"
                
            ]
        }]
}});
    
    if(localStorage.preferencevalue == "Conservative"){
        wealth_stocks = 80;
    }else if(localStorage.preferencevalue == "Aggressive"){
        wealth_stocks = 100;
    }else{wealth_stocks = 90;}
    wealth_bonds = 100 - wealth_stocks;
   var WEALTH_CHART = document.getElementById("myWealth");
    let WEALTH_Chart = new Chart(WEALTH_CHART, {
    type: 'doughnut',
    data: {
    labels: [
        "Bonds",
        "Stocks",
        
    ],
    datasets: [
        {
            data: [wealth_bonds, wealth_stocks],
            backgroundColor: [
                 "#FF6384",
                "#36A2EB"          
            ],
            hoverBackgroundColor: [
                 "#FF6384",
                "#36A2EB"    
            ]
        }]
}});
    
    if(localStorage.preferencevalue == "Conservative"){
        saftey_stocks = 30;
    }else if(localStorage.preferencevalue == "Aggressive"){
        saftey_stocks = 50;
    }else{saftey_stocks = 40;}
    saftey_bonds = 100 - saftey_stocks;
    var SAFTEY_CHART = document.getElementById("mySaftey");
    let SAFTEY_Chart = new Chart(SAFTEY_CHART, {
    type: 'doughnut',
    data: {
    labels: [
        "Bonds",
        "Stocks",
        
    ],
    datasets: [
        {
            data: [saftey_bonds, saftey_stocks],
            backgroundColor: [
                 "#FF6384",
                "#36A2EB"          
            ],
            hoverBackgroundColor: [
                 "#FF6384",
                "#36A2EB"    
            ]
        }]
}});
    
    
    
    
}

