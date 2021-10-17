<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="theme-color" content="#005378" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		
		<title>Enquiry Now</title>

		<link rel="icon" href="/ContentRepository/images/favicon.ico" />
		<meta name="google-site-verification" content="v8jxyoTECSe9fH_3K2lMe-rPF_oCww7Wl_IqfdqtEzk" />
		<!--first 11 files-->
		<link href="AngularApp/css/external.css" rel="stylesheet">
		<!--style and responsive css-->
		<link href="AngularApp/css/internal.css" rel="stylesheet">
		<!-- font-awesome icons-->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<!-- Social Links style  -->
		<link rel="stylesheet" href="AngularApp/css/social_links.css">
		<script src="AngularApp/js/angular/angular-all.js"></script>
		<!-- USER CONTROLLER SCRIPTS -->
		<script src="AngularApp/Scripts/Controllers/allController.js"></script>
		<script src="AngularApp/js/all-in-one.js" type="text/javascript"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<!-- Global site tag (gtag.js) - Google Analytics Previous -->
		<script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-139986703-1" type="text/javascript"></script>
		<script type="text/javascript">
			window.dataLayer = window.dataLayer || [];
			        function gtag() { dataLayer.push(arguments); }
			        gtag('js', new Date());
			        gtag('config', 'UA-139986703-1');
		</script>
		<!-- Global site tag (gtag.js) - Google Analytics New -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-W6DKTP1NLV"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());
	
			  gtag('config', 'G-W6DKTP1NLV');
		</script>
<script type="text/javascript">
	function validateForm()
	{
		var a = document.forms["cform"]["fullname"].value;
		if (a == null || a == "") 
		{
			alert("Name must be filled out");
			return false;
		}
		var b = document.forms["cform"]["email"].value;
		if (b == null || b == "") 
		{
			alert("Email must be filled out");
			return false;
		}
		var c = document.forms["cform"]["mobile"].value;
		if (c == null || c == "" || c.length != 10 || isNaN(c) || c < 1111111111 || c > 9999999999) 
		{
			alert("10 Digits Mobile Number must be filled out");
			return false;
		}
		var d = document.forms["cform"]["country"].value;
		if (d == null || d == "") 
		{
			alert("Country/ City must be filled out");
			return false;
		}
		var e = document.forms["cform"]["comments"].value;
		if (e == null || e == "") 
		{
			alert("Message must be filled out");
			return false;
		}
	}	
	
