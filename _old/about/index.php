<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stefan Bernkilde - About</title>
    <meta name="description" content="About page of Media Graphics Artist Stefan Bernkilde. Learn about me, my background and my working experiences on this page. Here you can see my resumé and read a little about my interests and who I am as a person. You can also get a quick overview of my working career so far.">
    <link type="text/css" rel="stylesheet" href="../css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
    <link rel="shortcut icon" href="../favicon.ico">
  </head>
  <body>
    <main>
      <header id="banner" class="about" aria-label="Stefan at table">
        <?php
          $currentPage = 'about';
          include ('../php/header.php');
        ?>
        <div class="banner-overlay">
          <h1>
            <div class="mainword red">Hello!</div>
            <div class="mainsentence"><span>I'm Stefan</span></div>
          </h1>
          <div class="banner-subhead">
            <div>
              <p>See my work experiences and read a little more about me</p>
            </div>
          </div>
          <a href="../media/cv.pdf" class="btn-red" target="_blank">Open my resumé</a>
        </div>
      </header>
      <section id="who-am-i">
        <div class="who-am-i-container">
          <h2>Who am I?</h2>
          <p class="subhead">Learn about me, my interests and working experiences here</p>
          <div class="redbox no-margin">
            <h3>OVERVIEW</h3>
            <p>
              23 year old dedicated designer and creative connoisseur working with everything ranging from video editing, graphic design, 3D and webdesign to print design, animation and communication. I always involve myself 100% in the projects that I’m apart of because i always strive to evolve myself and expand my skillset everyday.
            </p>
          </div>
          <div class="redbox">
            <h3>PERSONAL LIFE</h3>
            <p>
              I live in an apartment a few kilometers out from Odense C. Denmakrs 3rd biggets city located on the island of Funen in the middle of Denmark. As hobbies I love watching football, running, and going out in the city with my friends. But my biggest hobby is what I study towards. Being creative and creating things. Editing videos, creating interfaces, and thing for people to interact with. This is what I spend a big time of my freetime doing. Fo rme it is very important to work with something that you love doing and something which is not seen as ‘work’ but something that you truly enjoy doing.
            </p>
          </div>
          <div class="redbox">
            <h3>CAREER</h3>
            <p>
              I’m an educated Media Graphics Artist as per the summer of 2017. In the same year, in the fall, I began my study to become an AP Graduate in Multimedia Design and Communication. This is what I’m currently studying, and will be finished in the summer of 2019. As part of my Media Graphics Artist education I’ve had a lot of working experience having worked full time for two years as a Graphic Desginer for Ekstra Bladet in Copenhagen. Denmarks biggest digital news media. In my work at Ekstra Bladet I’ve been involved in a broad range of different projects, both big and small. I’ve been responsible for creating everyday news graphics for the paper, but have also been a huge part of bigger digital projects, like designing the Livescore App for Ekstra Bladet and the web interface that goes along with it. Essentially at this job I’ve had a very flexible role, having both played major parts in daily print design projects but also bigger digital User Interface and User Experience design projects.
            </p>
          </div>
        </div>
        <img class="footer-shape" src="../media/footer-shape.png" srcset="../media/footer-shape-small.png 828w, ../media/footer-shape-medium.png 2048w, ../media/footer-shape.png 2880w"
          sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Footer swirl shape">
      </section>
    </main>
    <footer>
      <?php include ('../php/footer.php'); ?>
    </footer>
    <script src="../js/javascript.js"></script>
  </body>
</html>
