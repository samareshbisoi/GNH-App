function show_tab(tone,ttwo,bone,btwo) {
	//alert(tone);
	$(ttwo).hide();	
	$(tone).show();	
	
	//alert();
	$(btwo).removeClass('active');
	//$(tone).removeClass('active');
	$(bone).addClass('active');
}


$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var menu = '<li><a href="index.html" class="close-panel"><img src="images/icons/red/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="about.html" class="close-panel"><img src="images/icons/red/user.png" alt="" title="" /><span>About Us</span></a></li><li><a href="radio-programme.html" class="close-panel"><img src="images/icons/red/radio.png" alt="" title="" /><span>Radio Programme</span></a></li><li><a href="radio-distribution.html" class="close-panel"><img src="images/icons/red/trailer.png" alt="" title="" /><span>Radio Distribution</span></a></li><li><a href="news-events.html" class="close-panel"><img src="images/icons/red/blog.png" alt="" title="" /><span>News & Events</span></a></li><li><a href="http://goodnewshourindia.org/photo-gallery" target="_blank" class="close-panel"><img src="images/icons/red/photos.png" alt="" title="" /><span>Photo Gallery</span></a></li><li><a href="gnh-radio.html"class="close-panel"><img src="images/icons/red/video.png" alt="" title="" /><span>GNH Radio</span></a></li>	<li><a href="our-speakers.html" class="close-panel"><img src="images/icons/red/speaking engagement.png" alt="" title="" /><span>Our Speakers</span></a></li>   <li><a href="Medical-camp.html" class="close-panel"><img src="images/icons/red/briefcase.png" alt="" title="" /><span>Medical Camps</span></a></li><li><a href="donate.html" class="close-panel"><img src="images/icons/red/supporticon.png" alt="" title="" /><span>Donate</span></a></li><li><a href="contact.html" class="close-panel"><img src="images/icons/red/contact.png" alt="" title="" /><span>Contact</span></a></li>';
		
		$("#sidemenu").append(menu);
		
	});