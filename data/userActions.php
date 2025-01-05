<?php
include_once("apiendpoint.php");

if ($_POST['check'] == "userPhoneNumberSend"){
    $phoneNumber = trim($_POST['phnNumber']);
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => APIENDPOINT . "sms.php",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "{\n\t\"phone\": \"$phoneNumber\"\n}",
        CURLOPT_HTTPHEADER => array(
            "Authorization:" . APIKEY,
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
        $result = json_decode($response);
        if ($result->success == true) {
            echo "success";
        } else {
            echo $result->message[0];
        }
    }
}

if ($_POST['check'] == "otpCheck") {
    $otpCode = trim($_POST['otpCode']);
    $phone = trim($_POST['phone']);

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => APIENDPOINT . "sms.php",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "{\n\t\"phone\": \"$phone\",\n\t\"otp\": \"$otpCode\"\n}",
        CURLOPT_HTTPHEADER => array(
            "Authorization:" . APIKEY,
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
        $result = json_decode($response);
        if ($result->success == true) {
            $info = array(
                'phone' => $result->data->userdata[0]->userPhone,
                'token' => $result->data->userdata[0]->userToken
            );
            $userInfo = json_encode($info);

            setcookie('userinfo', $userInfo, time() + (86300 * 30), "/");
            echo "Success!";
        } else {
            echo $result->message[0];
        }
    }
}




?>