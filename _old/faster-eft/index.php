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
    <main class="faster-eft">
      <header id="banner" aria-label="Portfolio folder">
        <?php
          $currentPage = 'portfolio';
          include ('../php/header.php');
        ?>
        <div class="banner-overlay">
          <h1 class="project-head">Faster EFT</h1>
          <p class="project-subhead">Treatment method performed by Kim Hansen</p>
        </div>
        <div class="client-logo">
          <img src="../media/projects/faster-eft-logo.png">
        </div>
      </header>
      <div class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>Faster EFT is a method of phychological treatment that is a specialty of Kim Hansen. Kim reached out to me in need of some promotional material that would help his business grow. He would also like to develop his own visual identity to be more recognized amongst the local community. We had meetings where I learned more about him and Faster EFT. This helped me be able to create a more fitting visual identity.</p>
        </div>
        <div class="info-right">
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Business Cards</li>
            <li>Flyers</li>
            <li>Logo</li>
            <li>Roll Up Banner</li>
          </ul>
        </div>
      </div>
      <div class="project-container">
        <div class="img-big">
          <img src="../media/projects/faster-eft-flyer.png">
        </div>
        <div class="img-small-60">
          <img src="../media/projects/faster-eft-logo2.png">
        </div>
        <div class="img-small-40">
          <img src="../media/projects/faster-eft-rollup-banner.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/faster-eft-business-cards.png">
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
