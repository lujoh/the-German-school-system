<!DOCTYPE html>
<html lang="en">
<head> 
    <title>The German School System
    </title>
    <link rel="stylesheet" href="FPCSS.css" type="text/css">
    <meta name="viewport" content="width=device-width initial-scale=1.0">
    <!--Link to CSS file-->
</head>
<body> 
    <div class="outline">
    <div class="header"> <!--The header div-->
        <h1>The German School System</h1>
    </div>
    <div class="nav" id="Navigation"><!--Navigation Bar-->
        <ul>
            <li ><a href="#" class="menuIcon" onclick="toggleNav()">&#9776;</a></li>
            <li ><a href="FPHome.html"  id="current">Homepage</a></li>
            <li ><a href="FPPrimary.html" >Primary</a></li>
            <li ><a href="FPSecondary.html" >Secondary</a></li>
            <li ><a href="FPPost.html" >Post-Secondary</a></li>
            <li ><a href="FPStats.html" >Statistics</a></li>
            
        </ul>
    </div>
    <div class="container"><!--Container for inner navigation-->
        <div class="innav">
            <h5 class="innav">Go to:</h5>
            <ul class="innav"><!--Internal navigation to navigate the page-->
                <li class="innav"><a href="#Intro">Introduction</a></li>
                <li class="innav"><a href="#Sources">Sources</a></li>
            </ul>
        </div>
    </div>
    
        
<!--Container for the main content. Container can be copied to use multiple times-->     
        <div class="container">
        <div class="left"><!--Container for content on the left-->
            <img src="Home.jpg" alt="First Grader holding a Schult&uuml;te">
        </div>
        <div class="right"><!--Container for content on the right-->
            <h4 id="Intro">Introduction</h4>
            <p>Education is an important process that shapes a large part of our early life and sets the foundation for our future. I was in the German school system from the age of three when I started Kindergarten to the age of eighteen when I left and moved to the United States. Now that I know more about both the German and the US school systems, I feel like both systems have their advantages and disadvantages and both have a lot of room for improvement. I think knowledge of how things are done in other places can help us look at what we are used to with a different eye so that we can see what is good and where we can improve. With that in mind I made this website to explain the foundations of the German school system and provide some statistics related to it. The information is based on my own experiences which took place in the German state of Bavaria in the 2000s and is supplemented by a number of sources I have found which will be listed at the bottom of the page.</p>
        </div>
    </div>     
<!--End of one inner navigation container Copy until here-->
  
        
    <div class="footer"><!--Footer-->
        <p class="sign">
            &copy;2020 Lucia Johnson
            <br>
            This page was made for the class "Introduction to Web Technologies" with Mehdi Barati at the <a href="https://www.albany.edu/">University at Albany</a>.
            <br>
            <a href="mailto:lejohnson@albany.edu">Contact me</a>
        </p>
        <p>Disclaimer: The school system on this page is specific to the German state of Bavaria. Other German states may have slight differences in their system.</p>
        <p id="Sources">Sources: <br>
            Unless otherwise specified images are my own 
            <br>
            Background image by <a href="https://pixabay.com/users/Shafin_Protic-16278454/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5375259">Shafin Al Asad Protic</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5375259">Pixabay</a>
            <br>
            Code for mobile menu via <a href="https://www.w3schools.com/howto/howto_js_topnav_responsive.asp">W3 Schools</a>
            <br>
        </p>
    </div>
    </div>
    <!--Place to enter script-->
    <script src="FPfunctions.js" type="text/javascript"></script>
</body>
</html>
