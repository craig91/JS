<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Papermashup.com | jQuery Timeline Plugin</title>
<link href="../style.css" rel="stylesheet" type="text/css" />
<link href="../bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href='http://fonts.googleapis.com/css?family=Merienda' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/style_v.css" media="screen" />
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="js/jquery.timelinr-0.9.52.js"></script>
	<script>
		$(function(){
			$().timelinr({
				orientation: 	'vertical',
				issuesSpeed: 	300,
				datesSpeed: 	100,
				arrowKeys: 		'true',
				autoPlay: 'true',
				startAt:		1
			})
		});
	</script>
</head>

<body>


<?php include '../includes/header.php';
 $link = '| <a href="http://papermashup.com/create-an-animated-timeline-with-jquery/">Back To Tutorial</a>';
?>

<div align="center"><a href="http://papermashup.com/demos/jquery-timeline/" class="btn">Demo 1</a> <a href="http://papermashup.com/demos/jquery-timeline/vertical.php" class="btn btn-success">Demo 2</a></div>

	<div id="timeline">
		<ul id="dates">
			<li><a href="#1994">1994</a></li>
			<li><a href="#1995">1995</a></li>
			<li><a href="#1995">1995</a></li>
			<li><a href="#2003">2003</a></li>
			<li><a href="#2004">2004</a></li>
			<li><a href="#2005">2005</a></li>
			<li><a href="#2009">2009</a></li>
			<li><a href="#2011">2011</a></li>
		</ul>
		<ul id="issues">
			<li id="1994">
				<img src="images/1.png" width="256" height="256" />
				<h1>Netscape</h1>
				<p>Netscape's web browser was once dominant in terms of usage share, but lost most of that share to Internet Explorer during the first browser war. The usage share of Netscape had fallen from over 90-percent in the mid 1990s to less than one-percent by the end of 2006.</p>
			</li>
			<li id="1995">
				<img src="images/2.png" width="256" height="256" />
				<h1>Opera</h1>
				<p>Opera is the most popular desktop browser in Belarus. Opera Mini, which is the most popular[8] mobile web browser as of May 2011, has been chosen as the default integrated web browser in several mobile handsets by their respective manufacturers.</p>
			</li>
			<li id="1995">
				<img src="images/3.png" width="256" height="256" />
				<h1>Explorer</h1>
				<p>Internet Explorer is one of the most widely used web browsers, attaining a peak of about 95% usage share during 2002 and 2003.[2] Its usage share has since declined with the launch of Safari (2003), Firefox (2004), and Google Chrome (2008), each of which now has significant market share.</p>
			</li>
			<li id="2003">
				<img src="images/4.png" width="256" height="256" />
				<h1>Safari</h1>
				<p>Safari is a web browser developed by Apple Inc. and included with the Mac OS X and iOS operating systems. First released as a public beta on January 7, 2003 on the company's OS X operating system, it became Apple's default browser beginning with Mac OS X v10.3 "Panther".</p>
			</li>
			<li id="2004">
				<img src="images/5.png" width="256" height="256" />
				<h1>Firefox</h1>
				<p>As of October 2012, Firefox has approximately 20% to 24% of worldwide usage share of web browsers, making it the second or third most widely used web browser, according to different sources. According to Mozilla, Firefox counts with over 450 million users around the world.</p>
			</li>
			<li id="2005">
				<img src="images/6.png" width="256" height="256" />
				<h1>Chrome</h1>
				<p>Google Chrome is a freeware web browser developed by Google that uses the WebKit layout engine. It was released as a beta version for Microsoft Windows on September 2, 2008, and as a stable public release on December 11, 2008. As of November 2012, according to StatCounter, Google Chrome had 35% worldwide usage share of web browsers making it the most widely used web browser.</p>
			</li>
			<li id="2009">
				<img src="images/7.png" width="256" height="256" />
				<h1>Firefox Mobile</h1>
				<p>Firefox for mobile (codenamed Fennec) is the build of the Mozilla Firefox web browser for devices such as smartphones and tablet computers. Firefox for mobile uses the same Gecko layout engine as Mozilla Firefox. For example, version 1.0 used the same engine as Firefox 3.6, and the following release, 4.0, shared core code with Firefox 4.0. Its features include HTML5 support, Firefox Sync, add-ons support and tabbed browsing.</p>
			</li>
			<li id="2011">
				<img src="images/8.png" width="256" height="256" />
				<h1>Chomebook</h1>
				<p>A Chromebook is a personal computer running the Google Chrome OS operating system. Chromebooks are known for their comparatively low cost and fast startup times. The devices are designed to be used while connected to the Internet and support applications that reside on the Web, rather than traditional PC applications like Microsoft Office and Photoshop that reside on the machine itself.</p>
			</li>
		</ul>
		<div id="grad_left"></div>
		<div id="grad_right"></div>
		<a href="#" id="next">+</a>
		<a href="#" id="prev">-</a>
	</div>



<?php include '../includes/footer.php';?>

</body>
</html>