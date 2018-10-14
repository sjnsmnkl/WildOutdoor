<?php
error_reporting(E_ALL || ~E_NOTICE);
//if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
if(session_id() == '' || !isset($_SESSION)){session_start();}

if(!isset($_SESSION["username"])){
  header("location:index.php");
}
include 'config.php';
$userEmail = $_SESSION['username'];
$findUser = $mysqli->query("SELECT * FROM users WHERE email = '$userEmail'");

if($findUser->num_rows > 0){

	while($userRow = $findUser->fetch_assoc()){

		$userPass = $userRow['password'];

	}

}
?>

<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>The Wild Outdoor</title>

<!--Bootstrap-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!--Custom-->
<link href="css/wildoutdoor.css" rel="stylesheet">


<!--Fonts-->
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Dosis:300,400,600" rel="stylesheet">
<script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
<!--js-->
<script src="js/vendor/modernizr.js"></script>
<script src="js/account.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="jquery-3.3.1.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<style>
html,body{height:100%};
.subpagecontainer{padding:75px 8% 0 8%};
</style>
</head>

<body>
<!--START:NAV-->
<nav class="navbar navbar-default navbar-fixed-top">
	  <a href="index.php" class="logo">WILD OUTDOOR</a>
	  <ul class="list-inline main-nav">
		  <li><a href="#">BEACH</a></li>
		  <li><a href="#">CANADA</a></li>
		  <li><a href="#">AMERICA</a></li>
		  <li><a href="products.php">TRIPS</a></li>
	  </ul>
	  <ul class="list-inline member">
            <?php

                if(isset($_SESSION['username'])){
                echo '<li class="active"><a href="account.php" class="btn btn-info">My Account</a></li>';
                echo '<li><a href="logout.php" class="btn btn-info">Log Out</a></li>';
                }
                else{
                echo '<li><a href="login.php" class="btn btn-info">Log In</a></li>';
                 echo '<li><a href="register.php" class="btn btn-info">Register</a></li>';
                }
            ?>
	  	 
		 <li><a href="cart.php" class="btn btn-info">CART</a></li>
	  </ul>
