<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stefan Bernkilde - HC Odense</title>
    <meta name="description" content="">
    <link type="text/css" rel="stylesheet" href="../css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <link rel="shortcut icon" href="../favicon.ico">
  </head>
  <body>
    <main class="eb-livescore">
      <?php
        $currentPage = 'project';
        include ('../php/header.php');
      ?>
      <section class="project-banner">
        <h1>Ekstra Bladet Livescore</h1>
        <h3>Ekstra Bladets livescore web interface</h3>
        <div class="project-logo"></div>
      </section>
      <section class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>Ekstra Bladet lacked a proper streamlined livescore interface on their website. I was tasked with sketching out ideas for how this should look as well as produce a high fidelity design mockup, including complete layout of all pages and all graphical elements.</p>
          <a class="process-link" href="https://ekstrabladet.dk/sport/kampe/" target="_blank">See Ekstra Bladet livescore here</a>
        </div>
        <div class="info-right">
          <h4>CLIENT</h4>
          <p>Ekstra Bladet</p>
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Full livescore webdesign</li>
          </ul>
        </div>
      </section>
      <section id="eb-livescore" class="projects">
        <div class="projectpage-grid">
          <div class="full-big"></div>
          <div class="eight-normal"></div>
          <div class="four-normal"></div>
          <div class="full-tiny"></div>
          <div class="half-normal"></div>
          <div class="half-normal"></div>
          <div class="full-tiny"></div>
          <div class="full-big"></div>
        </div>
      </section>
      <?php include ('../php/footer.php'); ?>
    </main>
    <script src="../js/javascript.js"></script>
  </body>
</html>
