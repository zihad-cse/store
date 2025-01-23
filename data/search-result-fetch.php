<?php 
include_once('apiendpoint.php');
if(isset($_GET['query'])){
    $queryTerm = $_GET['query'];
    if (isset($_GET["category"])){
        $categoryFilter = $_GET["category"];
        $url = "product.php?product_name=". urlencode($queryTerm) . "&category=" . $categoryFilter;
    } else {
        $url = "product.php?product_name=". urlencode($queryTerm);
    }
    $curl = curl_init();
    
    curl_setopt_array($curl, array(
        CURLOPT_URL => APIENDPOINT . $url,
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
        $result = json_decode($response);
        $searchData = $result->data->products ?? [];
        $totalProduct = $result->data->rows_returned;
        echo json_encode($searchData);
    }
} else {
    echo json_encode([]);
}