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
<title>Bol - Love Your Bhasha | The Quint</title>
<meta name="description" content="This Independence Day, express yourself in your mother tongue with The Quint’s new initiative Bol. ">
<meta name="keywords" content="Independence day, india, languages, bhasha, bol, campaign, hindi, english, national language, punjabi, bengali, gujarati">
<meta name="copyright" content="The Quint">
<meta name="publisher" content="The Quint">

<!-- OG -->
<meta property="og:title" content="Bol - Love Your Bhasha">
<meta property="og:site_name" content="TheQuint">
<meta property="og:url" content="https://thequint.com/quintlab/bol-love-your-bhasha/">
<meta property="og:description" content="Express yourself in your mother tongue with The Quint’s new initiative Bol. ">
<meta property="og:type" content="article">
<meta property="og:image" content="https://thequint.com/quintlab/bol-love-your-bhasha/assets/images/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="600">

<!-- Twitter card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@thequint">
<meta name="twitter:title" content="Bol - Love Your Bhasha">
<meta name="twitter:description" content="Express yourself in your mother tongue with The Quint’s new initiative Bol. ">
<meta name="twitter:image" content="https://thequint.com/quintlab/bol-love-your-bhasha/assets/images/og.jpg">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="assets/images/favicon/favicon.ico">

<!-- Custom styles for this template -->
<link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet">

<!-- Replace with bundle.min.css -->
<link href="assets/css/font-awesome.min.css" rel="stylesheet" media="all">
<link href="assets/css/animate.css" rel="stylesheet" media="all">
<link href="assets/css/base.css" rel="stylesheet" media="all">
<link href="assets/css/theme.css" rel="stylesheet" media="all">
<link href="assets/css/responsive.css" rel="stylesheet" media="all">
</head>

<body>
<a class="logo" href="https://www.thequint.com" target="_blank"> <img src="assets/images/tq-logo.svg"> </a>
<div class="social">
	<div class="social-back"><img src="assets/images/share.png" alt="">
	</div>
	<div class="social-icons" style="display: none;">
		<div class="facebook"><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//thequint.com/quintlab/stress-buster-for-shit-relatives-say-when-results-come-in/&amp;t=Try+this+stress+buster+for+shit+relatives+say+when+results+come+in" target="_blank"><img src="assets/images/facebook.png" alt=""></a>
		</div>
		<div class="twitter"><a href="https://twitter.com/intent/tweet?source=https%3A//thequint.com/quintlab/stress-buster-for-shit-relatives-say-when-results-come-in/&amp;text=Try This Stress-Buster for Shit Relatives Say When Results Come In %20https%3A//thequint.com/quintlab/stress-buster-for-shit-relatives-say-when-results-come-in" target="_blank"><img src="assets/images/twitter.png" alt=""></a>
		</div>
	</div>
</div>


<section class="overlay-screen">
<div class="start-container">
	<div class="start-text-cont">
      <div class="start-text">Flush all thE shit people say about toilets</div>
    </div>
    <p class="start-p">
    	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
    <div class="clearfix">
    <a class="btn-start" href="javascript:void(0);">Start</a>
    </div>
    
</div>
</section>



<section class="wrpper app-wrapper">
  <div class="container">
    <div class="text-cont"> <img src="assets/images/text-cont.svg">
      <div class="change-text">
     	 <span class="is-show">"Many people regard open defecation as part of a wholesome, healthy, virtuous life"</span>
     	 <span>"Faeces don’t belong under the same roof as where we eat and sleep."</span>
     	 <span>"Only the lower castes should be exposed to excrement in a closed space"</span>
     	 <span>"Locking us inside these booths with our own filth? How's that is clean?"</span>
      </div>
    </div>
    <div class="animate-area clearfix">
      <div class="flush">
        <div class="action-flush mob-show cursor_face">
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
      <div class="action-flush desktop-show cursor_face">
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
<script type="text/javascript" src="assets/js/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/iframeResizer.contentWindow.min.js"></script> 
<script type="text/javascript" src="assets/js/jquery.easing.min.js"></script> 
<script type="text/javascript" src="assets/js/functions.js"></script>
</body>
</html>