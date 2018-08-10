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
    <main class="hc-odense">
      <?php
        $currentPage = 'project';
        include ('../php/header.php');
      ?>
      <section class="project-banner">
        <h1>HC Odense</h1>
        <h3>Biggest handball club in Odense</h3>
        <div class="project-logo"></div>
      </section>
      <section class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>HC Odense is a handball club with both male and female teams. I was in contact with a representative from the club who needed an update to make their match day programmes more exciting. After this was successfully accomplished I kept in touch with the club and was asked to produce several more graphic material for them in the same style.</p>
        </div>
        <div class="info-right">
          <h4>CLIENT</h4>
          <p>HC Odense</p>
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Posters</li>
            <li>Sales Brochures</li>
            <li>Match Day Programme Covers</li>
          </ul>
        </div>
      </section>
      <section id="hc-odense" class="projects">
        <div class="projectpage-grid">
          <div class="full-big"></div>
          <div class="full-tiny"></div>
          <div class="eight-normal"></div>
          <div class="four-normal"></div>
          <div class="full-big"></div>
        </div>
      </section>
      <?php include ('../php/footer.php'); ?>
    </main>
    <script src="../js/javascript.js"></script>
  </body>
</html>
