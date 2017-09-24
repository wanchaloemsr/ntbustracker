<? php

header('Content-type: text/xml');

$url = 'http://pub.ntgov-rtpi.tims.net.au/webapp/bustrk/PublicBus';

$handle = fopen($url, "r");

if($handle){
	echo "string";
}else{
	echo 'Kuy';
}

?>