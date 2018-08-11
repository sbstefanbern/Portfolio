<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stefan Bernkilde - Portfolio</title>
    <meta name="description" content="Portfolio page of Media Graphics Artist Stefan Bernkilde. Get a visual overview of what I can do, and what sort of projects I have worked with here. I have several years experience working with both digital and print design tasks as well as interactive projects, video and animation.">
    <link type="text/css" rel="stylesheet" href="../css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
    <link rel="shortcut icon" href="../favicon.ico">
  </head>
  <body>
    <main class="korup-motion">
      <header id="banner" aria-label="Portfolio folder">
        <?php
          $currentPage = 'portfolio';
          include ('../php/header.php');
        ?>
        <div class="banner-overlay">
          <h1 class="project-head">Korup Motion</h1>
          <p class="project-subhead">Exercise club hosting a wide variety of sporting events, most notably about running</p>
        </div>
        <div class="client-logo">
          <img src="../media/projects/korup-motion-logo.png">
        </div>
      </header>
      <div class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>Korup Motion is an exercise club located in Korup, a suburb of the city Odense. Needing posters to promote their half- and quarter marathon events they reached out to me for help. The final design incorporates the visual identity of the club as well as showing victory and accomplishment with a runner about to finish. Korup Motion is still using this design for their posters every year for the event.</p>
        </div>
        <div class="info-right">
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Posters</li>
          </ul>
        </div>
      </div>
      <div class="project-container">
        <div class="img-big">
          <img src="../media/projects/korup-motion-poster.png">
        </div>
      </div>
      <img class="footer-shape" src="../media/footer-shape.png" srcset="../media/footer-shape-small.png 828w, ../media/footer-shape-medium.png 2048w, ../media/footer-shape.png 2880w"
        sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Footer swirl shape">
    </main>
    <footer>
      <?php include ('../php/footer.php'); ?>
    </footer>
    <script src="../js/javascript.js"></script>
  </body>
</html>