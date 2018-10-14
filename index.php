<?php
error_reporting(E_ALL || ~E_NOTICE);
//if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
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
</head>

<body>
<!--START:NAV-->
<nav class="navbar navbar-default navbar-fixed-top">
	  <a href="index.php" class="logo">WILD OUTDOOR</a>
	  <ul class="list-inline main-nav">
		  <li><a href="javascript:void(0)" onclick="location.href='index.php#scrolldown2';">BEACH</a></li>
		  <li><a href="javascript:void(0)" onclick="location.href='index.php#scrolldown3';">CANADA</a></li>
		  <li><a href="javascript:void(0)" onclick="location.href='index.php#scrolldown4';">AMERICA</a></li>
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

<a href="#scrolldown"><i class="fa fa-arrow-down fa-2x"></i></a>
<!--START: INTRO-->
<section class="Intro" id="scrolldown">  
  	    <div class="slogan">
  	    		<hr />
				<h1>LIKE NOWHERE ELSE.<br>ALL IN ONE PLACE.<br>SO CLOSE.</h1>
		    	<hr />
			    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		</div><!--slogan-->
	  	<div class="video-container">
	  		<video autoplay loop muted style="width:100%;height:100%;">
	  			<source src="https://media.istockphoto.com/videos/two-girls-on-festival-video-id902995544" type="video/mp4">
			</video>
	    </div><!--video container-->
</section><!--#Intro-->
<!--END: INTRO-->

<section id="scrolldown1">  
  <div class="content">
  	<div class="content-wrapper">
	  <h2>What makes these trips different?</h2>
	  <p>We believe that a vacation should be more than a hotel room, a flight and a rental car. It should be more than the sum of its parts. We also believe a challenge can help you grow and a trip can stir the soul. We create journeys worth taking - for the traveler, for the host and for the world.</p>
	</div><!--content wrapper-->
  </div><!--content-->
</section>
<section id="scrolldown2">  
  <div class="content right">
	<div class="title">
		<h3>Beach.</h3>
		<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
		<p>-Yue Luo</p>
		<hr />
	</div><!--title-->
   <div class="row">
   		<div class="col-sm-4">
			<div class="place">
				<a href="#"><img src="images/cuba.jpg" /></a>
				<span>Cuba</span>
				<hr />
				<small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</small>
			</div><!--place-->
	   </div><!--col sm 4-->
	   <div class="col-sm-4">
		<div class="place">
				<a href="#"><img src="images/maxico.jpg" /></a>
				<span>Maxico</span>
				<hr />
				<small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</small>
	     </div><!--place-->
	   </div><!--col sm 4-->
	   <div class="col-sm-4">
			<div class="place">
				<a href="#"><img src="images/hawaii.jpg" /></a>
				<span>Hawaii</span>
				<hr />
				<small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</small>
			</div><!--place-->
	   </div><!--col sm 4-->
   </div><!--row-->
    <div class="video-container">
	  		<video autoplay loop muted style="width:40%;height:60%;">
	  			<source src="https://media.istockphoto.com/videos/father-and-son-playing-video-id867869476" type="video/mp4">
			</video>
	</div><!--video container-->
 </div><!--content-->
</section>
<section id="scrolldown3">  
  <div class="content left">
	<div class="title">
		<h3>Canada Tourism.</h3>
		<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."</p>
		<p>-Yue Luo</p>
		<hr />
	</div><!--title-->
   <div class="row">
   		<div class="col-sm-4">
			<div class="place">
				<a href="#"><img src="images/westcanada.jpg" /></a>
				<span>West Canada</span>
				<hr />
				<small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</small>
			</div><!--place-->
	   </div><!--col sm 4-->
	   <div class="col-sm-4">
		<div class="place">
				<a href="#"><img src="images/eastcanada.jpg" /></a>
				<span>East Canada</span>
				<hr />
				<small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</small>
	     </div><!--place-->
	   </div><!--col sm 4-->
	   <div class="col-sm-4">
			<div class="place">
				<a href="#"><img src="images/traintrip.jpg" /></a>
				<span>Train Trip</span>
				<hr />
				<small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</small>
			</div><!--place-->
	   </div><!--col sm 4-->
   </div><!--row-->
    <div class="video-container video-ca">
	  		<video autoplay loop muted style="width:40%;height:60%;">
	  			<source src="https://media.istockphoto.com/videos/aerial-of-niagara-falls-at-sunrise-video-id483416844" type="video/mp4">
			</video>
	</div><!--video container-->
 </div><!--content-->
</section>
<section id="scrolldown4">
<div class="content right">
	<div class="title">
		<h3>America Tourism.</h3>
		<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."</p>
		<p>-Yue Luo</p>
		<hr />
	</div><!--title-->
   <div class="row">
   		<div class="col-sm-4">
			<div class="place">
				<a href="#"><img src="images/westus.jpg" /></a>
				<span>West US</span>
				<hr />
				<small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</small>
			</div><!--place-->
	   </div><!--col sm 4-->
	   <div class="col-sm-4">
		<div class="place">
				<a href="#"><img src="images/eastus.jpg" /></a>
				<span>East US</span>
				<hr />
				<small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</small>
	     </div><!--place-->
	   </div><!--col sm 4-->
	   <div class="col-sm-4">
			<div class="place">
				<a href="#"><img src="images/disneyland.jpg" /></a>
				<span>Disneyland</span>
				<hr />
				<small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</small>
			</div><!--place-->
	   </div><!--col sm 4-->
   </div><!--row-->
    <div class="video-container video-us">
	  		<video autoplay loop muted style="width:40%;height:60%;">
	  			<source src="https://media.istockphoto.com/videos/statue-of-liberty-at-dusk-video-id482695629" type="video/mp4">
			</video>
	</div><!--video container-->
 </div><!--content-->
</section>
<!--START:FOOTER-->
<footer>
	<small>© 2017 - 2018 Wild Outdoor. All Rights Reserved.</small>
	<ul class="list-inline pull-right">
		<li><a href="about.php">About</a></li>
		<li><a href="contact.php">Contact</a></li>
	</ul>
</footer>
<!--END: FOOTER-->
<script>
	$(document).ready(function() {
 	
  var numbClick = 0;
  
  $('a[href*="#scrolldown"]').click(function(){
    
    var elemToGo = $(this).attr('href');
    var speed = 750;
    
    if(numbClick!=0){
      elemToGo += numbClick;
       if(!$(elemToGo).length){ // if the section #sectionAnyNumber doesn't exist, then.
         elemToGo = "#scrolldown"; //I put back the first section.
         numbClick=0; //I reinit the the value of number of click.
       }
    }
    
    numbClick++;
   
    $('html,body').animate(
    {
      scrollTop: $(elemToGo).offset().top
    },speed
    );
    return false;
  });
  
  
  
  $(window).resize(function() {
    if ($(this).width() > 480) {
      $('.nav ul li').removeClass('nav-expanded').css('display', 'inline-block');
    } else {
      $('.nav ul li').css('display', 'none');
    }
  });

  $('.menu-trigger').click(function() {
    if ($(window).width() <= 480 && $('.menu-trigger').is(':visible')) {
      $('.nav ul li').slideToggle(400, function() {
        $(this).toggleClass('nav-expanded');
      });
    }
  });
});
</script>
<script src="js/vendor/jquery.js"></script>
<script src="js/foundation.min.js"></script>
<script>
     $(document).foundation();
</script>
</body>
</html>
