<?php
error_reporting(E_ALL || ~E_NOTICE);
//if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
if(session_id() == '' || !isset($_SESSION)){session_start();}

if(!isset($_SESSION["username"])){
  header("location:index.php");
}
include 'config.php';

$userEmail = $_SESSION['username'];
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
        <li><a href="orders.php" class="btn btn-info btn-lg active">Orders</a></li>
        <!--<li><a href="moreinfo.php" class="btn btn-info btn-lg">Info</a></li>-->
      </ul>
    </div><!--side navigation-->
    <div class="row" style="padding:75px 30% 0 30%; ">
      <div class="large-12">
        <h3>My Orders</h3>
        <hr>

        <?php
          $user = $_SESSION["username"];
          $result = $mysqli->query("SELECT * from orders where email='".$user."'");
          if($result) {
            while($obj = $result->fetch_object()) {
              //echo '<div class="large-6">';
              echo '<p><h4>Order ID ->'.$obj->id.'</h4></p>';
              echo '<p><strong>Date of Purchase</strong>: '.$obj->date.'</p>';
              echo '<p><strong>Product Code</strong>: '.$obj->product_code.'</p>';
              echo '<p><strong>Product Name</strong>: '.$obj->product_name.'</p>';
              echo '<p><strong>Price Per Unit</strong>: '.$obj->price.'</p>';
              echo '<p><strong>Units Bought</strong>: '.$obj->units.'</p>';
              echo '<p><strong>Total Cost</strong>: '.$currency.$obj->total.'</p>';
              $session['orderId'] = $obj->id;
              //echo '</div>';
              //echo '<div class="large-6">';
              //echo '<img src="images/products/sports_band.jpg">';
              //echo '</div>';
              echo '<p><hr></p>';

            }
          }
        ?>
      </div>
    </div>




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

