/***
 API CREATED FOR TRINITYLIVESTREAM
 Author: Joel
 Creation Date : 04-04-2018
 * @param str
 * @returns
 */

function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}