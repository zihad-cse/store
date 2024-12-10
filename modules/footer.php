<?php
include_once("data/footer-data.php");
?>
<div class="newsletter-container">
    <div class="newsletter">
        <div class="newsletter-inner">
            <div class="newsletter-inner-content">
                <h1>Stay home and buy from our store</h1>
                <h5>Sign up with our newsletter to get emails on sales, offers and more!</h5>
                <form method="post">
                    <i class="fa-regular fa-paper-plane"></i>
                    <input class="newsletter-input" type="text">
                    <button class="newsletter-submit">Subscribe</button>
                </form>
            </div>
            <div class="newsletter-inner-img">
                <img src="img/newsletter-inner-img.png" alt="">
            </div>
        </div>
    </div>
</div>
<footer class="footer-distributed">
    <div class="footer-left">
        <img src="img/logo.png" alt="" width="auto">
        <p class="footer-links">
            <a href="#">Home</a> ·
            <a href="#">About</a> ·
            <a href="#">Faq</a> ·
            <a href="#">Contact</a>
        </p>
        <p class="footer-company-name">Metrosoft &copy; 2024</p>
    </div>
    <div class="footer-center">
        <div>
            <i class="fa fa-map-marker"></i>
            <!-- <p><span>32 Shahjalal Ave, Sector 4</span> Uttara, Dhaka</p> -->
            <span><?php echo $footer_corporateArr['0']->details; ?></span>
        </div>
        <div>
            <i class="fa fa-phone"></i>
            <strong><?php echo $footer_callusArr['0']->heading; ?>: </strong><span><?php echo $footer_callusArr['0']->details; ?></span>
        </div>
        <div>
            <i class="fa fa-envelope"></i>
            <strong><?php echo $footer_emailArr['0']->heading; ?>: </strong><span><?php echo $footer_emailArr['0']->details; ?></span>
        </div>
    </div>
    <div class="footer-right">
        <p class="footer-company-about">
            <span>Contact Us:</span>
        </p>
        <div class="footer-icons">
            <a class="footer_links" href=" <?php echo $footer_socialArr['0']->url; ?>"><img src="img/facebook.svg" alt=""></a>
            <a class="footer_links" href="<?php echo $footer_socialArr['2']->url; ?>"><img src="img/instagram.svg" alt=""></a>
            <a class="footer_links" href="<?php echo $footer_socialArr['4']->url; ?>"><img src="img/youtube.svg" alt=""></a>
            <a class="footer_links" href="<?php echo $footer_socialArr['1']->url; ?>"><img src="img/twitter.svg" alt=""></a>
            <a class="footer_links" href="<?php echo $footer_socialArr['3']->url; ?>"><img src="img/linkedin.svg" alt=""></a>
        </div>
    </div>
</footer>