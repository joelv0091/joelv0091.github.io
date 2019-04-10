/**
 * 
 */

function converterEpochToDate(epoc)
{
// ts=epoc*1000
	return new Date(epoc*1000);
}


function jsDateToEpoch(d){
    // d = javascript date obj
    // returns epoch timestamp
    return (d.getTime()-d.getMilliseconds())/1000;
}



function ToUTC(dateip)
{
	return dateip.toISOString();

}


function ToLocalDate (inDate) {
    var date = new Date();
    date.setTime(inDate.valueOf() - 60000 * inDate.getTimezoneOffset());
    return date;
}