/** MIT LICENSE by no-passwd https://github.com/no-passwd */
/* Writen In 1/23/2024 */

/*其他utf8正则,thanks @ymh1147*/
var chineseRegex = /[\u4E00-\u9FA5\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF\u002E\u3002\uFF0C\uFF1F\uFF01\u3001\uFF1B\uFF1A\u2018\u2019\u201C\u201D\u300A\u300B\uFF08\uFF09\u3010\u3011\u2014\u2015\uD83C\uDC00-\uD83D\uDFFF\uFE0F]/gu;

/*抗干扰,滤除ascii码*/
function replaceEnglish(str) {
  var regex = /[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]/g;
  return str.replace(regex, "");
}

/*抗干扰,滤除常见utf8码*/
function replaceChinese(str) {
  return str.replace(chineseRegex, "");
}

		
        const kencode = (str) => {
			/* 将字符串转换为UTF-8字节数组 */
			const utf8Bytes = new TextEncoder().encode(str);
			let utf8String = '';
			for (let i = 0; i < utf8Bytes.length; i++) {
			utf8String += String.fromCharCode(utf8Bytes[i]);
			} const utf8str = btoa(utf8String);let resfk = utf8str.split('').map((char) => char.charCodeAt(0)).map((byte) => byte.toString(16).padStart(2, '0')).join('');
			return resfk.replaceAll('\x31', '\u259D').replaceAll('\x32', '\u2596').replaceAll('\x33', '\u2597').replaceAll('\x34', '\u2598').replaceAll('\x35', '\u259E').replaceAll('\x36', '\u2584').replaceAll('\x37', '\u259A').replaceAll('\x38', '\u2580').replaceAll('\x39', '\u2599').replaceAll('\x61', '\u259B').replaceAll('\x62', '\u259C').replaceAll('\x63', '\u259F').replaceAll('\x64', '\u2588').replaceAll('\x65', '\u258C').replaceAll('\x66', '\u2583').replaceAll('\x30', '\u258E');
        }
		
        const dekencode = (str) => {
			/*抗干扰,过滤插入的未编码字符串 */
			let kcode= replaceChinese(replaceEnglish(str)).replaceAll(' ',"").replaceAll('\u259D','\x31').replaceAll('\u2596','\x32').replaceAll('\u2597','\x33').replaceAll('\u2598','\x34').replaceAll('\u259E','\x35').replaceAll('\u2584','\x36').replaceAll('\u259A','\x37').replaceAll('\u2580','\x38').replaceAll('\u2599','\x39').replaceAll('\u259B','\x61').replaceAll('\u259C','\x62').replaceAll('\u259F','\x63').replaceAll('\u2588','\x64').replaceAll('\u258C','\x65').replaceAll('\u2583','\x66').replaceAll('\u258E','\x30');
			 /* 将utf8char数组转换为UTF-8字符串 */
			const utf8char = [];
			for (let i = 0; i < kcode.length; i += 2) {
			utf8char.push(parseInt(kcode.substr(i, 2), 16));
				}
			const bytke = new Uint8Array(atob(String.fromCharCode.apply(null, utf8char)).split('').map(char => char.charCodeAt(0)));
			let kfser = new TextDecoder().decode(bytke);
			return kfser;
		}