<header <?php if($currentPage == 'portfolio' || $currentPage == 'about'){echo 'class="dark-grey"';}?>>
  <nav>
    <div class="logo <?php if($currentPage == 'portfolio' || $currentPage == 'about'){echo 'dark-logo';}?>">
      <a href="<?php if($currentPage !== 'home'){echo '../';}?>"></a>
    </div>
    <ul class="menu <?php if($currentPage == 'portfolio' || $currentPage == 'about'){echo 'dark-menu';}?>">
      <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>about" class="<?php if($currentPage == 'about'){echo 'dark-active';}?>">ABOUT</a></li>
      <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>portfolio" class="<?php if($currentPage == 'portfolio'){echo 'dark-active';} elseif($currentPage == 'project'){echo 'active';}?>">PORTFOLIO</a></li>
      <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>" class="<?php if($currentPage == 'home'){echo 'active';}?>">HOME</a></li>
    </ul>
  </nav>
</header>
