<header <?php if($currentPage == 'portfolio' || $currentPage == 'about'){echo 'class="dark-grey"';}?>>
  <nav>
    <div class="logo <?php if($currentPage == 'portfolio' || $currentPage == 'about'){echo 'dark-logo';}?>">
      <a href="<?php if($currentPage !== 'home'){echo '../';}?>"></a>
    </div>
    <ul class="menu <?php if($currentPage == 'portfolio' || $currentPage == 'about'){echo 'dark-menu';}?>">
      <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>about" class="<?php if($currentPage == 'about'){echo 'dark-active';}?>">ABOUT ME</a></li>
      <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>portfolio" class="<?php if($currentPage == 'portfolio'){echo 'dark-active';} elseif($currentPage == 'project'){echo 'active';}?>">PORTFOLIO</a></li>
      <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>" class="<?php if($currentPage == 'home'){echo 'active';}?>">HOME</a></li>
    </ul>
    <span class="btn-mobile-menu" onclick="toggleMobileMenu()">
      <a href="#" class="btn-mobile-menu-container <?php if($currentPage == 'portfolio' || $currentPage == 'about'){echo 'dark-mobile-menu';}?>" onclick="buttonAnimation(this)">
        <span class="line1"></span>
        <span class="line2"></span>
        <span class="line3"></span>
      </a>
    </span>
    <div id="mobile-menu" style="margin-right:-200px;">
      <a href="<?php if($currentPage !== 'home'){echo '../';}?>" class="<?php if($currentPage == 'home'){echo 'active-mobile-menu';}?>">HOME</a>
      <a href="<?php if($currentPage !== 'home'){echo '../';}?>portfolio" class="<?php if($currentPage == 'portfolio' || $currentPage == 'project'){echo 'active-mobile-menu';}?>">PORTFOLIO</a>
      <a href="<?php if($currentPage !== 'home'){echo '../';}?>about" class="<?php if($currentPage == 'about'){echo 'active-mobile-menu';}?>">ABOUT ME</a>
    </div>
  </nav>
</header>