</script>		
	</head>

	<body>
		<header id="header">
			<div class="top-header menubar fixed-header">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 align-self-center">
							<div class="navSection">
								<nav class="navbar navbar-expand-lg">
									<a class="navbar-brand" href="https://www.fightdiabetes.co.in/">
										<img src="/ContentRepository/images/logo.png" class="img-fluid" alt="Fight Diabetes: Dr Sudipta Dutta" />
									</a>
									<button class="navbar-toggler collapsed ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="icon-bar"></span>
										<span class="icon-bar"></span>  <span class="icon-bar"></span> 
									</button>
									<div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
										<ul class="navbar-nav menu-nav ml-lg-auto text-right-lg mx-md-auto text-md-centre">
											<li class="nav-item"><a id="m_home-mn" class="nav-link" href="https://www.fightdiabetes.co.in/">Home</a>
											</li>
											<li class="nav-item"><a class="nav-link" href="dr-sudipta-dutta.html">About</a>
											</li>
											</li>
											<li class="nav-item"><a id="m_service" class="nav-link" href="https://www.fightdiabetes.co.in/services?tab=diabetic-foot-care">Service</a>
											</li>
											<li class="nav-item"><a class="nav-link" href="#contact">Contact</a>
											</li>
											<li class="nav-item"><a id="m_contact" class="nav-link" href="enquiry.php">Enquiry</a>
											</li>
										</ul>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<main class="body-div">
			<!--inner page area-->
			<section class="slider-cus" id="home-mn">
				<div class="ser-banner-pan banner-pan">
					<img src="/ContentRepository/images/banner-inner.jpg" class="img-fluid img-full" alt="Banner Fight Diabetes" />
					<div class="banner-pan-inr-hldr2">
						<div class="container">
							<div class="row">
								<div class="col-lg-12">
									<h1>Enquiry Now</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		
			<section class="about-pannal" id="about">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class="about-hldr-inr">
								<?PHP
								if(isset($_POST["submit"]))
								{
									if(
										 (isset($_POST["submit"])) && 
										 (!empty($_POST["email"])) && 
										 (!empty($_POST["mobile"])) && 
										 (!empty($_POST["country"])) && 
										 (!empty($_POST["comments"])) && 
										 (ctype_digit($_POST["mobile"])) && 
										 (strlen($_POST["mobile"])== 10) && 
										 (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) && 
										 (preg_match('/^[1-9]{1}[0-9]{5}[0-9]{4}$/', $_POST['mobile'])) && 
										 (!preg_match("/\b(?:(?:https?|ftp|http):\/\/|www\.)/i", $_POST['comments']))
									  )	 
									{
										$subject  = "Enquiry From: ".$_POST["email"]. " through WebForm";
										$cc      = 'meetme.subha@gmail.com'; 
										
										$headers  = "MIME-Version: 1.0" . "\r\n";
										$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
										$headers .= "Cc: ".$cc. "\r\n";
										$headers .= "From: Enquiry via QCF  <mailsudipta7@gmail.com>" . "\r\n";
										$headers .= "Enquiry From: ".$_POST["email"]. " through Insignia"."\r\n";
									
										$message  = "<br /> <b>Name:</b> ".htmlentities($_POST["fullname"]);
										$message .= "<br /><br /> <b>Email:</b> ".htmlentities($_POST["email"]);
										$message .= "<br /><br /> <b>Contact:</b> ".htmlentities($_POST["mobile"]);
										$message .= "<br /><br /> <b>Address:</b> ".htmlentities($_POST["country"]);
										$message .= " <br /><br /><b>Message:</b> ".htmlentities($_POST["comments"]);
										$message .= "<br /><br /> Please call back to discuss regarding the enquiry";
										
										mail('mailsudipta7@gmail.com', $subject, $message, $headers);
										echo "<b style=\"color:#006400\">Thank you. We will contact back you soon...</b>";
									}
									else
									{
										echo "<b style=\"color:#800800\">FAILED to Sent Enquiry! Please properly fill the contact form</b>";
									}
								}
								else
									echo "<h2 class=\"ng-binding\">Connect Now</h2>";	
								?>								

								<form name="cform" id="cform" method="post" action="" onsubmit="return validateForm();">
									<div class="inputdiv">
										<input type="text" class="form-control" name="fullname" id="fullname" placeholder=" Full Name" />
									</div>
									<div class="inputdiv">
										<input type="text" class="form-control"  name="email" id="email" placeholder=" Email" />
									</div>
									<div class="inputdiv">
										<input type="text" class="form-control"  name="mobile" id="mobile" placeholder=" 10 Digits Mobile Number" />
									</div>
									<div class="inputdiv">
										<input type="text" class="form-control"  name="country" id="country" placeholder=" country/City" />
									</div>
									<div class="inputdiv">
										<textarea class="form-control" rows="2" name="comments" id="comments" placeholder=" Query/ Message"></textarea>
									</div>
									<div class="inputdiv">
										<input type="submit" class="enquiryappointment" name="submit" id="submit" value="Submit Now" />
									</div>
								</form>
							</div>
						</div>
						<div class="col-md-6">
							<div class="doctor-img-hldr">
								<img src="ContentRepository/images/image-1.jpg" class="img-fluid" alt="Dr Sudipta Dutta" />
							</div>
							<div class="appointment-but-div inputdiv">
								<input type="button" class="appointment-but enquiryappointment" value="Get online Appointment" data-toggle="modal" data-target="#appointment-box" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
		<footer id="contact" style="margin-top:0px;">
			<section class="cont-info-pan" style="margin-top:0px; margin-bottom:40px;">
				<div class="container-xl container-fluid px-xl-3 px-lg-0 px-sm-0 px-0">
					<div class="row no-gutters">
						<div class="col-lg-4 col-md-6 col-sm-6 align-items-center">
							<div class="info-box">
								<h3>Contact</h3>
								<div class="row pt-5">
									<div class="col-3">
										<div class="mob-icon">
											<img src="/ContentRepository/images/mob.png" class="img-fluid" alt="">
										</div>
									</div>
									<div class="col-9">
										<div class="mob-icon-rgt">
											<div class="mb-3">
												<p>Call &amp; Message</p>
												<a href="tel:9477176545" class="mob-text ng-binding">9477176545</a>
											</div>
											<div class="mb-2">
												<p>WhatsApp</p>
												<a href="tel:9231545841" class="mob-text ng-binding">9231545841</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6 align-items-center">
							<div class="info-box">
								<h3>Email Us</h3>
								<div class="row pt-5">
									<div class="col-3">
										<div class="mob-icon">
											<img src="/ContentRepository/images/mail.png" class="img-fluid" alt="">
										</div>
									</div>
									<div class="col-9">
										<div class="mob-icon-rgt">
											<h4>Official</h4>
											<a href="mailto:drdutta@fightdiabetes.co.in" class="direction-text ng-binding">drdutta@fightdiabetes.co.in</a>
											<hr class="bg-light">
											<h4>Personal</h4>
											<a href="mailto:mailsudipta7@gmail.com" class="direction-text ng-binding">mailsudipta7@gmail.com</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-12 col-sm-12 align-items-center">
							<div class="info-box">
								<h3>Associated Hospitals</h3>
								<div class="row pt-3">
									<div class="col-12">
										<ul class="listing-hosp-list">
											<!-- ngRepeat: hospital in myInfoData.hospitalInfo -->
											<li ng-repeat="hospital in myInfoData.hospitalInfo" class="ng-scope">
												<p class="ng-binding">AMRI Saltlake</p>
												<a href="https://maps.google.com/?q=22.567113,88.411303" target="_blank" class="ng-binding">
													<img src="/ContentRepository/images/small-map.png" class="d-flex justify-content-end" alt="">Saltlake</a>
											</li>
											<!-- end ngRepeat: hospital in myInfoData.hospitalInfo -->
											<li ng-repeat="hospital in myInfoData.hospitalInfo" class="ng-scope">
												<p class="ng-binding">North City Hospital</p>
												<a href="https://maps.google.com/?q=22.588668,88.393511" target="_blank" class="ng-binding">
													<img src="/ContentRepository/images/small-map.png" class="d-flex justify-content-end" alt="">Ultadanga</a>
											</li>
											<!-- end ngRepeat: hospital in myInfoData.hospitalInfo -->
											<li ng-repeat="hospital in myInfoData.hospitalInfo" class="ng-scope">
												<p class="ng-binding">Divine Nursing Home</p>
												<a href="https://maps.google.com/?q=22.566875,88.392349" target="_blank" class="ng-binding">
													<img src="/ContentRepository/images/small-map.png" class="d-flex justify-content-end" alt="">Sealdah</a>
											</li>
											<!-- end ngRepeat: hospital in myInfoData.hospitalInfo -->
											<li ng-repeat="hospital in myInfoData.hospitalInfo" class="ng-scope">
												<p class="ng-binding">Sunflower Nursing Home</p>
												<a href="https://maps.google.com/?q=22.588872,88.370180" target="_blank" class="ng-binding">
													<img src="/ContentRepository/images/small-map.png" class="d-flex justify-content-end" alt="">Hatibagan</a>
											</li>
											<!-- end ngRepeat: hospital in myInfoData.hospitalInfo -->
											<li ng-repeat="hospital in myInfoData.hospitalInfo" class="ng-scope">
												<p class="ng-binding">Rittik Nursing Home</p>
												<a href="https://maps.google.com/?q=22.560172,88.366721" target="_blank" class="ng-binding">
													<img src="/ContentRepository/images/small-map.png" class="d-flex justify-content-end" alt="">Moulali</a>
											</li>
											<!-- end ngRepeat: hospital in myInfoData.hospitalInfo -->
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="cont-pan">
				<div class="container">
					<div class="row">
						<div class="col-lg-5 col-md-5">
							<div class="location-hldr">
								<h2>Contact Us</h2>
								<span>For Consultation &amp; Health Check Ups</span>
								<div class="hosp-location-hldr">
									<h4 class="ng-binding">AMRI, Saltlake</h4>
									<p class="location ng-binding">Annexe Building, 2nd Floor, Diabetes OPD</p>
									<br>
									<!-- ngRepeat: chmbrTime in myInfoData.chamberDetails[activeChamberIndex].chamberTimes -->
									<p class="time ng-binding ng-scope" ng-repeat="chmbrTime in myInfoData.chamberDetails[activeChamberIndex].chamberTimes">Mon, Tue &amp; Fri 9 AM to 11 AM</p>
									<!-- end ngRepeat: chmbrTime in myInfoData.chamberDetails[activeChamberIndex].chamberTimes -->
									<br>
									<div class="my-2 add-div">
										<div ng-bind-html="trustHtml(myInfoData.chamberDetails[activeChamberIndex].Address)" class="ng-binding">
											<p>16 17, JC Block Lane, Broadway Rd,
												<br>Sector III, Opp. Saltlake Stadium,
												<br>Kolkata, West Bengal 700098</p>
										</div>
									</div>
								</div>
								<div class="appointment-but-div mb-5">
									<input class="appointment-but" type="button" value="Get online Appointment" data-toggle="modal" data-target="#appointment-box">
								</div>
							</div>
						</div>
						<div class="col-lg-7 col-md-7">
							<div class="google-map">
								<iframe id="mapView" ng-src="mapURL" width="100%" frameborder="0" style="border:0; border-radius:0 60px; box-shadow:2px 2px 8px rgba(153,153,153,0.75);" allowfullscreen="" aria-hidden="false" tabindex="0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyD1nekLJNwhCxKaFXBrMLkMM5kqnUQlyzU&amp;center=22.567113,88.411303&amp;zoom=18&amp;maptype=roadmap"></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="chambers-pan">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="chamber-hldr-hd">
								<h1>Other Chambers</h1>
							</div>
						</div>
						<!-- ngRepeat: chamber in myInfoData.chamberDetails -->
						<div class="col-lg-4 ng-scope ng-hide" ng-repeat="chamber in myInfoData.chamberDetails" ng-show="activeChamberIndex!=$index">
							<div class="chamber-box">
								<h5 class="ng-binding">AMRI, Saltlake</h5>
								<p class="ng-binding">Annexe Building, 2nd Floor, Diabetes OPD</p>
								<br>
								<!-- ngRepeat: chmbrTime in chamber.chamberTimes -->
								<p ng-repeat="chmbrTime in chamber.chamberTimes" class="ng-binding ng-scope">Mon, Tue &amp; Fri 9 AM to 11 AM</p>
								<!-- end ngRepeat: chmbrTime in chamber.chamberTimes -->
								<br>
								<div ng-bind-html="trustHtml(chamber.Address)" class="ng-binding">
									<p>16 17, JC Block Lane, Broadway Rd,
										<br>Sector III, Opp. Saltlake Stadium,
										<br>Kolkata, West Bengal 700098</p>
								</div>
								<div class="view-map-but-div">
