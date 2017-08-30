<?php
    $host = "http://jisutianqi.market.alicloudapi.com";
    $path = "/weather/query";
    $method = "GET";
    $appcode = "3925f9ae5b674f9fb64d6e1664c157b0";
    $headers = array();
    array_push($headers, "Authorization:APPCODE " . $appcode);
    $cityy = $_GET['name'];    
    $querys = "city="+urlencode($cityy)+"&citycode=citycode&cityid=cityid&ip=ip&location=location";
    
    echo($cityy)
    echo($querys)
    
    $bodys = "";
    $url = $host . $path . "?" . $querys;

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_FAILONERROR, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HEADER, false);
    if (1 == strpos("$".$host, "https://"))
    {
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    }

    $res=curl_exec($curl);
    // print_r($res);

    // var_dump(curl_exec($curl));
    // echo json_decode(curl_exec($curl));
    exit;
?>