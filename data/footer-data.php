<?php
include_once('apiendpoint.php');
// Footer Data Request

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => APIENDPOINT . "ecom_config.php",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_POSTFIELDS => "",
    CURLOPT_HTTPHEADER => array(
        "Authorization: " . APIKEY,
        "cache-control: no-cache",
        "content-type: application/json"
    ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if($err){
    echo "cURL Error #:". $err;
} else {
    $ecomConfig = json_decode($response);
    $ecomConfigData = $ecomConfig->data->congifInfo;
}

$emailSectionData = array();
$footer_corporateArr = array();
$sortDescComArr = array();
$footer_factoryArr = array();
$footer_callusArr = array();
$footer_hoursArr = array();
$footer_emailArr = array();

foreach ($ecomConfigData as $configKey => $configValue) {
    if ($ecomConfigData[$configKey] ->type == 'email_section') {
        array_push($emailSectionData, $ecomConfigData[$configKey]);
    }
    if ($ecomConfigData[$configKey] ->type == 'footer_corporate') {
        array_push($footer_corporateArr, $ecomConfigData[$configKey]);
    }
    if ($ecomConfigData[$configKey] ->type == 'ecom_description') {
        array_push($sortDescComArr, $ecomConfigData[$configKey]);
    }
    if ($ecomConfigData[$configKey] ->type == 'footer_factory') {
        array_push($footer_factoryArr, $ecomConfigData[$configKey]);
    }
    if ($ecomConfigData[$configKey]->type == 'footer_callus') {
        array_push($footer_callusArr, $ecomConfigData[$configKey]);
    }
    if ($ecomConfigData[$configKey]->type == 'footer_hours') {
        array_push($footer_hoursArr, $ecomConfigData[$configKey]);
    }
    if ($ecomConfigData[$configKey]->type == 'footer_email') {
        array_push($footer_emailArr, $ecomConfigData[$configKey]);
    }
}   


// Social Media Links

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => APIENDPOINT . "ecom_config.php?config_type=social_media",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_POSTFIELDS => "",
    CURLOPT_HTTPHEADER => array(
        "Authorization: " . APIKEY,
        "cache-control: no-cache",
        "content-type: application/json"
    ),
));
$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    $footer_social = json_decode($response);
    $footer_socialArr = $footer_social->data->congifInfo;
}

?>