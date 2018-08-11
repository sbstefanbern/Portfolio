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
            <p class="text-carousel-text">I'm an ambitious designer who works with</p>
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
                <button name="submit" type="submit" id="contact-submit" class="submit-btn">SUBMIT</button>
              </fieldset>
            </form>
          </div>
        </div>
        <a href="#projects" class="arrow-down"></a>
      </section>
      <section id="projects" class="projects">
        <div class="projects-intro"><p>EXPLORE WHAT I CAN DO</p></div>
        <div class="front-project-grid">
        	<div class="project-container">
        		<a href="hc-odense/" class="project-img project-1">
              <div class="project-text">
                <h5>POSTERS - SALES BROCHURES - MATCH DAY PROGRAMMES</h5>
          			<h4>HC Odense</h4>
                <hr/>
                <p>Various graphic material for the handball club</p>
              </div>
            </a>
        	</div>
          <div class="project-container">
        		<a href="eb-livescore/" class="project-img project-2">
              <div class="project-text">
                <h5>WEBDESIGN</h5>
          			<h4>Ekstra Bladet Livescore</h4>
                <hr/>
                <p>Design for the web version of Ekstra Bladets livescore app</p>
              </div>
            </a>
        	</div>
          <div class="project-container">
        		<a href="portfolio/" class="project-img project-3">
              <div class="project-text">
                <h5>NATIVE ADD GRAPHIC</h5>
          			<h4>Circle K</h4>
                <hr/>
                <p>Native add graphic showcasing the oils journey from the North Sea all the way to the gas stations</p>
              </div>
            </a>
        	</div>
          <div class="project-container">
        		<a href="portfolio/" class="project-img project-4">
              <div class="project-text">
                <h5>WEBDESIGN</h5>
          			<h4>Ekstra Bladet Widgets</h4>
                <hr/>
                <p>The overall streamlined design for all widgets on Ekstra Bladet</p>
              </div>
            </a>
        	</div>
          <div class="project-container">
        		<a href="portfolio/" class="project-img project-5">
              <div class="project-text">
                <h5>BUSINESS CARDS - FLYERS - LOGO - ROLL UP BANNERS</h5>
          			<h4>Faster EFT</h4>
                <hr/>
                <p>Visual Identity and promotional material for an independent Faster EFT treater</p>
              </div>
            </a>
        	</div>
          <div class="project-container">
        		<a href="portfolio/" class="project-img project-6">
              <div class="project-text">
                <h5>WEB GRAPHICS - ANIMATION</h5>
          			<h4>Superliga Animation</h4>
                <hr/>
                <p>Animation made for Ekstra Bladet to clarify the new football league system used by the Danish Superliga</p>
              </div>
            </a>
        	</div>
          <div class="project-container">
        		<a href="portfolio/" class="project-img project-7">
              <div class="project-text">
                <h5>VISUAL IDENTITY - ANIMATED BANNERS</h5>
          			<h4>Transfer Deadline Day</h4>
                <hr/>
                <p>Full visual identity and graphic material for Ekstra Bladets Transfer Deadline day campaigns</p>
              </div>
            </a>
        	</div>
          <div class="project-container">
        		<a href="portfolio/" class="project-img project-8">
              <div class="project-text">
                <h5>VISUAL IDENTITY - GRAPHICS</h5>
          			<h4>Formula 1 Graphics</h4>
                <hr/>
                <p>Full visual identity and graphics of every Formula 1 track used by Ekstra Bladet in their coverage</p>
              </div>
            </a>
        	</div>
        </div>
        <div class="project-view-more">
          <a href="portfolio/" class="btn">
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
          <div>
            <div class="icon-service icon-1-service" onclick="" aria-label="Design icon"></div>
            <h4>Digital design</h4>
            <p>All the way from brainstorming ideas, to a fully fledged digital design. Whether it'd be apps, websites, widgets or anything inbetween, I got you covered!</p>
          </div>
          <div>
            <div class="icon-service icon-2-service" onclick="" aria-label="Design icon"></div>
            <h4>Print design</h4>
            <p>Every print product you can imagine, I can help you get a visual identity established that promotes your business and reflects your values across all your materials.</p>
          </div>
          <div>
            <div class="icon-service icon-3-service" onclick="" aria-label="Design icon"></div>
            <h4>Videos</h4>
            <p>Need a high quality video promoting your business? Or maybe showcasing a variety of your products? Either way I can help you out with a high quality solution.</p>
          </div>
          <div>
            <div class="icon-service icon-4-service" onclick="" aria-label="Design icon"></div>
            <h4>Animation</h4>
            <p>I can make stand alone motion graphics, logo animations or animations as part of a video. If you need help bringing your visuals to life, look no further!</p>
          </div>
          <div>
            <div class="icon-service icon-5-service" onclick="" aria-label="Design icon"></div>
            <h4>3D Material</h4>
            <p>Working with 3D objects, animations and printing, I can help you with a variety of different solutions that you might need, relating to 3D work and/or printing.</p>
          </div>
          <div>
            <div class="icon-service icon-6-service" onclick="" aria-label="Design icon"></div>
            <h4>...and much more!</h4>
            <p>I have experience working on a lot of subjects. So if you're in doubt if I can help you with your particular need, don't hesitate to contact me and we'll find a solution.</p>
          </div>
        </div>
        <div class="mobile-servicesgrid">
          <div>
            <div class="icon-service icon-1-service service-active" id="service-icon-1" onclick="service1()" aria-label="Design icon"></div>
          </div>
          <div>
            <div class="icon-service icon-2-service" id="service-icon-2" onclick="service2()" aria-label="Design icon"></div>
          </div>
          <div>
            <div class="icon-service icon-3-service" id="service-icon-3" onclick="service3()" aria-label="Design icon"></div>
          </div>
          <div>
            <div class="icon-service icon-4-service" id="service-icon-4" onclick="service4()" aria-label="Design icon"></div>
          </div>
          <div>
            <div class="icon-service icon-5-service" id="service-icon-5" onclick="service5()" aria-label="Design icon"></div>
          </div>
          <div>
            <div class="icon-service icon-6-service" id="service-icon-6" onclick="service6()" aria-label="Design icon"></div>
          </div>
        </div>
          <div class="mobile-servicesgrid-text" id="service-text-1">
            <h4>Digital design</h4>
            <p>All the way from brainstorming ideas, to a fully fledged digital design. Whether it'd be apps, websites, widgets or anything inbetween, I got you covered!</p>
          </div>
          <div class="mobile-servicesgrid-text" id="service-text-2">
            <h4>Print design</h4>
            <p>Every print product you can imagine, I can help you get a visual identity established that promotes your business and reflects your values across all your materials.</p>
          </div>
          <div class="mobile-servicesgrid-text" id="service-text-3">
            <h4>Videos</h4>
            <p>Need a high quality video promoting your business? Or maybe showcasing a variety of your products? Either way I can help you out with a high quality solution.</p>
          </div>
          <div class="mobile-servicesgrid-text" id="service-text-4">
            <h4>Animation</h4>
            <p>I can make stand alone motion graphics, logo animations or animations as part of a video. If you need help bringing your visuals to life, look no further!</p>
          </div>
          <div class="mobile-servicesgrid-text" id="service-text-5">
            <h4>3D Material</h4>
            <p>Working with 3D objects, animations and printing, I can help you with a variety of different solutions that you might need, relating to 3D work and/or printing.</p>
          </div>
          <div class="mobile-servicesgrid-text" id="service-text-6">
            <h4>...and much more!</h4>
            <p>I have experience working on a lot of subjects. So if you're in doubt if I can help you with your particular need, don't hesitate to contact me and we'll find a solution.</p>
          </div>
      </section>
      <section class="work">
        <div class="worktext">
          <h3>Working experiences</h3>
          <p>A highlight of some of the companies I have either worked for, or together with, to create elegent, stylish and appealing graphic solutions. I have experience both in handling entire projects alone, but also in working in big teams together with people with a wide variety of different skill sets. In many of these cases I've been in charge of everything from ideation, to design, to production. Starting with an initial meeting with the client, and ending up with me personally handing the finished product to them in the end. In other cases I have been apart of a large team working together with other designers, developers and project managers to ultimately achieve the overall objective.</p>
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
              <h4>Hans Hansen</h4>
              <p>JOB TITLE</p>
            </div>
            <div class="quote-text">
              <p>"I've always been able to trust any assignment in the hands of Stefan will turn out be to be quality."</p>
            </div>
          </div>
          <div class="quote-color">
            <div class="quote-img"></div>
            <div class="quote-name">
              <h4>Peter Petersen</h4>
              <p>JOB TITLE</p>
            </div>
            <div class="quote-text">
              <p>"Stefan is one of the most dedicated people I've met here an he really left a mmorable impact."</p>
            </div>
          </div>
          <div class="quote-color2">
            <div class="quote-img"></div>
            <div class="quote-name">
              <h4>Martin Martinsen</h4>
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
