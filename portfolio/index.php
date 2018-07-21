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
    <main>
      <header id="banner" class="portfolio" aria-label="Portfolio folder">
        <?php
          $currentPage = 'portfolio';
          include ('../php/header.php');
        ?>
        <div class="banner-overlay">
          <h1>
            <div class="mainword red">Explore</div>
            <div class="mainsentence"><span> my projects</span></div>
          </h1>
          <div class="content">
            <div class="content__container">
              <p class="content__container__text">Delve into my wide array of projects</p>
            </div>
          </div>
          <a href="../ring-til-fortiden" class="btn-red about-banner-btn">View my latest project</a>
        </div>
      </header>
      <section id="portfolio-content">
        <div id="tags">
          <button class="tag-btn active-tag" onclick="filterSelection('all')"> ALL</button>
          <button class="tag-btn" onclick="filterSelection('webdesign')"> WEBDESIGN</button>
          <button class="tag-btn" onclick="filterSelection('video')"> VIDEO</button>
          <button class="tag-btn" onclick="filterSelection('animation')"> ANIMATION</button>
          <button class="tag-btn" onclick="filterSelection('graphics')"> GRAPHICS</button>
          <button class="tag-btn" onclick="filterSelection('image')"> IMAGE</button>
        </div>
        <div class="gallery-images">
          <div class="filter video animation graphics">
            <a href="../ring-til-fortiden">
              <img src="../media/ring-til-fortiden.png" srcset="../media/ring-til-fortiden-small.png 420w, ../media/ring-til-fortiden-medium.png 680w, ../media/ring-til-fortiden.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Ring til Fortiden">
              <p class="text-overlay">Ring til Fortiden</p>
            </a>
          </div>
          <div class="filter graphics image">
            <a href="../hc-odense">
              <img src="../media/hc-odense.png" srcset="../media/hc-odense-small.png 420w, ../media/hc-odense-medium.png 680w, ../media/hc-odense.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="HC Odense">
              <p class="text-overlay">HC Odense</p>
            </a>
          </div>
          <div class="filter graphics">
            <a href="../faster-eft">
              <img src="../media/faster-eft.png" srcset="../media/faster-eft-small.png 420w, ../media/faster-eft-medium.png 680w, ../media/faster-eft.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Faster EFT">
              <p class="text-overlay">Faster EFT</p>
            </a>
          </div>
          <div class="filter graphics">
            <a href="../dagslys">
              <img src="../media/dagslys.png" srcset="../media/dagslys-small.png 420w, ../media/dagslys-medium.png 680w, ../media/dagslys.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Dagslys">
              <p class="text-overlay">Dagslys</p>
            </a>
          </div>
          <div class="filter graphics">
            <a href="../fri-bike-shop">
              <img src="../media/fri-bike-shop.png" srcset="../media/fri-bike-shop-small.png 420w, ../media/fri-bike-shop-medium.png 680w, ../media/fri-bike-shop.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Fri Bike Shop">
              <p class="text-overlay">Fri Bike Shop</p>
            </a>
          </div>
          <div class="filter graphics">
            <a href="../korup-motion">
              <img src="../media/korup-motion.png" srcset="../media/korup-motion-small.png 420w, ../media/korup-motion-medium.png 680w, ../media/korup-motion.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Korup Motion">
              <p class="text-overlay">Korup Motion</p>
            </a>
          </div>
          <div class="filter graphics">
            <a href="../circle-k">
              <img src="../media/circle-k-oil.png" srcset="../media/circle-k-oil-small.png 420w, ../media/circle-k-oil-medium.png 680w, ../media/circle-k-oil.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Circle K Native Ad">
              <p class="text-overlay">Circle K Native Ad</p>
            </a>
          </div>
          <div class="filter graphics image">
            <a href="../safari-park-banner">
              <img src="../media/giant-lion.png" srcset="../media/giant-lion-small.png 420w, ../media/giant-lion-medium.png 680w, ../media/giant-lion.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Safari Park Banner">
              <p class="text-overlay">Safari Park Banner</p>
            </a>
          </div>
          <div class="filter graphics">
            <a href="../pl-handbook">
              <img src="../media/pl-handbook.png" srcset="../media/pl-handbook-small.png 420w, ../media/pl-handbook-medium.png 680w, ../media/pl-handbook.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Premier League Handbook">
              <p class="text-overlay">Premier League Handbook</p>
            </a>
          </div>
          <div class="filter animation graphics">
            <a href="../league-animation">
              <img src="../media/league-animation.png" srcset="../media/league-animation-small.png 420w, ../media/league-animation-medium.png 680w, ../media/league-animation.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="League Animation">
              <p class="text-overlay">League Animation</p>
            </a>
          </div>
          <div class="filter webdesign video animation graphics">
            <a href="../technigo">
              <img src="../media/technigo.png" srcset="../media/technigo-small.png 420w, ../media/technigo-medium.png 680w, ../media/technigo.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="TechniGO Campaign">
              <p class="text-overlay">TechniGO Campaign</p>
            </a>
          </div>
          <div class="filter webdesign graphics">
            <a href="../kedu">
              <img src="../media/kedu.png" srcset="../media/kedu-small.png 420w, ../media/kedu-medium.png 680w, ../media/kedu.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="KEDU (KUBO Education)">
              <p class="text-overlay">KEDU (KUBO Education)</p>
            </a>
          </div>
          <div class="filter webdesign graphics">
            <a href="../billum-friskole">
              <img src="../media/billum-friskole.png" srcset="../media/billum-friskole-small.png 420w, ../media/billum-friskole-medium.png 680w, ../media/billum-friskole.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Billum Friskole">
              <p class="text-overlay">Billum Friskole</p>
            </a>
          </div>
          <div class="filter animation graphics">
            <a href="../munkebo-mikrobryg">
              <img src="../media/munkebo-mikrobryg.png" srcset="../media/munkebo-mikrobryg-small.png 420w, ../media/munkebo-mikrobryg-medium.png 680w, ../media/munkebo-mikrobryg.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Munkebo Mikrobryg">
              <p class="text-overlay">Munkebo Mikrobryg</p>
            </a>
          </div>
          <div class="filter webdesign video">
            <a href="../a-stone">
              <img src="../media/a-stone.png" srcset="../media/a-stone-small.png 420w, ../media/a-stone-medium.png 680w, ../media/a-stone.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="A-Stone Campaign">
              <p class="text-overlay">A-Stone Campaign</p>
            </a>
          </div>
          <div class="filter graphics image">
            <a href="../piphest">
              <img src="../media/piphest.png" srcset="../media/piphest-small.png 420w, ../media/piphest-medium.png 680w, ../media/piphest.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Piphest">
              <p class="text-overlay">Piphest</p>
            </a>
          </div>
          <div class="filter graphics">
            <a href="../football-infographics">
              <img src="../media/football-infographics.png" srcset="../media/football-infographics-small.png 420w, ../media/football-infographics-medium.png 680w, ../media/football-infographics.png 960w"
                sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Football Infographics">
              <p class="text-overlay">Football Infographics</p>
            </a>
          </div>
        </div>
        <img class="footer-shape" src="../media/footer-shape.png" srcset="../media/footer-shape-small.png 828w, ../media/footer-shape-medium.png 2048w, ../media/footer-shape.png 2880w"
          sizes="(max-width: 699px) 828px, (min-width: 700px) and (max-width: 1249px) 2028px, (min-width: 1250px) 2880px" alt="Footer swirl shape">
      </section>
    </main>
    <footer>
      <?php include ('../php/footer.php'); ?>
    </footer>
    <script src="../js/javascript.js"></script>
    <script>
      filterSelection("all")
      function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filter");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
          w3RemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
      }

      function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
      }

      function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
        }
        element.className = arr1.join(" ");
      }

      /* Add active class to the current button (highlight it) */
      var btnContainer = document.getElementById("tags");
      var btns = btnContainer.getElementsByClassName("tag-btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
          var current = document.getElementsByClassName("active-tag");
          current[0].className = current[0].className.replace(" active-tag", "");
          this.className += " active-tag";
        });
      }
    </script>
  </body>
</html>
