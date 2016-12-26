<!doctype html>

<html lang="en">
<head>
  <title>CHART PROJECTION</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="javascript/jav.js"></script>
 
  <style>
    
    /* Remove the navbar's default margin-bottom and rounded borders */
    .navbar {
      background-color: transparent;
      margin-bottom: 0;
      border-radius: 0;
      border:0;
    }
    
    /*Underline right side text within navbar*/
    .navbar .navbar-nav {
      float: none;
      border-bottom: solid black;
    }

    /*Underline left side text within navbar*/
    .navbar .navbar-brand{
      border-bottom: solid black;
    }

    /* Change font color of the left side of the nav bar to black*/
    .navbar-default .navbar-nav > li > a {
      color : black !important;
    }

    /* Gray background when mouse hovers over the text. Text color is set to white when hovered*/
    .navbar-nav li a:hover, .navbar-nav li.active a {
      color: white !important;
      background-color: #7A7A7A !important;
    }

    /*Change font color of nav bar header to black*/
    .navbar-default .navbar-brand{
      color: black !important;
    }

     /*-- change navbar dropdown color --*/
    .navbar-default .navbar-nav .open .dropdown-menu>li>a,.navbar-default .navbar-nav .open .dropdown-menu {
      background-color:transparent; 
      color: black;
    }

    /*change the color of the drop down icon when being viewed on smaller screens.*/
    .navbar .navbar-toggle .icon-bar{
      background-color: black;
    }

    .body{
      margin-bottom: 50px;
    }

    /*.canvas{

      max-width: 850;
      max-height: 300;
    }*/

    @media (max-width: 768px) {

      /*remove bottom border on right side text within navbar*/
      .navbar .navbar-nav {
        border-bottom: none;
      }

      /*remove bottom border left side text within navbar*/
      .navbar .navbar-brand{
        border-bottom: none;
      }

      /*put bottom border on the entire navbar*/
      .navbar{
        border-bottom: solid black;
      }

      /*center jumbotron text for smaller screens*/
      .headerJumbotron{
        text-align: center;
      }

      /*make chart title smaller for smaller screens*/
      .body h1{
        font-size: 20px;
      }
    }
          
  </style>

</head>

<body>


<div class="container-fluid">
  
  <!--navbar-->
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
      <!--Compress navbar links into one button when viewed on a phone-->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class = "navbar-brand" href="index.html"><span class="glyphicon glyphicon-stats logo"></span> Smarter Portfolio</a>
      </div>

      <!--Nav bar links. Will be put in a button when viewed on a phone-->
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="index.html">HOME</a></li>
          <!--drop drop of features link-->
          <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">FEATURES<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="PortfolioBuilder.html">PORTFOLIO BUILDER</a></li>
              <li><a href="ExpectedGrowthCalculator.html">EXPECTED GROWTH CALCULATOR</a></li>
              <li><a href="CreditCardWizard.html">CREDIT CARD WIZARD</a></li>
            </ul>
          </li>
          <li><a href="AboutUs.html">ABOUT US</a></li>
          <li><a href="FAQ.html">FAQ</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!--title-->  
  <div class="container">
    <div class="page-header text-center headerJumbotron">
      <h1>Credit Card Results</h1>
    </div>
  </div>

  <div class="container" align="center">

    <!-- the list of credit cards go here. -->   

    
    <?PHP

      $inputannual = $_POST['highestannualfee'];
      $opti = $_POST['optimi'];
      $inputcredit = $_POST['creditscore'];
      $creditchance = $_POST['annualfeewaived'];


      echo "<table style='border: solid 1px black;'>";
      echo "<tr><th>NAME</th><th>ISSUER</th><th>LINK</th></tr>";

      class TableRows extends RecursiveIteratorIterator { 
          function __construct($it) { 
              parent::__construct($it, self::LEAVES_ONLY); 
          }

          function current() {
              return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
          }

          function beginChildren() { 
              echo "<tr>"; 
          } 

          function endChildren() { 
              echo "</tr>" . "\n";
          } 
      } 

      $servername = "portfolio.csanogizbbis.us-east-1.rds.amazonaws.com:3306";
      $username = "Admin";
      $password = "Capstone123";
      $dbname = "Capstone";

      try {
          $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
          $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          $stmt = $conn->prepare("SELECT Name_of_Card, Bank_Issuer, PageLink FROM Credit_Card_INFO where AF_firstyear RLIKE '{$creditchance}' and Reward RLIKE '{$opti}' and Minimum_spend <= {$inputannual} and CreditScore <= {$inputcredit}"); 
          $stmt->execute();

          // set the resulting array to associative
          $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
          foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) { 
              echo $v;
          }
      }
      catch(PDOException $e) {
          echo "Error: " . $e->getMessage();
      }
      $conn = null;
      echo "</table>";

      ?>
    









    <br><br><br>
    <a href="CreditCardWizard.html"><button type="button" class="button-input btn btn-success">BACK</button></a>

  </div>
  

</div>



</body>
</html>


