<!DOCTYPE HTML>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stefan Bernkilde - Home</title>
    <meta name="description" content="Portfolio of Media Graphics Artist Stefan Bernkilde. I work with a wide variety of creative projects which you can see here. This includes UX and UI design, video shooting and editing, layout, typography and design of graphic products, developing visual identities and boosting brand recognition.">
    <link type="text/css" rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <link rel="shortcut icon" href="favicon.ico">
  </head>
  <body>
    <main>
      <?php
        $currentPage = 'home';
        include ('php/header.php');
      ?>
      <section class="banner">
        <h1>
          <div class="mainword red">Design</div>
          <div class="mainsentence"><span>new limits</span></div>
        </h1>
        <div class="text-carousel">
          <div class="text-carousel-container">
            <p class="text-carousel-text">I'm a creative designer who works with</p>
            <hr class="subhead-hr"/>
            <ul class="text-carousel-list red">
              <li class="text-carousel-list-item">print material</li>
              <li class="text-carousel-list-item">visual identities</li>
              <li class="text-carousel-list-item">video material</li>
              <li class="text-carousel-list-item">digital designs</li>
              <li class="text-carousel-list-item">brand recognition</li>
            </ul>
          </div>
        </div>
        <div class="banner-btn">
          <a href="#" class="btn" id="contactform">
            <div class="btn-container">
              <div class="btn-front">GET IN TOUCH</div>
              <div class="btn-bottom">GET IN TOUCH</div>
            </div>
          </a>
        </div>
        <div id="contactpopup" class="contactbox">
          <div class="popup-container">
            <span class="close-popup">&times;</span>
            <form id="contact" method="post" action="php/contact-form.php">
              <h4>GET IN TOUCH</h4>
              <p>I will return to you as soon as possible!</p>
              <fieldset>
                <input placeholder="Your name" type="text" name="name" tabindex="1" required autofocus>
              </fieldset>
              <fieldset>
                <input placeholder="Your Email Address" type="email" name="email" tabindex="2" required>
              </fieldset>
              <fieldset>
                <input placeholder="Subject" type="text" name="subject" tabindex="3" required>
              </fieldset>
              <fieldset>
                <textarea placeholder="Type your message here..." type="text" name="message" tabindex="4" required></textarea>
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" class="submit-btn">Submit</button>
              </fieldset>
            </form>
          </div>
        </div>
        <a href="#projects" class="arrow-down"></a>
      </section>
      <section id="projects" class="projects">
        <div class="projects-intro"><p>EXPLORE WHAT I CAN DO</p></div>
        <div class="projectgrid">
        	<div class="project-container">
        		<a href="portfolio/" class="project-img project-1">
              <div class="project-text">
          			<h4>Premier League Handbook</h4>
                <hr/>
                <p>A handbook about every team in the Premier League containing various amounts of good information for you to read.</p>
              </div>
            </a>
        	</div>
          <div class="pro2"></div>
          <div class="pro3"></div>
          <div class="pro4"></div>
          <div class="pro5"></div>
          <div class="pro6"></div>
          <div class="pro7"></div>
          <div class="pro8"></div>
        </div>
        <div class="project-view-more">
          <a href="#" class="btn">
            <div class="btn-container">
              <div class="btn-front">VIEW MORE</div>
              <div class="btn-bottom">VIEW MORE</div>
            </div>
          </a>
        </div>
      </section>
      <section class="services">
        <div class="prointro">
          <h2>What can I make</h2>
        </div>
        <div class="servicesgrid">
          <div class="ser1">
            <div id="icon-1-service" class="icon-service icon-1-service" onclick="" aria-label="Design icon"></div>
            <h4>Digital design</h4>
            <p>I love to design. It is not only my job, but also my biggest hobby. Everytime I will take on a project I will do my utmost to do it to the very best of my ability.</p>
          </div>
          <div class="ser2">
            <div id="icon-1-service" class="icon-service icon-1-service" onclick="" aria-label="Design icon"></div>
            <h4>Print design</h4>
            <p>I love to design. It is not only my job, but also my biggest hobby. Everytime I will take on a project I will do my utmost to do it to the very best of my ability.</p>
          </div>
          <div class="ser3">
            <div id="icon-1-service" class="icon-service icon-1-service" onclick="" aria-label="Design icon"></div>
            <h4>Videos</h4>
            <p>I love to design. It is not only my job, but also my biggest hobby. Everytime I will take on a project I will do my utmost to do it to the very best of my ability.</p>
          </div>
          <div class="ser4">
            <div id="icon-1-service" class="icon-service icon-1-service" onclick="" aria-label="Design icon"></div>
            <h4>Animation</h4>
            <p>I love to design. It is not only my job, but also my biggest hobby. Everytime I will take on a project I will do my utmost to do it to the very best of my ability.</p>
          </div>
          <div class="ser5">
            <div id="icon-1-service" class="icon-service icon-1-service" onclick="" aria-label="Design icon"></div>
            <h4>3D Material</h4>
            <p>I love to design. It is not only my job, but also my biggest hobby. Everytime I will take on a project I will do my utmost to do it to the very best of my ability.</p>
          </div>
          <div class="ser6">
            <div id="icon-1-service" class="icon-service icon-1-service" onclick="" aria-label="Design icon"></div>
            <h4>...and much more!</h4>
            <p>I love to design. It is not only my job, but also my biggest hobby. Everytime I will take on a project I will do my utmost to do it to the very best of my ability.</p>
          </div>
        </div>
      </section>
      <section class="work">
        <div class="worktext">
          <h3>I've worked with</h3>
          <p>I’m an educated Media Graphics Artist as per the summer of 2017. In the same year, in the fall, I began my study to become an AP Graduate in Multimedia Design and Communication. This is what I’m currently studying, and will be finished in the summer of 2019. As part of my Media Graphics Artist education I’ve had a lot of working experience having worked full time for two years as a Graphic Desginer.</p>
        </div>
        <div class="workgrid">
          <div class="work1"></div>
          <div class="work2"></div>
          <div class="work3"></div>
          <div class="work4"></div>
          <div class="work5"></div>
          <div class="work6"></div>
          <div class="work7"></div>
          <div class="work8"></div>
          <div class="work9"></div>
        </div>
      </section>
      <section class="quotes">
        <div class="quotesintro">
          <h2>Outside opinions</h2>
        </div>
        <div class="quotesgrid">
          <div class="quote-color">
            <div class="quote-img"></div>
            <div class="quote-name">
              <h4>Jens Jensen</h4>
              <p>JOB TITLE</p>
            </div>
            <div class="quote-text">
              <p>“Working with Stefan has been a pleasure. I can really see how much he has developed in his time here!"</p>
            </div>
          </div>
          <div class="quote-color2">
            <div class="quote-img"></div>
            <div class="quote-name">
              <h4>Jens Jensen</h4>
              <p>JOB TITLE</p>
            </div>
            <div class="quote-text">
              <p>"I've always been able to trust any assignment in the hands of Stefan will turn out be to be quality."</p>
            </div>
          </div>
          <div class="quote-color">
            <div class="quote-img"></div>
            <div class="quote-name">
              <h4>Jens Jensen</h4>
              <p>JOB TITLE</p>
            </div>
            <div class="quote-text">
              <p>"Stefan is one of the most dedicated people I've met here an he really left a mmorable impact."</p>
            </div>
          </div>
          <div class="quote-color2">
            <div class="quote-img"></div>
            <div class="quote-name">
              <h4>Jens Jensen</h4>
              <p>JOB TITLE</p>
            </div>
            <div class="quote-text">
              <p>"Stefans attitue and willingness to constantly develop himself and his skills is impressive."</p>
            </div>
          </div>
        </div>
      </section>
      <?php include ('php/footer.php'); ?>
    </main>
    <script src="js/javascript.js"></script>
  </body>
</html>
