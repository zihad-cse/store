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
        <div class="top-nav-wrapper">
            <div class="top-nav-container">
                <div class="top-nav-content-wrapper">
                    <div class="burger">
                        <a class="left-sidebar-burger" id="left-sidebar-burger" href="javascript:void(0)" onclick="closeNav()">
                            <img src="img/burger.svg" alt="">
                        </a>
                    </div>
                    <div class="logo-wrapper">
                        <img class="logo" src="img/logo.png" alt="">
                    </div>
                </div>
                <div class="logo-wrapper-mobile">
                        <img class="logo" src="img/logo.png" alt="">
                    </div>
                <div class="top-nav-search">
                    <div class="search-wrapper">
                        <form class="search-bar-1" method="post" action="">
                            <input class="search-bar-input" type="text" placeholder="Search for items">
                            <span>
                                <img src="img/search.svg" alt="">
                            </span>
                        </form>
                    </div>
                </div>
                <div class="account-actions">
                    <div class="cart-wrapper">
                        <div class="cart-svg">
                            <img src="img/cart.svg" alt="">
                            <span class="cart-label">Cart</span>
                        </div>
                    </div>
                    <div class="account-wrapper">
                        <div class="acc-svg">
                            <img src="img/account.svg" alt="">
                            <span>Account</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top-nav-search-mobile">
                <div class="search-wrapper-mobile">
                    <form class="search-bar-2" method="post" action="">
                        <input class="search-bar-input" type="text" placeholder="Search for items">
                        <span>
                            <img src="img/search.svg" alt="">
                        </span>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section id="main-content">
        <div class="main-content-wrapper">
            <div class="d-none d-sm-none d-lg-block d-md-none">
                <?php include_once "modules/right-sidebar.php"; ?>
            </div>
            <div id="main-content-div" class="main-content">
                <?php include_once "modules/main-content.php" ?>
            </div>
            <div class="d-none d-sm-none d-lg-block d-md-none">
                <?php include_once "modules/left-sidebar.php"; ?>
            </div>
        </div>
    </section>
    <script src="js/index.js"></script>
    <script>

    </script>
</body>

</html>