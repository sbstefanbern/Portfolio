<!DOCTYPE HTML>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stefan Bernkilde - About</title>
    <meta name="description" content="About page of Media Graphics Artist Stefan Bernkilde. Learn about me, my background and my working experiences on this page. Here you can see my resumé and read a little about my interests and who I am as a person. You can also get a quick overview of my working career so far.">
    <link type="text/css" rel="stylesheet" href="../css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <link rel="shortcut icon" href="../favicon.ico">
  </head>
  <body>
    <main>
      <?php
        $currentPage = 'about';
        include ('../php/header.php');
      ?>
      <section class="intro">
        <div class="intro-container">
          <div class="intro-img"></div>
          <div class="intro-text">
            <h4>Hello! I'm Stefan...</h4>
            <p>23 year old dedicated designer and creative connoisseur working with everything ranging from video editing, graphic design, 3D and webdesign to print design, animation and communication. I always involve myself 100% in the projects that I’m apart of because i always strive to evolve myself and expand my skillset everyday.</p>
          </div>
        </div>
        <div class="resume">
          <a href="../media/cv.pdf" target="_blank" class="btn">
            <div class="btn-container">
              <div class="btn-front">VIEW MY RESUMÉ</div>
              <div class="btn-bottom">VIEW MY RESUMÉ</div>
            </div>
          </a>
        </div>
      </section>
      <section class="aboutme">
        <div>
          <h4>Me personally</h4>
          <p>I live in an apartment a few kilometers out from Odense C. Denmakrs 3rd biggets city located on the island of Funen in the middle of Denmark. As hobbies I love watching football, running, and going out in the city with my friends. But my biggest hobby is what I study towards. Being creative and creating things. Editing videos, creating interfaces, and thing for people to interact with. This is what I spend a big time of my freetime doing. Fo rme it is very important to work with something that you love doing and something which is not seen as ‘work’ but something that you truly enjoy doing.</p>
        </div>
        <div>
          <h4>My Career life</h4>
          <p>I’m an educated Media Graphics Artist as per the summer of 2017. In the same year, in the fall, I began my study to become an AP Graduate in Multimedia Design and Communication. This is what I’m currently studying, and will be finished in the summer of 2019. As part of my Media Graphics Artist education I’ve had a lot of working experience having worked full time for two years as a Graphic Desginer for Ekstra Bladet in Copenhagen. Denmarks biggest digital news media. In my work at Ekstra Bladet I’ve been involved in a broad range of different projects, both big and small. I’ve been responsible for creating everyday news graphics for the paper, but have also been a big part of bigger digital projects, like designing the web widgets for Ekstra Bladet and the web interface for their live score system.</p>
        </div>
      </section>
      <section class="value">
        <div class="values">
          <div>
            <div id="icon-1-value" class="icon-value icon-1-value" onclick="" aria-label="Design icon"></div>
            <h4>Passionate</h4>
            <p>I love to design. It is not only my job, but also my biggest hobby. Everytime I will take on a project I will do my utmost to do it to the very best of my ability.</p>
          </div>
          <div>
            <div id="icon-1-value" class="icon-value icon-2-value" onclick="" aria-label="Design icon"></div>
            <h4>Effective</h4>
            <p>Working hard is important. But learning to work smart is just as crucial. I will always look towards improving my workflow to be constantly improving.</p>
          </div>
          <div>
            <div id="icon-1-value" class="icon-value icon-3-value" onclick="" aria-label="Design icon"></div>
            <h4>Innovative</h4>
            <p>I live to learn something new everyday. Always striving to find new solutions to problems, and constantly keep an open mindset to new ideas and approaches.</p>
          </div>
        </div>
        <div class="mobile-values">
          <div>
            <div id="value-icon-1" class="icon-value icon-1-value value-active" onclick="value1()" aria-label="Design icon"></div>
          </div>
          <div>
            <div id="value-icon-2" class="icon-value icon-2-value" onclick="value2()" aria-label="Design icon"></div>
          </div>
          <div>
            <div id="value-icon-3" class="icon-value icon-3-value" onclick="value3()" aria-label="Design icon"></div>
          </div>
        </div>
        <div class="mobile-values-text" id="value-text-1">
          <h4>Passionate</h4>
          <p>I love to design. It is not only my job, but also my biggest hobby. Everytime I will take on a project I will do my utmost to do it to the very best of my ability.</p>
        </div>
        <div class="mobile-values-text" id="value-text-2">
          <h4>Effective</h4>
          <p>Working hard is important. But learning to work smart is just as crucial. I will always look towards improving my workflow to be constantly improving.</p>
        </div>
        <div class="mobile-values-text" id="value-text-3">
          <h4>Innovative</h4>
          <p>I live to learn something new everyday. Always striving to find new solutions to problems, and constantly keep an open mindset to new ideas and approaches.</p>
        </div>
      </section>
      <?php include ('../php/footer.php'); ?>
    </main>
    <script src="../js/javascript.js"></script>
  </body>
</html>
