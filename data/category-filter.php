<?php
include_once('apiendpoint.php');


if ($_GET['check'] == 'categoryFilter') {
    $limit = "All";
    $catID = trim($_GET['categoryId']);
    $url = "product.php?category_id=" . $catID . "&limit=". $limit ."&start=1";

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => APIENDPOINT .  $url,
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

    if($err){
        echo "cURL Error #:". $err;
    } else {
        $categoryProduct = json_decode($response);
        $categoryData = $categoryProduct->data->products;

        // if(isset($categoryData)){
        //     echo json_encode(["items" => $categoryData]);
        // } else {
        //     echo json_encode(["message" => "No Products Found"]);
        // }
        echo json_encode($categoryData);
    }
}
