<header <?php if($currentPage !== 'home'){echo 'class="dark-grey"';}?>>
  <nav>
    <div class="logo">
      <a href="<?php if($currentPage !== 'home'){echo '../';}?>"></a>
    </div>
    <ul class="menu">
      <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>about" class="<?php if($currentPage == 'about'){echo 'active';}?>">ABOUT</a></li>
      <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>portfolio" class="<?php if($currentPage == 'portfolio'){echo 'active';}?>">PORTFOLIO</a></li>
      <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>" class="<?php if($currentPage == 'home'){echo 'active';}?>">HOME</a></li>
    </ul>
  </nav>
</header>
