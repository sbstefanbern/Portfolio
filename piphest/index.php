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
    <main class="piphest">
      <header id="banner" aria-label="Portfolio folder">
        <?php
          $currentPage = 'portfolio';
          include ('../php/header.php');
        ?>
        <div class="banner-overlay">
          <h1 class="project-head">Piphest</h1>
          <p class="project-subhead">Massage company that offers both a varierty of different massages and education in the field</p>
        </div>
        <div class="client-logo">
          <img src="../media/projects/piphest-logo.png">
        </div>
      </header>
      <div class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>'Piphest' is a massage company located in Jutland, Denmark. They need a visual overhaul to all their promotional material. They have a lot of printed material which they wished streamlined with a visual identity across the board. To symbolize the peace and harmony you get from a massage, generally round shapes and graphics were used as well as making use of a lot of white space. All of this was made as a school project. It was not used outside this setting.</p>
        </div>
        <div class="info-right">
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Trifold</li>
            <li>Poster</li>
            <li>Business Cards</li>
            <li>Discount Cards</li>
            <li>Appointment Cards</li>
            <li>Gift Cards</li>
            <li>Logo</li>
            <li>Loyalty Cards</li>
            <li>Pricelists</li>
          </ul>
        </div>
      </div>
      <div class="project-container">
        <div class="img-big">
          <img src="../media/projects/piphest-trifold.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/piphest-business-cards.png">
        </div>
        <div class="img-small-40 small-img-left">
          <img src="../media/projects/piphest-logo2.png">
        </div>
        <div class="img-small-60 small-img-right">
          <img src="../media/projects/piphest-giftcard.png">
        </div>
        <div class="img-small-60">
          <img src="../media/projects/piphest-appointment-card.png">
        </div>
        <div class="img-small-40">
          <img src="../media/projects/piphest-discount-card.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/piphest-poster.png">
        </div>
        <div class="img-small-40 small-img-left">
          <img src="../media/projects/piphest-loyalty-card.png">
        </div>
        <div class="img-small-60 small-img-right">
          <img src="../media/projects/piphest-pricelist.png">
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
