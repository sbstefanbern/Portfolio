<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stefan Bernkilde - Home</title>
    <meta name="description" content="Portfolio of Media Graphics Artist Stefan Bernkilde. I work with a wide variety of creative projects which you can see here. This includes UX and UI design, video shooting and editing, layout, typography and design of graphic products, developing visual identities and boosting brand recognition.">
    <link type="text/css" rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
    <link rel="shortcut icon" href="favicon.ico">
  </head>
  <body>
    <main>
      <header id="home" aria-label="Workspace">
        <div id="topvideo">
          <video muted autoplay class="full-bg-video" poster="media/banner-movie-poster.jpg">
            <source src="media/banner-movie.mp4" type="video/mp4">
          </video>
          <img class="video-shape" src="media/shape.svg" alt="Swirl shape">
        </div>
        <div class="video-overlay">
          <?php
            $currentPage = 'home';
            include ('php/header.php');
          ?>
          <div class="banner-overlay">
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
            <button id="contactform" class="btn-red btn-red-animate">Contact me</button>
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
                    <button name="submit" type="submit" id="contact-submit" class="btn-red">Submit</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="values">
        <div class="values-icon-container">
          <div class="icon-value">
            <div id="value-icon-1" class="values-icon icon-1" onclick="value1()" aria-label="Flame icon"></div>
          </div>
          <div class="icon-value">
            <div id="value-icon-2" class="values-icon-small icon-2-small" onclick="value2()" aria-label="Arrow icon"></div>
          </div>
          <div class="icon-value">
            <div id="value-icon-3" class="values-icon-small icon-3-small" onclick="value3()" aria-label="Light bulb icon"></div>
          </div>
        </div>
        <div id="value1" class="value-content">
          <h3>Passionate</h3>
          <p>I love to design. It is not only my job, but also my biggest hobby. Everytime I will take on a project I will do my utmost to do it to the very best of my ability.</p>
        </div>
        <div id="value2" class="value-content">
          <h3>Effective</h3>
          <p>Working hard is important. But learning to work smart is just as crucial. I will always look towards improving my workflow to be constantly improving.</p>
        </div>
        <div id="value3" class="value-content">
          <h3>Innovative</h3>
          <p>I live to learn something new everyday. Always striving to find new solutions to problems, and constantly keep an open mindset to new ideas and approaches.</p>
        </div>
      </section>
      <section id="projects" aria-label="Background pattern">
        <img class="shape" src="media/shape.svg" alt="Swirl shape">
        <h2>Latest projects</h2>
        <div class="project-element">
          <h3>Ring til Fortiden</h3>
          <p>A concept for an installation on Fredericia Vold.</p>
          <img src="media/front-project1.png" srcset="media/front-project1-small.png 828w, media/front-project1-medium.png 2028w, media/front-project1.png 2880w"
            sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Ring til Fortiden project">
          <a href="https://www.youtube.com/watch?v=FLygurzrd2w" class="btn-red" target="_blank">View project</a>
        </div>
        <hr class="project-hr">
        <div class="project-element">
          <h3>HC Odense</h3>
          <p>Promotional posters and matchday programme designs for the Odense-based handball club.</p>
          <img src="media/front-project2.png" srcset="media/front-project2-small.png 828w, media/front-project2-medium.png 2028w, media/front-project2.png 2880w"
            sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="HC Odense project">
          <a href="media/hc-odense.png" class="btn-red" target="_blank">View project</a>
        </div>
        <hr class="project-hr">
        <div class="project-element">
          <h3>Faster EFT</h3>
          <p>Graphic promotional material made for an independent treater.</p>
          <img src="media/front-project3.png" srcset="media/front-project3-small.png 828w, media/front-project3-medium.png 2028w, media/front-project3.png 2880w"
            sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Faster EFT project">
          <a href="media/faster-eft.png" class="btn-red" target="_blank">View project</a>
        </div>
        <img class="quote-top-shape" src="media/shape2.png" srcset="media/shape2-small.png 828w, media/shape2-medium.png 2048w, media/shape2.png 2880w"
          sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Swirl shape">
      </section>
      <section id="quotes">
        <h2>Outside opinions</h2>
        <p class="subhead">Don't just take my word for it. Here is what some of my former co-workers have to say</p>
        <div class="quote-container no-margin">
          <div class="person-img">
            <img src="media/temp-person.png" alt="Profile picture">
          </div>
          <div class="person-info">
            <h3>Anders Andersen</h3>
            <h4>Job title</h4>
          </div>
          <div class="person-quote">
            <p>“Working with Stefan has been a pleasure. I can really see how much he has developed in his time here.!</p>
          </div>
        </div>
        <hr class="project-hr quote-hr">
        <div class="quote-container no-margin right-quote">
          <div class="person-img">
            <img src="media/temp-person.png" alt="Profile picture">
          </div>
          <div class="person-info">
            <h3>Casper Caspersen</h3>
            <h4>Job title</h4>
          </div>
          <div class="person-quote">
            <p>"I've always been able to trust any assignment in the hands of Stefan will turn out be to be quality."</p>
          </div>
        </div>
        <hr class="project-hr quote-hr">
        <div class="quote-container">
          <div class="person-img">
            <img src="media/temp-person.png" alt="Profile picture">
          </div>
          <div class="person-info">
            <h3>John Johnsen</h3>
            <h4>Job title</h4>
          </div>
          <div class="person-quote">
            <p>"Stefan is one of the most dedicated students I've met here and have really left a memorable impact."</p>
          </div>
        </div>
        <hr class="project-hr quote-hr">
        <div class="quote-container right-quote">
          <div class="person-img">
            <img src="media/temp-person.png" alt="Profile picture">
          </div>
          <div class="person-info">
            <h3>Martin Martinsen</h3>
            <h4>Job title</h4>
          </div>
          <div class="person-quote">
            <p>"Stefan's attittude and willingnes to constantly develop himself and his skills is impressive."</p>
          </div>
        </div>
        <img class="footer-shape" src="media/footer-shape.png" srcset="media/footer-shape-small.png 828w, media/footer-shape-medium.png 2048w, media/footer-shape.png 2880w"
          sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Footer swirl shape">
      </section>
    </main>
    <footer>
      <?php include ('php/footer.php'); ?>
    </footer>
    <script src="js/javascript.js"></script>
  </body>
</html>
