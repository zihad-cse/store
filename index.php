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
        


    </style>
</head>

<body style="overflow-x: hidden;">
    <section id="top-nav">
        <?php include_once "modules/top-nav.php"; ?>
    </section>
    <section id="login-register-form">
        <div id="loginRegModal" class="login-register-form-wrapper">
            <div class="login-register-form-container">
                <div class="login-register-form-inner-container">
                    <div style="display:flex; flex-direction:row-reverse" class="login-form-header">
                        <div style="width: fit-content;" id='modalDismiss' class="modal-dismiss-btn">
                            <img src="img/remove-button.svg" alt="">
                        </div>
                    </div>
                    <div class="dark-content-divider"></div>
                    <div class="main-content-wrapper">
                        <div id="formIllustWrapper" style="justify-content:center; align-items:center; padding:20px;">
                            <img class="form-illust" src="assets/freepik_assets/login-concept-illustration/3094352.jpg" alt="">
                        </div>
                        <div class="login-form-main-content d-none">
                            <h2>Login</h2>
                            <div>
                                <form class="d-flex flex-column" action="">
                                    <label class="mt-2 mb-2" for="phnNumber">Phone Number</label>
                                    <input id="phnNumber" class="form-input-text mt-2 mb-2" type="text">
                                    <button class="btn-primary mt-2 mb-2">Send Code</button>
                                </form>
                            </div>
                            <div class="page-switch-wrap">
                                <p>No account? </p>
                                <p><img src="img/right-arrow.svg" alt=""></p>
                                <p class="login-page-switch-btn">[ Click Here ]</p>
                            </div>
                        </div>
                        <div class="registration-form-main-content d-flex">
                            <h2>Register</h2>
                            <div>
                                <form class="d-flex flex-column" action="">
                                    <label class="mt-2 mb-2" for="regName">Name</label>
                                    <input id="regName" class="form-input-text mt-2 mb-2" type="text">
                                    <label class="mt-2 mb-2" for="regNumber">Phone Number</label>
                                    <input id="regNumber" class="form-input-text mt-2 mb-2" type="text">
                                    <button class="btn-primary mt-2 mb-2">Register</button>
                                </form>
                            </div>
                            <div class="page-switch-wrap">
                                <p>Have an Account? </p>
                                <p><img src="img/right-arrow.svg" alt=""></p>
                                <p class="reg-page-switch-btn">[ Click Here ]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="main-content">
        <div class="main-content-div">
            <div class="right-sidebar-container">
                <?php include_once "modules/right-sidebar.php"; ?>
            </div>
            <div id="main-content-div" class="main-content">
                <?php include_once "modules/main-content.php"; ?>
            </div>
            <div class="left-sidebar-div">
                <?php include_once "modules/left-sidebar.php"; ?>
            </div>
        </div>
    </section>
    <footer id="footer" class="footer">
        <?php include_once "modules/footer.php"; ?>
    </footer>
    <script src="js/index.js"></script>
</body>

</html>