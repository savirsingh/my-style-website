function geoplugin_request() { return '69.159.43.172';} 
function geoplugin_status() { return '200';} 
function geoplugin_credit() { return 'Some of the returned data includes GeoLite data created by MaxMind, available from <a href=\'http://www.maxmind.com\'>http://www.maxmind.com</a>.';} 
function geoplugin_delay() { return '0ms';} 
function geoplugin_city() { return 'Mississauga';} 
function geoplugin_region() { return 'Ontario';} 
function geoplugin_regionCode() { return 'ON';} 
function geoplugin_regionName() { return 'Ontario';} 
function geoplugin_areaCode() { return '';} 
function geoplugin_dmaCode() { return '';} 
function geoplugin_countryCode() { return 'CA';} 
function geoplugin_countryName() { return 'Canada';} 
function geoplugin_inEU() { return 0;} 
function geoplugin_euVATrate() { return ;} 
function geoplugin_continentCode() { return 'NA';} 
function geoplugin_latitude() { return '43.5639';} 
function geoplugin_longitude() { return '-79.7172';} 
function geoplugin_locationAccuracyRadius() { return '5';} 
function geoplugin_timezone() { return 'America/Toronto';} 
function geoplugin_currencyCode() { return 'CAD';} 
function geoplugin_currencySymbol() { return '&#36;';} 
function geoplugin_currencySymbol_UTF8() { return '$';} 
function geoplugin_currencyConverter(amt, symbol) { 
	if (!amt) { return false; } 
	var converted = amt * 1.2594; 
	if (converted <0) { return false; } 
	if (symbol === false) { return Math.round(converted * 100)/100; } 
	else { return '&#36;'+(Math.round(converted * 100)/100);} 
	return false; 
} 