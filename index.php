<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <title>Home</title>
    <style>

    </style>
</head>

<body>
    <section id="top-nav">
        <?php include_once "modules/top-nav.php"; ?>
    </section>
    <section id="main-content">
        <div class="main-content-wrapper">
            <div class="d-none d-sm-none d-lg-block d-md-none">
                <?php include_once "modules/right-sidebar.php"; ?>
            </div>
            <div id="main-content-div" class="main-content">
                <?php include_once "modules/main-content.php"; ?>
            </div>
            <div class="d-none d-sm-none d-lg-block d-md-none">
                <?php include_once "modules/left-sidebar.php"; ?>
            </div>
        </div>
    </section>
        <footer id="footer" class="footer">
            <div class="footer__addr">
                <img src="img/logo.png" class="footer__logo" alt="">
                <h2>Contact</h2>
                <address>
                    5534 Somewhere In. The World 22193-10212<br>

                    <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                </address>
            </div>

            <ul class="footer__nav">
                <li class="nav__item">
                    <h2 class="nav__title">Media</h2>

                    <ul class="nav__ul">
                        <li>
                            <a href="#">Online</a>
                        </li>

                        <li>
                            <a href="#">Print</a>
                        </li>

                        <li>
                            <a href="#">Alternative Ads</a>
                        </li>
                    </ul>
                </li>

                <li class="nav__item nav__item--extra">
                    <h2 class="nav__title">Technology</h2>

                    <ul class="nav__ul nav__ul--extra">
                        <li>
                            <a href="#">Hardware Design</a>
                        </li>

                        <li>
                            <a href="#">Software Design</a>
                        </li>

                        <li>
                            <a href="#">Digital Signage</a>
                        </li>

                        <li>
                            <a href="#">Automation</a>
                        </li>

                        <li>
                            <a href="#">Artificial Intelligence</a>
                        </li>

                        <li>
                            <a href="#">IoT</a>
                        </li>
                    </ul>
                </li>

                <li class="nav__item">
                    <h2 class="nav__title">Legal</h2>
                    <ul class="nav__ul">
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="#">Terms of Use</a>
                        </li>

                        <li>
                            <a href="#">Sitemap</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="legal">
                <p>&copy; 2024. All rights reserved.</p>
            </div>
        </footer>
    <script src="js/index.js"></script>
</body>

</html>