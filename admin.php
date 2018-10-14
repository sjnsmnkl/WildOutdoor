<?php
error_reporting(E_ALL || ~E_NOTICE);
//if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
if(session_id() == '' || !isset($_SESSION)){session_start();}

if(!isset($_SESSION["username"])) {
  header("location:index.php");
}

if($_SESSION["type"]!="admin") {
  header("location:index.php");
}

include 'config.php';
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
<link rel="stylesheet" href="css/foundation.css" />

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
	  <a href="index.php" class="logo" style="line-height:normal;">WILD OUTDOOR</a>
	  <ul class="list-inline main-nav" style="line-height:normal;">
		  <li><a href="#">BEACH</a></li>
		  <li><a href="#">CANADA</a></li>
		  <li><a href="#">AMERICA</a></li>
		  <li><a href="products.php">TRIPS</a></li>
	  </ul>
	  <ul class="list-inline member" style="line-height:normal;margin-bottom:0px;margin-top:-48px;">
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



    <div class="row" style="margin-top:10px;">
      <div class="large-12">
        <h3>Hey Admin!</h3>
        <?php
          $result = $mysqli->query("SELECT * from products order by id asc");
          if($result) {
            while($obj = $result->fetch_object()) {
              echo '<div class="large-4 columns">';
              echo '<p><h3>'.$obj->product_name.'</h3></p>';
              echo '<img src="images/products/'.$obj->product_img_name.'"/>';
              echo '<p><strong>Product Code</strong>: '.$obj->product_code.'</p>';
              echo '<p><strong>Description</strong>: '.$obj->product_desc.'</p>';
              echo '<p><strong>Units Available</strong>: '.$obj->qty.'</p>';
              echo '<div class="large-6 columns" style="padding-left:0;">';
              echo '<form method="post" name="update-quantity" action="admin-update.php">';
              echo '<p><strong>New Qty</strong>:</p>';
              echo '</div>';
              echo '<div class="large-6 columns">';
              echo '<input type="number" name="quantity[]"/>';

              echo '</div>';
              echo '</div>';
            }
          }
        ?>



      </div>
    </div>


    <div class="row" style="margin-top:10px;">
      <div class="small-12">
        <center><p><input style="clear:both;" type="submit" class="button" value="Update"></p></center>
        </form>
      </div>
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
