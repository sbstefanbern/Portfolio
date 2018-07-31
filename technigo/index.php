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
    <main class="technigo">
      <header id="banner" aria-label="Portfolio folder">
        <?php
          $currentPage = 'portfolio';
          include ('../php/header.php');
        ?>
        <div class="banner-overlay">
          <h1 class="project-head">TechniGO</h1>
          <p class="project-subhead">Concept bringing Virtual Reality and fitness together</p>
        </div>
        <div class="client-logo">
          <img src="../media/projects/technigo-logo.png">
        </div>
      </header>
      <div class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>TechniGO is the name of a concept for the Virtual Reality (VR) company Artifact Game Solutions, which develops VR games. The aim of TechniGO is to bring Virtual Reality to fitness centers and to ultimately get more people to exercise and live a healthier life via technology. In this project a full visual identity with hard edges, polygons and fresh colors was developed and used throughout all the products. It features a campaign video presenting the video and showcasing some of what TechniGO would be able to do. It also includes a promotional website, various print material for marketing, aswell as a logo to tie it all together. This concept was made as a school project. It was not used outside this setting.</p>
        </div>
        <div class="info-right">
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Campaign Video</li>
            <li>Campaign Website</li>
            <li>Logo</li>
            <li>Business Cards</li>
            <li>Trifold</li>
          </ul>
        </div>
      </div>
      <div class="project-container">
        <div class="img-big">
          <iframe src="https://www.youtube.com/embed/WK4YBpmFJnA?rel=0&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div class="img-small-40 small-img-left">
          <img src="../media/projects/technigo-logo2.png">
        </div>
        <div class="img-small-60 small-img-right">
          <img src="../media/projects/technigo-business-cards.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/technigo-website.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/technigo-trifold.png">
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