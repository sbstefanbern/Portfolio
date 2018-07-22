<nav>
  <a href="<?php if($currentPage !== 'home'){echo '../';}?>" class="nav-logo"><img src="<?php if($currentPage !== 'home'){echo '../';}?>media/sb-logo.svg" alt="Stefan Bernkilde logo"></a>
  <span class="btn-mobile-menu" onclick="toggleMobileMenu()">
    <a href="#" class="btn-mobile-menu-container" onclick="buttonAnimation(this)">
      <span class="line1"></span>
      <span class="line2"></span>
      <span class="line3"></span>
    </a>
  </span>
  <ul class="navbar">
    <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>about" class="no-border <?php if($currentPage == 'about'){echo 'red';}?>">ABOUT</a></li>
    <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>portfolio" class="<?php if($currentPage == 'portfolio'){echo 'red';}?>">PORTFOLIO</a></li>
    <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>" class="<?php if($currentPage == 'home'){echo 'red';}?>">HOME</a></li>
  </ul>
  <div id="mobile-menu" style="margin-right:-200px;">
    <a href="<?php if($currentPage !== 'home'){echo '../';}?>" class="<?php if($currentPage == 'home'){echo 'red';}?>">HOME</a>
    <a href="<?php if($currentPage !== 'home'){echo '../';}?>portfolio" class="<?php if($currentPage == 'portfolio'){echo 'red';}?>">PORTFOLIO</a>
    <a href="<?php if($currentPage !== 'home'){echo '../';}?>about" class="<?php if($currentPage == 'about'){echo 'red';}?>">ABOUT</a>
  </div>
</nav>
