<?php 

include_once('apiendpoint.php');

//Search Result Calling test.

// $exampleSearch = "Cable";
// $url = "product.php?product_name=". urlencode($exampleSearch);
// $curl = curl_init();

// curl_setopt_array($curl, array(
//     CURLOPT_URL => APIENDPOINT . $url,
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

// if($err){
//     echo "cURL Error #:". $err;
// } else {
//     $result = json_decode($response);
//     $searchData = $result->data->products;
//     echo "<pre>";
//     print_r($searchData);
//     echo "</pre>";
//     $totalProduct = $result->data->rows_returned;
// }

// Category calling test.

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

// if($err){
//     echo "cURL Error #: " . $err;
// } else {
//     $category = json_decode($response);
//     $categoryItemData = $category->data->category;
//     echo "<pre>";
//     print_r($categoryItemData);
//     echo "</pre>";
// }