<a href="javascript:void(0)" ng-click="changeActiveChamber($index);">View Map</a>
								</div>
							</div>
						</div>
						<!-- end ngRepeat: chamber in myInfoData.chamberDetails -->
						<div class="col-lg-4 ng-scope" ng-repeat="chamber in myInfoData.chamberDetails" ng-show="activeChamberIndex!=$index">
							<div class="chamber-box">
								<h5 class="ng-binding">JMD Polyclinic &amp; Diagnostic</h5>
								<p class="ng-binding">Near Phoolbagan Metro Station, Beliaghata</p>
								<br>
								<!-- ngRepeat: chmbrTime in chamber.chamberTimes -->
								<p ng-repeat="chmbrTime in chamber.chamberTimes" class="ng-binding ng-scope">Mon to Sat 11.30 AM to 12.30 PM</p>
								<!-- end ngRepeat: chmbrTime in chamber.chamberTimes -->
								<br>
								<div ng-bind-html="trustHtml(chamber.Address)" class="ng-binding">
									<p></p>P 336, CIT Rd, Kankurgachi,
									<br>Phool Bagan crossing, beleghata,
									<br>Kolkata, West Bengal 700054
									<p></p>
								</div>
								<div class="view-map-but-div">
<a href="javascript:void(0)" ng-click="changeActiveChamber($index);">View Map</a>
								</div>
							</div>
						</div>
						<!-- end ngRepeat: chamber in myInfoData.chamberDetails -->
						<div class="col-lg-4 ng-scope" ng-repeat="chamber in myInfoData.chamberDetails" ng-show="activeChamberIndex!=$index">
							<div class="chamber-box">
								<h5 class="ng-binding">RB Diagnostic, Laketown</h5>
								<p class="ng-binding">Near - Jaya Multiplex Laketown</p>
								<br>
								<!-- ngRepeat: chmbrTime in chamber.chamberTimes -->
								<p ng-repeat="chmbrTime in chamber.chamberTimes" class="ng-binding ng-scope">Monday, Wednesday, Friday 12:30 PM (by Appointment)</p>
								<!-- end ngRepeat: chmbrTime in chamber.chamberTimes -->
								<br>
								<div ng-bind-html="trustHtml(chamber.Address)" class="ng-binding">P-713 Block A, Lake Town,
									<br>Kolkata, West Bengal 700089</div>
								<div class="view-map-but-div">
