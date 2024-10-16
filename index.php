<?php
error_reporting(E_ALL);
// include_once('data/datafetch.php');
include_once('data/curlTesting.php');


// (
//     [stockid] => 1
//     [description] => USB Cable A to B
//     [category_id] => 19
//     [category] => Cable
//     [longdescription] =>                     <div class="content-section">
//                         <p></p><p style="text-align: justify;"><span style="font-family: verdana,geneva; font-size: small;">This is a standard issue USB 2.0 cable. This is the most common A to B  Male/Male type peripheral cable, the kind that\'s usually used for  printers.<br></span></p>
// </div><div class="content-section">
//                         <p></p><p><span style="font-family: verdana, geneva; font-size: small;">Length : 1.5M</span></p><p><span style="font-family: verdana, geneva; font-size: small; font-weight: bold;"><br></span></p><p><span style="font-family: verdana, geneva; font-size: small; font-weight: bold;">Note: This item's color/ appearance may differ.<br></span></p><p></p>
//                     </div>
                
//     [units] => pc
//     [discountcategory] => 
//     [taxcatid] => 5
//     [webprice] => 250
//     [img] => https://daccastore.erp.place/erp/companies/daccastore/part_pics/1.jpeg
//     [multipleImg] => Array
//         (
//         )

//     [oldPrice] => 
//     [product_status] => 1
// )

?>

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
                <?php include_once "modules/banner-carousel.php"; ?>
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
    <script src="js/index.js"></script>

</body>

</html>