<?php

include_once('apiendpoint.php');

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => APIENDPOINT . "product.php?limit=20",
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
    echo '<script type="text/javascript">',
    'curlErrorFunction();',
    '</script>';
} else {
    $productData = json_decode($response);
    $productsArr = $productData->data->products;
    echo json_encode($productsArr);
}
