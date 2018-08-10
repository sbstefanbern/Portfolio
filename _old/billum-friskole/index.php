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
    <main class="billum-friskole">
      <header id="banner" aria-label="Portfolio folder">
        <?php
          $currentPage = 'portfolio';
          include ('../php/header.php');
        ?>
        <div class="banner-overlay">
          <h1 class="project-head">Billum Friskole</h1>
          <p class="project-subhead">Independent school in western Jutland with a focus on community and togetherness</p>
        </div>
        <div class="client-logo">
          <img src="../media/projects/billum-friskole-logo.png">
        </div>
      </header>
      <div class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>Billum Friskole is newly founded independent school after the closure of a public school. They are in need of a visual identity that reflects their values as a school, a total overhaul to their website, trifolders to help brand the school, and a new logo to go with it all. The green, blue and brown colors were used to reflect the schools close connection with nature and the ocean. Generally swirly shapes were used to symbolize this schools different approach to teaching, and as a symbol of waves. All of this was made as a school project. It was not used outside this setting.</p>
        </div>
        <div class="info-right">
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Visual Identity</li>
            <li>Website</li>
            <li>Logo</li>
            <li>Trifold</li>
          </ul>
        </div>
      </div>
      <div class="project-container">
        <div class="img-big">
          <img src="../media/projects/billum-friskole-website.png">
        </div>
        <div class="img-small-60">
          <img src="../media/projects/billum-friskole-website2.png">
        </div>
        <div class="img-small-40">
          <img src="../media/projects/billum-friskole-logo2.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/billum-friskole-trifold.png">
        </div>
        <div class="img-small-40 small-img-left">
          <img src="../media/projects/billum-friskole-visual.png">
        </div>
        <div class="img-small-60 small-img-right">
          <img src="../media/projects/billum-friskole-website3.png">
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
