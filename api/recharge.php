<?php 
if (isset($_POST['electricityBillop'])) {
		$account = $_POST['electserviceNumber'];
		$service_type = $_POST['electricityBillop'];
		$amount = $_POST['electamount'];
		$phone = $_POST['electphoneNumber'];
		$agentReference = 'Smartvox'.substr(str_shuffle(md5(time())), 0, 20);
		$apibase = 'https://payments.baxipay.com.ng/api/baxipay/services/electricity/request';
		$url  = $apibase.'?account_number='.$account.'&amount='.$amount;.'&phone='.$phone;.'&service_type='.$service_type.'&&agentId=212&agentReference='.$agentReference;;
		$curl = curl_init();
		// 1. Set the CURLOPT_RETURNTRANSFER option to true
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		// 2. Set the CURLOPT_POST option to true for POST request
		curl_setopt($curl, CURLOPT_POST, true);
		// 3. Request Url
		curl_setopt($curl, CURLOPT_URL, $url);
		//This are header that produce json results and hold the api key
		$headers = array();
		$headers[] = 'Accept: */*';
		$headers[] = 'X-Api-Key: 5adea9-044a85-708016-7ae662-646d59';
		$headers[] = 'Content-Type: application/json';
		$headers[] = 'X-Csrf-Token: ';
		curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
		//Execute code
		$result = curl_exec($curl);
		if (curl_errno($curl)) {
		    echo 'Error:' . curl_error($curl);
		}
		//close connection
		curl_close($curl);
		$json = $result;
		$data = json_decode($json);
		echo $result . PHP_EOL;
}

 ?>