<a href="javascript:void(0)" ng-click="changeActiveChamber($index);">View Map</a>
								</div>
							</div>
						</div>
						<!-- end ngRepeat: chamber in myInfoData.chamberDetails -->
						<div class="col-lg-4 ng-scope" ng-repeat="chamber in myInfoData.chamberDetails" ng-show="activeChamberIndex!=$index">
							<div class="chamber-box">
								<h5 class="ng-binding">Rittik Nursing Home</h5>
								<p class="ng-binding">Near Moulali, Sealdah Railway Station</p>
								<br>
								<!-- ngRepeat: chmbrTime in chamber.chamberTimes -->
								<p ng-repeat="chmbrTime in chamber.chamberTimes" class="ng-binding ng-scope">Tue, Thu &amp; Sat 1 PM to 1.30 PM</p>
								<!-- end ngRepeat: chmbrTime in chamber.chamberTimes -->
								<br>
								<div ng-bind-html="trustHtml(chamber.Address)" class="ng-binding">155A, Acharya Jagadish Chandra Bose Rd, Beside Entally Market Crossing, Entally, Kolkata, West Bengal 700014</div>
								<div class="view-map-but-div">
<a href="javascript:void(0)" ng-click="changeActiveChamber($index);">View Map</a>
								</div>
							</div>
						</div>
						<!-- end ngRepeat: chamber in myInfoData.chamberDetails -->
						<div class="col-lg-4 ng-scope" ng-repeat="chamber in myInfoData.chamberDetails" ng-show="activeChamberIndex!=$index">
							<div class="chamber-box">
								<h5 class="ng-binding">Apollo Clinic, Beleghata</h5>
								<p class="ng-binding">Near Phoolbagan, Beleghata</p>
								<br>
								<!-- ngRepeat: chmbrTime in chamber.chamberTimes -->
								<p ng-repeat="chmbrTime in chamber.chamberTimes" class="ng-binding ng-scope">Mon &amp; Thursday 1 PM (By appoinment)</p>
								<!-- end ngRepeat: chmbrTime in chamber.chamberTimes -->
								<br>
								<div ng-bind-html="trustHtml(chamber.Address)" class="ng-binding">13A, Hem Chandra Naskar Rd, Subhas Sarobar Park, Phool Bagan, Beleghata, Kolkata, West Bengal 700010</div>
								<div class="view-map-but-div">
