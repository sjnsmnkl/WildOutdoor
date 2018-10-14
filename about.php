<?php
error_reporting(E_ALL || ~E_NOTICE);
//if (session_status() !== PHP_SESSION_ACTIVE) {session_start();} for php 5.4 and above

if(session_id() == '' || !isset($_SESSION)){session_start();}


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
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="jquery-3.3.1.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<style>
html,body{height:100%};
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

    <div class="subpage" style="height:calc(100% - 71px); padding:120px 15% 0 15%;">
      
        <p>Wild Outdoor is Online travel provider based in the Canada.  We help the Canadians to explore their dream places to be with the family and friends. We help them to complete their adventure fantasies. At Wild Outdoor, customers can select multiple trips from our pre-arranged trip packages. Customers can find and book their hotels too here. 
With Wild Outdoor, you can book your trips according to your availability of days. We have access to some of the best hotels of the most beautiful destinations in Canada, United States and some other countries too. Our prices are so reasonable and we assure you the best service and full satisfaction at the lowest price possible. In our packages we have covered finest vacation destinations for your friends and family. 
 </p>
        
        <p>Wild Outdoor has been in travel business since long and have very good reviews from our number of customers. Today we have huge number of satisfied customers and we are keep growing and trying to help customers spend their best time in best places in the world.
If you have any questions, you can contact us through the contact page and we will reach out to you real soon and help you with the questions.</p>

    </div>
    <footer>
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
