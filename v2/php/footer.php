<footer>
  <div class="footer-container">
    <div class="footer-contact">
      <h5>CONTACT</h5>
      <div class="contact-info">
        <p>Stefan Bernkilde</p>
        <p>sbstefanbern@gmail.com</p>
        <p>+45 41 27 85 46</p>
        <p>Based in Odense, Denmark</p>
      </div>
      <div class="footer-btn">
        <a href="#" class="btn" id="contactform-footer">
          <div class="btn-container">
            <div class="btn-front">GET IN TOUCH</div>
            <div class="btn-bottom">GET IN TOUCH</div>
          </div>
        </a>
      </div>
    </div>
    <div class="footer-nav">
      <h5>NAVIGATION</h5>
      <ul>
        <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>" class="<?php if($currentPage == 'home'){echo 'active-footer';}?>">HOME</a></li>
        <hr/>
        <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>portfolio" class="<?php if($currentPage == 'portfolio'){echo 'active-footer';}?>">PORTFOLIO</a></li>
        <hr/>
        <li><a href="<?php if($currentPage !== 'home'){echo '../';}?>about" class="<?php if($currentPage == 'about'){echo 'active-footer';}?>">ABOUT</a></li>
      </ul>
    </div>
    <div class="footer-some">
      <h5>SOCIAL</h5>
      <a class="linkedin" href="https://www.linkedin.com/in/stefan-bernkilde" target="_blank"></a>
      <a class="instagram" href="https://www.instagram.com/bernkilde" target="_blank"></a>
      <a class="footer-sb-logo" href="<?php if($currentPage !== 'home'){echo '../';}?>"></a>
    </div>
  </div>
  <div class="copyright">
    <p>© 2018 Stefan Bernkilde - All rights reserved.</p>
    <p>All product names, logos, and brands not made by me, are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.</p>
  </div>
</footer>
