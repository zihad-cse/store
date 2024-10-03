<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/fontawesome-free-6.6.0-web/css/all.min.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="shortcut icon" href="assets/ds_favicon/favicon.ico" type="image/x-icon">
    <title>Daccastore</title>
    <script src="assets/jquery-3.6.0.min.js"></script>
    <script src="js/data.js"></script>
    <style>
        .homepage-carousel-items {
            overflow: hidden;
            flex-wrap: nowrap;
        }

        .homepage-carousel-item {
            position: relative;
            min-width: 100%;
            height: 360px;
            transition: all 0.5s linear;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
        }

        .carousel-text {
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translate(-50%);
            padding: 0.5rem 1rem;
            border-radius: 3px;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            text-shadow: 1px 1px black;
            font: bolder;
        }

        .item_1 {
            background-color: red;
        }

        .item_2 {
            background-color: green;
        }

        .item_3 {
            background-color: orange;
        }

        .item_4 {
            background-color: purple;
        }
    </style>
</head>

<body style="overflow-x: hidden;">
    <!-- Top Nav Starts Here -->
    <section id="top-nav">
        <?php include_once "modules/top-nav.php"; ?>
    </section>
    <!-- Top Nav Ends Here -->
    <!-- Login / Register Form Starts Here -->
    <section id="login-register-form">
        <?php include_once "modules/login-reg-modal.php"; ?>
    </section>
    <!-- Login / Register Form Ends Here -->
    <section id="main-content">
        <div class="main-content-div">
            <!-- Right Sidebar Starts Here -->
            <div class="right-sidebar-container">
                <?php include_once "modules/right-sidebar.php"; ?>
            </div>
            <!-- Right Sidebar Ends Here -->
            <!-- Main Content Section Starts Here -->

            <div id="main-content-div" class="main-content">

                <div id="homePageBanner" class="" style="height: 380px; background-color:white; margin: 0px 350px 10px 350px">
                    <div class="homepage-carousel-container">
                        <div class="homepage-carousel-items d-flex">
                            <div class="homepage-carousel-item item_1">
                                <p class="carousel-text">Item 1</p>
                            </div>
                            <div class="homepage-carousel-item item_2">
                                <p class="carousel-text">Item 2</p>
                            </div>
                            <div class="homepage-carousel-item item_3">
                                <p class="carousel-text">Item 3</p>
                            </div>
                            <div class="homepage-carousel-item item_4">
                                <p class="carousel-text">Item 4</p>
                            </div>
                        </div>
                    </div>
                </div>
                <?php include_once "modules/main-content.php"; ?>
            </div>
            <!-- Main Content Section Ends Here -->
            <!-- Left Sidebar Starts Here -->
            <div class="left-sidebar-div">
                <?php include_once "modules/left-sidebar.php"; ?>
            </div>
            <!-- Left Sidebar Ends Here -->
        </div>
    </section>
    <!-- Footer Starts Here -->
    <footer id="footer" class="footer">
        <?php include_once "modules/footer.php"; ?>
    </footer>
    <!-- Footer Ends Here -->
    <script>
        const carouselItems = document.querySelectorAll(".homepage-carousel-item");
        var currentItem = 0;

        setInterval(() => {
            carouselItems.forEach((item, index) => {
                item.style.transform = `translateX(-${currentItem * 100}%)`;
            });
            currentItem = (currentItem + 1) % carouselItems.length;
        }, 2000);
    </script>
    <script src="js/index.js"></script>

</body>

</html>