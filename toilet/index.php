<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="format-detection" content="telephone=no">
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="apple-mobile-web-app-title" content="">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="theme-color" content="#54747F" />
<title></title>

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="assets/images/favicon/favicon.ico">

<!-- Custom styles for this template -->
<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet">

<!-- Replace with bundle.min.css -->
<link href="assets/css/style.min.css" rel="stylesheet" media="all">
<style>
  
  html
  {
    width:100vw;
  }
  
</style>
</head>
<body>
<a class="logo" href="https://www.thequint.com" target="_blank"> <img src="assets/images/tq-logo.svg"> </a>
<div class="social">
<div class="social-back"><img src="assets/images/share.png" alt="">
</div>
<div class="social-icons" style="display: none;">
<div class="facebook"><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//thequint.com/quintlab/toilet-ek-prem-katha-game/&amp;t=Toilet+-+Ek+Interactive+Game:+Be+Akshay+Kumar+And+Flush+For+Facts" target="_blank"><img src="assets/images/facebook.png" alt=""></a>
</div>
<div class="twitter"><a href="https://twitter.com/intent/tweet?source=https%3A//thequint.com/quintlab/toilet-ek-prem-katha-game/&amp;text=Play this interactive game and contribute to PM Modi’s Swachh Bharat Abhiyan. No shitting, just click to flush. %20https%3A//thequint.com/quintlab/toilet-ek-prem-katha-game" target="_blank"><img src="assets/images/twitter.png" alt=""></a>
</div>
</div>
</div>
<section class="overlay-screen">
<div class="start-container">
	<div class="start-text-cont">
      <div class="start-text">Flush for Facts</div>
    </div>

    <p class="start-p">
    
    	A lot of people in India are forced to defecate in the open, leading to health, environment and economic losses to the country.<br><br>
Time to flush it out. Play the game, and record your flushes. 1 Flush = 1 Salute to Clean India!
    </p>
    <div class="clearfix">
    <a class="btn-start" href="javascript:void(0);">Start</a>
    </div>
    
</div>
</section>



<section class="wrpper app-wrapper">
  <div class="container">
    <div class="text-cont"> 
<!--     <img src="assets/images/text-cont.svg">-->
      <div class="change-text">
     	 <span class="is-show">Poor sanitation wiped off Rs. 68,52,32,73,50,000 (68 Lakh Crore) from India's GDP in 2015. Toilet Banao, Paise Flush Hone Se Bachao!</span>
     	 <span>WHO says India has the second highest death rate of children under 5 years due to poor sanitation.</span>
     	<span>23% Indian girls dropped out of school on reaching puberty because of the lack of menstrual management facilities.</span>
     	<span>Almost half of rural households in India do potty khullam khulla.</span>
     	<span>Only 42.5% rural areas have access to water for use in toilet. Bin Pani Sab Poop!</span>
     	<span>34,20,00,000 people defecate in the open. That's equal to India's population at Independence, in 1947!</span>
     	<span>Indore has the cleanest outdoors! Yes, it's ranked the cleanest city in India.</span>
     	<span>1/10 villages in India use community toilets. Farty Party!!</span>
      </div>
    </div>
    <div class="animate-area clearfix">
      <div class="flush">
        <div class="action-flush mob-show cursor_face hvr-pulse-grow">
          <h3>Click Here to</h3>
          <h2>FLUSH</h2>
        </div>
        <img src="assets/images/flash.png" alt=""> 
        <div class="pow" style="display: none;"><img src="assets/images/aburkha.png" alt=""></div>
        
        </div>
      <div class="ak ak-show"><img src="assets/images/ak1.png"></div>
      <div class="ak ak-hide"><img src="assets/images/ak2.png"></div>
    </div>
    
    <div class="counter-cont">
      <div class="taoal"> <img src="assets/images/taoal.svg"> </div>
      <div class="action-flush desktop-show cursor_face hvr-pulse-grow">
        <h3>Click Here to</h3>
        <h2>FLUSH</h2>
      </div>
      <div class="total-flush">
        <h4 id="number1" class="animated"></h4>
        <h5>Flushes So Far</h5>
      </div>
    </div>
  </div>
</section>
<div class="footer-bg"></div>

<audio id="face_audio">
		<source src="assets/media/punch.mp3" type="audio/mp3"></source>
</audio>
<?php 
	$myfile = fopen("counter.txt", "r+") or die("Unable to open file!");
	$counter =  fread($myfile,filesize("counter.txt"));
	fclose($myfile);
?>
<span id="previous_counter" style="display:none;"><?php echo $counter;?></span>
<script type="text/javascript" src="assets/js/site.min.js"></script>
</body>
</html>