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
    <main class="football-infographics">
      <header id="banner" aria-label="Portfolio folder">
        <?php
          $currentPage = 'portfolio';
          include ('../php/header.php');
        ?>
        <div class="banner-overlay">
          <h1 class="project-head">Football Infographics</h1>
          <p class="project-subhead">Displaying a lot of information about the biggest football leagues in the world</p>
        </div>
        <div class="client-logo">
          <img src="../media/projects/football-infographics-logo.png">
        </div>
      </header>
      <div class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>Infographics showing a wide range off information including all time top scorers, assists, titles and a lot of other information for the football fans. All information is arranged in an easy to consume way, using a lot of graphics and colors that match the country of the league. All of this was made as a freetime project. It was not used outside this setting.</p>
        </div>
        <div class="info-right">
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Champions League Infographic</li>
            <li>Premier League Infographic</li>
            <li>La Liga Infographic</li>
            <li>Serie A Infographic</li>
            <li>Bundesliga Infographic</li>
            <li>Ligue 1 Infographic</li>
            <li>Eredivisie Infographic</li>
          </ul>
        </div>
      </div>
      <div class="project-container">
        <div class="img-big">
          <img src="../media/projects/football-infographics-champions-league.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/football-infographics-premier-league.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/football-infographics-la-liga.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/football-infographics-serie-a.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/football-infographics-bundesliga.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/football-infographics-ligue-1.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/football-infographics-eredivisie.png">
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
