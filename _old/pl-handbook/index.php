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
    <main class="pl-handbook">
      <header id="banner" aria-label="Portfolio folder">
        <?php
          $currentPage = 'portfolio';
          include ('../php/header.php');
        ?>
        <div class="banner-overlay">
          <h1 class="project-head">Premier League Handbook</h1>
          <p class="project-subhead">Concept football handbook for the English Premier League</p>
        </div>
        <div class="client-logo">
          <img src="../media/projects/pl-handbook-logo.png">
        </div>
      </header>
      <div class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>Handbook with key information and statistics about the Premier League. Each of the 20 teams have their own full themed pages after the clubs colors, containing a wide variety of information about them, their history, their best players throughout history, and their trophy haul. The book is made with the generally minimalistic Premier League visual identity in mind, showing throughout with the shapes and graphics, the use of the "swoosh" and the colors of the cover and non-specific club pages. This book was made as the typography final exam in my Graphic Design education. It was not used outside this setting.</p>
        </div>
        <div class="info-right">
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Full 44-page handbook</li>
          </ul>
        </div>
      </div>
      <div class="project-container">
        <div class="img-big">
          <img src="../media/projects/pl-handbook.png">
        </div>
        <div class="img-small-40 small-img-left">
          <img src="../media/projects/pl-handbook-left.png">
        </div>
        <div class="img-small-60 small-img-right">
          <img src="../media/projects/pl-handbook-trophies.png">
        </div>
        <div class="img-small-60">
          <img src="../media/projects/pl-handbook-stats.png">
        </div>
        <div class="img-small-40">
          <img src="../media/projects/pl-handbook-right.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/pl-handbook-teams.png">
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