</nav>
<!--END:NAV-->
    <!--side nav-->
    <div class="side-navigation">
      <ul class="list-unstyled">
        <li><a href="account.php" class="btn btn-info btn-lg">Account</a></li>
        <li><a href="orders.php" class="btn btn-info btn-lg">Orders</a></li>
        <li><a href="moreinfo.php" class="btn btn-info btn-lg active">Info</a></li>
      </ul>
    </div><!--side navigation-->
    <div class="row" style="padding:75px 30% 0 30%; ">
    <div>  
	<!-- Nav tabs -->  
	<ul class="nav nav-tabs" role="tablist">    
		<li role="presentation" class="active"><a href="#BillingAddress" aria-controls="BillingAddress" role="tab" data-toggle="tab" id="userBillBtn">Billing Address</a></li>    
		<li role="presentation"><a href="#TavellerAddress" aria-controls="TavellerAddress" role="tab" data-toggle="tab" id="userTravellerBtn">Taveller Address</a></li>    
		<li role="presentation"><a href="#PaymentMethod" aria-controls="PaymentMethod" role="tab" data-toggle="tab" id="userPayBtn">Payment Method</a></li>  
		<li role="presentation"><a href="#OrderHistory" aria-controls="OrderHistory" role="tab" data-toggle="tab" id="userOrderBtn">Order History</a></li>  
	</ul>  
	<!-- Tab panes -->  
	<div class="tab-content"> 
	
		<!--Start:BillingAddress-->
		<div role="tabpanel" class="tab-pane" id="BillingAddress">
		 <form id="userForm2" method="post" action="customer.php">
		   <div id="billInfo">
			 <h2 class="billH2">My Billing Address</h2>
			 <div id="existBill">
			 </div>
			 <p class="userP">Billing To:</p>
			 <input type="text" name="billto" class="textbox" id="billto"/>
			 <p class="userP">Address:</p>
			 <input type="text" name="billAdd" class="textbox" id="billAdd"/>
			 <p class="userP">City:</p>
			 <input type="text" name="billcity" class="textbox" id="billcity"/>
			 <p class="userP">Province:</p>
			 <input type="text" name="billprov" class="textbox" id="billprov"/>
			 <p class="userP">Postal:</p>
			 <input type="text" name="billpost" class="textbox" id="billpost"/>
			 <br/>
			 <input type="submit" class="billBtn" name="deleteBillBtn" id="delBillBtn" value="Delete"/>
			 <input type="submit" class="billBtn" name="createBillBtn" value="Create"/>
			 <input type="submit" class="billBtn" name="updateBillBtn" value="Update"/>
			 <p id="billMessage"></p>
			 <p id="billError"></p>
		   </div><!--#billInfo-->
		 </form><!--#userForm billing-->
		</div> <!--End:BillingAddress--> 
		<!--Start:TravellerAddress-->  
		<div role="tabpanel" class="tab-pane" id="TavellerAddress">
		  <form id="userForm3" method="post" action="customer.php">
		    <div id="travellerInfo">
		       <h2 class="travellerH3">Traveller Address</h2>
		       <div id="existTraveller">
		       </div><!--exitTraveller-->
			<!--
			<p class="userP">Id:</p>
			<input type="text" name="travellerId" class="textbox" id="travellerId"/>
			-->
		       <p class="userP">Name:</p>
		       <input type="text" name="travellerNamen" class="textbox" id="travellerName"/>
		       <p class="userP">Address:</p>
		       <input type="text" name="travellerAddn" class="textbox" id="travellerAdd"/>
		       <p class="userP">City:</p>
		       <input type="text" name="travellerCityn" class="textbox" id="travellerCity"/>
		       <p class="userP">Province:</p>
		       <input type="text" name="travellerProvn" class="textbox" id="travellerProv"/>
		       <p class="userP">Postal Code:</p>
		       <input type="text" name="travellerPostaln" class="textbox" id="travellerPostal"/>
		       <p class="userP">Phone:</p>
		       <input type="text" name="travellerPhonen" class="textbox" id="travellerPhone"/>
		       <p class="userP">ID Type:</p>
		       <input type="text" name="travellerIdTypen" class="textbox" id="travellerIdType"/>
		       <p class="userP">ID Number:</p>
		       <input type="text" name="travellerIdNumbern" class="textbox" id="travellerIdNumber"/>
		       <br/>
		       <input type="submit" class="billBtn" name="deleteTravellerBtn" id="delBtn" value="Delete"/>
		       <input type="submit" class="billBtn" name="createTravellerBtn" value="New"/>
		       <input type="submit" class="billBtn" name="updateTravellerBtn" value="Update"/>
		       <p id="travellerMessage"></p>
		       <p id="travellerError"></p>
		     </div><!--travellerInfo-->
		  </form><!--userForm TravellerAddress-->	
		</div><!--End:TravellerAddress-->
		<!--Start:TravellerAddress-->   
		<div role="tabpanel" class="tab-pane" id="PaymentMethod">
			<form id="userForm4" method="post" action="customer.php">
			   <!--Payment method-->
			    <div id="cardInfo">
			      <h2 class="payH4">My Payment Method</h2>
			    <div id="existPay">
			    </div><!--exitPay-->
			    <p class="userP">Card Holder:</p>
			    <input type="text" name="cardholdern" class="textbox" id="cardHolder"/>
			    <p class="userP">Card Number:</p>
			    <input type="text" name="cardnon" class="textbox" id="cardNum"/>
			    <p class="userP">Expire Date:</p>
			    <input type="text" name="cardexpn" class="textbox" id="cardExp"/>
			    <p class="userP">Card Type: 
			    <input type="radio" name="cardType" value="Visa">Visa</input>
			    <input type="radio" name="cardType" value="MasterCard">MasterCard</input></p>
			    <br/>
			    <input type="submit" class="billBtn" name="deletePayBtn" id="delPayBtn" value="Delete"/>
			    <input type="submit" class="billBtn" name="createPayBtn" value="Create"/>
			    <input type="submit" class="billBtn" name="updatePayBtn" value="Update"/>
			    <p id="payMessage"></p>
			    <p id="payError"></p>
			  </div><!--#cardInfo-->
			</form><!--userInfo Payment Method-->
		</div><!--End:PaymentMethod-->  
		<!--Start:OrderHistory-->
		<div role="tabpanel" class="tab-pane" id="OrderHistory">
			<form id="userForm5" method="post" action="customer.php">
			</form>	<!--userInfo Order History-->	
		</div><!--End:OrderHistory--> 
	</div><!--tab content-->

<!--END:TABS-->

<!-- footer -->






   <footer style="">
	          <small>© 2017 - 2018 Wild Outdoor. All Rights Reserved.</small>
          	<ul class="list-inline pull-right">
	        	<li><a href="about.php">About</a></li>
	        	<li><a href="contact.php">Contact</a></li>
	          </ul>
    </footer>





    <script src="js/vendor/jquery.js"></script>
    <script src="js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
  </body>
</html>