<a href="javascript:void(0)" ng-click="changeActiveChamber($index);">View Map</a>
								</div>
							</div>
						</div>
						<!-- end ngRepeat: chamber in myInfoData.chamberDetails -->
						<div class="col-lg-4 ng-scope" ng-repeat="chamber in myInfoData.chamberDetails" ng-show="activeChamberIndex!=$index">
							<div class="chamber-box">
								<h5 class="ng-binding">Sunflower Nursing Home</h5>
								<p class="ng-binding">Near Hedua, Hatibagan, Shyambazar</p>
								<br>
								<!-- ngRepeat: chmbrTime in chamber.chamberTimes -->
								<p ng-repeat="chmbrTime in chamber.chamberTimes" class="ng-binding ng-scope">Mon, Wed &amp; Friday 8 PM to 9 PM</p>
								<!-- end ngRepeat: chmbrTime in chamber.chamberTimes -->
								<br>
								<div ng-bind-html="trustHtml(chamber.Address)" class="ng-binding">1/1A, Monomohan Pandey Road, Goabagan Street, Maniktala, near Hedua Park, Kolkata, West Bengal 700006</div>
								<div class="view-map-but-div">
<a href="javascript:void(0)" ng-click="changeActiveChamber($index);">View Map</a>
								</div>
							</div>
						</div>
						<!-- end ngRepeat: chamber in myInfoData.chamberDetails -->
					</div>
				</div>
			</section>
			<section class="disclaimer-pan">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="disclaimer-hldr-inr">
								<h4>Important</h4>
								<h2>Disclaimer</h2>
								<div class="disclaimer-hldr-text-box">
									<p ng-bind-html="trustHtml(myInfoData.userInfo.Disclaimer)" class="ng-binding">
										<p><strong><em>The medical/health information contained</em></strong> in this website &nbsp;(<strong>www.fightdiabetes.co.in</strong>) &nbsp;<u><span style="color: rgb(84, 172, 210);">is intended for general awareness and informational purpose only,</span></u><strong>&nbsp;not for any medico-legal issues or treatment purposes of any disease condition.</strong>  <em><span style="color: rgb(226, 80, 65);"><strong>This website does not recommend or provide individualized medical diagnosis,treatment or advice, nor they do recommend any specific therapies or prescribe medication for anyone using all the information provided here</strong></span>.</em> While we endeavor to keep the information up to date and correct, we make no promises, representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. Hence, <strong><span style="color: rgb(226, 80, 65);">this website will not take any legal liability or responsibility arising out of any information provided here</span></strong>. Through this website you are able to link to other websites which are not under the control of our domain. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the website up and running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control. The (‘Content’) of the website (‘www.fightdiabetes.co.in’) such as text,graphics, images and other materials are exclusively copyrighted. No part of it may be reproduced,copied or transmitted in any form or by any means without prior written permission of us.<strong>&nbsp;</strong>
										</p>
										<p><strong>Copyright 2021 www.fightdiabetes.co.in (Dr. Sudipta Dutta). All Rights Reserved.</strong>&nbsp;</p>
										<p><strong>Thanks</strong> to Mr. Subhabrata Chakraborty( meetme.subha@gmail.com) for developing this website so beautifully. <strong>Thanks</strong> to Mrs. M Dutta Chakraborty &amp; Mrs. S Chakraborty for their continuous support and effort towards development of this site. At last,<strong>&nbsp;thanks to that almighty</strong> without whom we cannot sustain this beautiful life.</p>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="social_media_links">
				<div class="social_links_div">
					<a href="https://www.facebook.com/sugarspecialist/" rel="nofollow">
						<i class="fa fa-facebook" aria-hidden="true"></i>
					</a>
					<a href="https://www.instagram.com/diabetologistsudiptadutta" rel="nofollow">
						<i class="fa fa-instagram" aria-hidden="true"></i>
					</a>
					<a href="https://www.twitter.com/DrSudiptaDutta1" rel="nofollow">
						<i class="fa fa-twitter" aria-hidden="true"></i>
					</a>
					<a href="https://www.youtube.com/channel/UCNDX_oFg4ne9QlHZhRXa1wA" rel="nofollow">
						<i class="fa fa-youtube-play" aria-hidden="true"></i>
					</a>
				</div>
			</section>
			<section class="copyright-pan">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="copyright-hldr">
								<p class="ng-binding">Copyright &copy; Dr. Sudipta Dutta 2021. All Rights Reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</footer>
		<div class="modal fade" id="appointment-box" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-md" style="max-width:600px;">
				<div class="modal-content">
					<div class="modal-header modal-header-cus">
						<h4 class="modal-title mb-2">Get Appointment</h4>
						<button type="button" class="close" data-dismiss="modal">
							<img src="/ContentRepository/images/cross.png" alt="">
						</button>
					</div>
					<div class="modal-body modal-body-cus">
						<div class="row">
							<div class="tab-listing">
								<div class="d-flex justify-content-center">
									<ul class="nav nav-pills">
										<li class="nav-item">
											<a class="nav-link active" data-toggle="pill" href="#tabB1" target="_self">Online Consultation</a>
										</li>
									</ul>
								</div>
								<form class="ng-pristine ng-valid">
									<div class="tab-content">
										<div class="tab-pane container active" id="tabB1">
											<div class="col-md-12">
												<div class="oc-thirdparty-cont">
													<a href="https://docon.co.in/doctor/sudiptadutta" target="_blank" rel="nofollow">
														<img src="/ContentRepository/images/docon.png" alt="Docon" />
													</a>
													<a href="https://www.lybrate.com/kolkata/doctor/dr-sudipta-dutta-diabetologist" target="_blank" rel="nofollow">
														<img src="/ContentRepository/images/lybrate.png" alt="Lybrate" />
													</a>
													<a href="https://remedoapp.com/rweb/doctors/dr-sudipta-dutta/consult" target="_blank" rel="nofollow">
														<img src="/ContentRepository/images/remedo.svg" alt="Remedo" />
													</a>
												</div>
											</div>
										</div>
										<div class="tab-pane container fade" id="tabB2">
											<div class="row justify-content-center">
												<div class="col-md-10">
													<div class="client-visit-hldr">
														<p>Services currently Unavailable for</p>
														<div class="pt-4">
															<img src="/ContentRepository/images/covid19-lockdown.jpg" class="img-fluid" alt="">
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
		<div class="quickcontact" style="right:0px; background:#f2f2f2; bottom:0px; text-align:center; position:fixed; border-radius:100%;">
				<a rel="nofollow" target="_blank" href="https://wa.me/+919231545841">
					<img width="100px" height="100px" src="ContentRepository/images/whatsapp.png" />
				</a>
		</div>
	</body>
</html>