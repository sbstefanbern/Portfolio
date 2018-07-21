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
    <main class="kedu">
      <header id="banner" aria-label="Portfolio folder">
        <?php
          $currentPage = 'portfolio';
          include ('../php/header.php');
        ?>
        <div class="banner-overlay">
          <h1 class="project-head">KEDU (KUBO Education)</h1>
          <p class="project-subhead">Educational community for teachers around the world using the KUBO robot</p>
        </div>
        <div class="client-logo">
          <img src="../media/projects/kedu-logo.png">
        </div>
      </header>
      <div class="project-info">
        <div class="info-left">
          <h4>ABOUT THE PROJECT</h4>
          <p>KEDU is the educational community site for teachers using, or looking to start using the KUBO robot as part of their education in elementary school. The people behind KUBO wanted a total overhaul of their KEDU platform. Their target was to engage the users more in the site, and to make it more attractable to be an active member of. Some of the features implemented to accomplish this, was the ability to create and upload lesson plans, the ability to upvote lesson plans that you like so that they'd be more visible to others, and a forum with dedicated subforums, to share ideas, learn, discuss lesson plans, and more. A design for a mobile app was also created. This project was made as a school project. It was not used outside this setting.</p>
        </div>
        <div class="info-right">
          <h4>DELIVERABLES</h4>
          <ul>
            <li>Website</li>
            <li>Design for Mobile App</li>
          </ul>
        </div>
      </div>
      <div class="project-container">
        <div class="img-big">
          <img src="../media/projects/kedu-website.png">
        </div>
        <div class="img-small-50">
          <img src="../media/projects/kedu-website2.png">
        </div>
        <div class="img-small-50 no-margin">
          <img src="../media/projects/kedu-website3.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/kedu-app.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/kedu-website4.png">
        </div>
        <div class="img-small-50">
          <img src="../media/projects/kedu-website5.png">
        </div>
        <div class="img-small-50 no-margin">
          <img src="../media/projects/kedu-website6.png">
        </div>
        <div class="img-big">
          <img src="../media/projects/kedu-website7.png">
        </div>
        <div class="img-small-50">
          <img src="../media/projects/kedu-website8.png">
        </div>
        <div class="img-small-50 no-margin">
          <img src="../media/projects/kedu-website9.png">
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
