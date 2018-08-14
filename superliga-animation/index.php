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
    <main class="superliga-animation">
      <?php
        $currentPage = 'project';
        include ('../php/header.php');
      ?>
      <section class="project-banner">
        <h1>Superliga Animation</h1>
        <h3>Animation created to visualise the new danish football league system</h3>
        <div class="project-logo"></div>
      </section>
      <section class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>The introduction of the new league system caused a lot of confusion amongst even the most dedicated danish football fans. The general viewer was left confused as to how this system worked, and this is what this animation aims to clear up. Ekstra Bladet wanted to make a quick an easy visualisation to get the average football fan an understanding of the new system. I was tasked with this project and ended up producing a simple step-by-step video where each team is represented by a dot, and there's a round counter always present at the top of the screen, to help clear up the order in which things happen.</p>
        </div>
        <div class="info-right">
          <h4>CLIENT</h4>
          <p>Ekstra Bladet</p>
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Graphics for Animation</li>
            <li>Full Animation</li>
          </ul>
        </div>
      </section>
      <section id="superliga-animation" class="projects">
        <div class="projectpage-grid">
          <div class="full-big">
            <iframe src="https://www.youtube.com/embed/dcParwYRTjg?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
          </div>
          <div class="eight-normal"></div>
          <div class="four-normal"></div>
          <div class="full-tiny"></div>
        </div>
      </section>
      <?php include ('../php/footer.php'); ?>
    </main>
    <script src="../js/javascript.js"></script>
  </body>
</html>
