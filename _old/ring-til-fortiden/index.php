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
    <main class="ring-til-fortiden">
      <header id="banner" aria-label="Portfolio folder">
        <?php
          $currentPage = 'portfolio';
          include ('../php/header.php');
        ?>
        <div class="banner-overlay">
          <h1 class="project-head">Ring til Fortiden</h1>
          <p class="project-subhead">Concept project for an installation on Fredericia Vold</p>
        </div>
        <div class="client-logo">
          <img src="../media/projects/ring-til-fortiden-logo.png">
        </div>
      </header>
      <div class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>'Ring til Fortiden' is the name off a full concept installation for Fredericia Vold in Fredericia, Denmark. They requested a solution which should aim to bring more visitors to the main attraction in town. This solution involves kids in an engaging and fun way, bringing them in contact with the soldiers and heroes of the city's past and sends them on missions to find lost soldiers throughout Fredericia Vold. This project was made as a school project. It was not used outside this setting.</p>
        </div>
        <div class="info-right">
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Showcase video of concept</li>
            <li>Trifolders</li>
            <li>Diplomas</li>
            <li>Visual design for an app</li>
          </ul>
        </div>
      </div>
      <div class="project-container">
        <div class="img-big">
          <iframe src="https://www.youtube.com/embed/FLygurzrd2w?rel=0&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div class="img-big">
          <img src="../media/projects/ring-til-fortiden-trifold.png">
        </div>
        <div class="img-small-50">
          <img src="../media/projects/ring-til-fortiden-diploma.png">
        </div>
        <div class="img-small-50 no-margin">
          <img src="../media/projects/ring-til-fortiden-diploma2.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/ring-til-fortiden-app.png">
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
