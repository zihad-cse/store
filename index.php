<?php
include_once('data/apiendpoint.php');

error_reporting(E_ALL);
ini_set('display_errors', 1);
// $curl = curl_init();
// curl_setopt_array($curl, array(
//     CURLOPT_URL => APIENDPOINT . "category.php",
//     CURLOPT_RETURNTRANSFER => true,
//     CURLOPT_ENCODING => "",
//     CURLOPT_MAXREDIRS => 10,
//     CURLOPT_TIMEOUT => 30,
//     CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//     CURLOPT_CUSTOMREQUEST => "GET",
//     CURLOPT_HTTPHEADER => array(
//         "Authorization:" . APIKEY,
//         "cache-control: no-cache"
//     ),
// ));

// $response = curl_exec($curl);
// $err = curl_error($curl);

// curl_close($curl);

// if ($err) {
//     echo "cURL Error #:" . $err;
// } else {
//     $category = json_decode($response);
//     $categoryData = $category->data->category;
//     // echo '<pre>';
//     // print_r($categoryData);
//     // echo '</pre>';
// }

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => APIENDPOINT . "category-find.php",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
        "Authorization:" . APIKEY,
        "cache-control: no-cache"
    ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);
if ($err) {
    echo "cURL Error #:" . $err;
} else {
    $category = json_decode($response);
    $categoryItems = (array) $category->data->menu->items;
    $categoryMenuList = (array) $category->data->menu->parents;
    $categoryMenu = (array) $category->data->menu;
    $menuList = $categoryMenuList[0];

    // echo "<pre>";
    // print_r($categoryMenuList[3]);
    // echo "</pre>";
}

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