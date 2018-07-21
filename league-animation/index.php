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
    <main class="league-animation">
      <header id="banner" aria-label="Portfolio folder">
        <?php
          $currentPage = 'portfolio';
          include ('../php/header.php');
        ?>
        <div class="banner-overlay">
          <h1 class="project-head">League Animation</h1>
          <p class="project-subhead">Animation created to visualise the new danish football league system</p>
        </div>
        <div class="client-logo">
          <img src="../media/projects/league-animation-logo.png">
        </div>
      </header>
      <div class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>The introduction of the new league system caused a lot of confusion amongst even the most dedicated danish football fans. The general viewer was left confused as to how this system worked, and this is what this animation aims to clear up. Ekstra Bladet wanted to make a quick an easy visualisation to get the average football fan an understanding of the new system. I was tasked with this project and ended up producing a simple step-by-step video where each team is represented by a dot, and there's a round counter always present at the top of the screen, to help clear up the order in which things happen.</p>
          <a href="https://ekstrabladet.dk/sport/fodbold/dansk_fodbold/superligaen/jeg-forstod-ikke-den-nye-superliga-struktur-men-saa-ringede-jeg-til-peter/6185840" target="_blank">Click here to watch the published version of the animation on ekstrabladet.dk</a>
        </div>
        <div class="info-right">
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Graphics for animation</li>
            <li>Full animation</li>
          </ul>
        </div>
      </div>
      <div class="project-container">
        <div class="img-big">
          <iframe src="https://www.youtube.com/embed/dcParwYRTjg?rel=0&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div class="img-small-60">
          <img src="../media/projects/league-animation-graphic.png">
        </div>
        <div class="img-small-40">
          <img src="../media/projects/league-animation-phone.png">
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
