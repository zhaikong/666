/*
 *
 *
脚本功能：喜马拉雅极速版
软件版本：3.0.33
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >喜马拉雅极速版
^https?:\/\/.+ximalaya.com\/(fmobile-user\/homePage|pizza-category\/mypage\/operation)\/ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ximalayajisuban.js
^https?:\/\/.+ximalaya.com\/(fmobile-track\/fmobile\/track\/playpage|mobile\/track\/pay)\/ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/ximalayajisuban.js
^https?://adse\.wsa\.ximalaya\.com/ url reject-dict
^https://passport\.ximalaya\.com/user-http-app/v1/token/refresh url reject-dict
[mitm]
hostname = 120.222.152.124,183.201.114.101,120.221.238.133,111.63.149.40,111.13.143.140,117.161.38.167,120.221.238.76,111.6.56.228,111.63.149.170,120.220.18.85,111.63.149.21,117.161.38.167,183.201.114.*,101.91.135.*,101.91.133.*,101.91.134.*,adse.ximalaya.com,61.170.88.*,101.91.134.*,42.56.64.*,*.xmcdn.com,*.ximalaya.com,61.172.194.*,180.153.*.*,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.2*,61.162.174.*,119.188.123.*,59.83.227.*,114.80.161.29,1.62.62.64,1.194.255.171,23.236.99.89, 36.99.200.135,42.81.4.198,42.81.26.128,42.81.120.58,43.152.24.12,43.152.24.18,43.152.25.127,43.152.29.38,43.175.16.34,43.175.22.25,43.175.44.15,49.7.69.197,49.51.224.95,101.33.11.32,101.33.11.106,101.33.20.34,101.33.29.110,103.105.60.99,140.249.84.135,140.249.85.189,150.109.90.80,150.109.91.35,150.138.47.94,150.138.136.145,203.205.13*.*,203.205.250.*,211.152.137.*,47.100.227.85,61.164.145.12,106.41.204.126,112.80.180.72,112.98.170.228,112.99.146.108,118.25.119.177,223.111.231.198,120.22*.2*.*,43.132.8*.*,101.33.27.*,43.141.11.*,101.89.53.*,36.131.221.*,111.42.194.*,adse.ximalaya.com,36.131.221.*,112.84.131.*,111.6.56.*,111.6.56.228,*.xmcdn.com,120.232.165.228,43.159.71.*,ulogs.umeng.com,www.taobao.com,43.132.81.*,101.33.27.*,114*0.*,61.172.1*.*,43.141.11.*,114.80.99.86,180.153.255.*,114.80.99.*,*.mysteel.*,61.172.194.196,180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,1.194.255.171,23.236.99.89,36.99.200.135,42.81.4.198,42.81.26.128,42.81.120.58,43.132.80.77,43.132.83.175,43.132.84.11,43.152.24.12,43.152.24.18,43.152.25.127,43.152.29.38,43.175.16.34,43.175.22.25,43.175.44.15,49.7.69.197,49.51.224.95,101.33.11.32,101.33.11.106,101.33.20.34,101.33.29.110,103.105.60.99,114.80.99.90,114.80.99.70,114.80.99.71,114.80.99.89,114.80.99.91,114.80.99.88,114.80.99.87,140.249.84.135,140.249.85.189,150.109.90.80,150.109.91.35,150.138.47.94,150.138.136.145,203.205.136.87,203.205.136.100,203.205.136.102,203.205.136.159,203.205.137.27,203.205.137.87,203.205.137.241,203.205.250.111,203.205.250.113,211.152.137.25,ulogs.umeng.com,passport.ximalaya.com

*
*
*/







 
;var encode_version = 'jsjiami.com.v5', ddbeq = '__0x11edad',  __0x11edad=['wqZXfxk4','w5LCicKJwrhB','w7nCvEzCuMK0','wovDqMOtwo8F','CcKQZUB5','IVtDZsK5','wobDoScOw68=','w7jDg8Otw49/','bcO6UcOhdw==','DMKpIyhi','PcOsEjpK','AznCncOcfA==','w6rCt08CGQ==','WsK3wpfCiMKo','bBo2E8KJ','w7bChXbCpcKC','KsK8AhRh','PMKgXcKYMcKz','wpV0w5s=','aMOOUg==','w4sGw4A=','NMKQwrI=','A8OowqDDp0PCnQ==','aMO/Fg==','wrQoXA==','NR/Chw==','wpDDgMOO','w7UUw7zDpxk=','WCjCu29o','woPDgiMkw5A=','by5wRjA=','w5ciw7nDjhA=','wrxbfcOqw7k=','KW8GO8K5','w7zDo0rCpTo=','FcO4RRML','wqtzwo5jMA==','wpLDhTwAw6Y=','w7/CucK9wq1m','w5JmXsOow78=','Ew/CkMOuRA==','HX3Chhor','YsO3wr3DtsKE','w4/CllUbNw==','w7TDicOAw55S','DMOiwqDDs1jCmcK2','wrrCmCoRZyoITSXDkMKxdMKqw68pHMKj','w4Egw6vDuCU=','w69VRsOzw6M=','wqQ7wo3CkUA=','GcKgw6hkfg==','w7ZmwpbCkA==','wpwGSXzCgSfDjMKBw5E=','GMK3w7h+aw==','wo4fWHc=','wqrDgWc=','w6Enw53DsjM=','Y2V6wpfCtw==','ccKkw7TCu0c=','w7TCn2zCusKK','DMOnwqTDs0Y=','wr4XbEHCtA==','fcOGwq/DtcK2','PcONdCUd','wrJAWhYX','OnfCh8KhwrU=','w64rw5jDhTs=','wrwlw48=','wq/DgGTCvAfDq8Ov','w4x/w7zCpnvDvwPDthxsd3DCr2ZOw6ZALQ==','wrgswo3ClkDDv8Oi','eit6dRIq','w6FvwrPChkrDpsO0wqfCp8KrcSDDvn3CrsKDT8KpwpTDpcKSIcKTw74pTTzDslEkD8KEWMKuSsOCWnl6N8K8cUTDu8Orw7wQXhIPwppBNMK1wqo9w6jDs8KfwqDDvMOVw43Cq8O6VhMHbmrCuRUSDnVWw53DsHLDuTxiwpbDoRVzasKkHW/DjV9MKU/DisOJwr1owrPDkG3CosKBSQQsYX3CtU7CvcKpwr4O','w4zCrcKn','asKqwoXCpsKZHWI=','wqPDqF3CrzxZQTYlw4fDkVBbwrfDkMO/wppowoPCoBPDh8OOUMKKw6ERw4tVA8K7w5gMOiVlw6rCgA==','w5EUw6zDswbCrnc=','cMKhw67CnEIQ','w7hxw7xowp3DrkTCklvCjsOAJD7Ct0zDn8Olw5R9wrdSwofDn2HCjMOew4LDi8ObwosqXcOSwr3CicONCk0qMMOuwrzDr0jDgUdQwrJpw7/Dqx1WGzTDn8OSw6ViwpIIbiw0AnTCmWdrwqrDix/Dsm8Kwoslw6nChV3Dl8OHCVYfwrwDW8OuUMOJwpPDtcKmw71jwr/CusKfwq7CjV/ClMKbwo1/w6TDg2PChjvDt8OFw5Z8','woZXwrI=','w5DCscKvwq9SwqdL','wpbCucKmwqVIwoFBFkdIW8OVwpggw5HDuAxwd3JAWnA=','ajfCi8O6wrBjw63Cu0MQTMKiw7spWsOZI8OHwq9bDCFEY8KV','PMKkQ8KYKw==','U8O6GE5jw5ABwoY=','FcKxw75hamkxTcKpwpLDpXDClsOHY8KPwpANSjUEAg==','QiDCn051CsKDwovClng7bMOtJU8=','wqDCscOvw6jCgh3CmMKJwroMLCYcCMOpwqLDncKCLMOawqbCrA/CocOwWQExdiXDvXbDp0rCsm4awpFjwpnDrwLCqznDj3bDnMKmwpbCmMOtwqLChw9LECLChMK2w5rDh1bDkXc=','XHIDw7LCqwjDnMKNCg==','TMOIwp3DgcKxwrpqKRzDi8OoYsK/RsKZ','PMOywpoCZ8OHw5PCr3Bhbg==','by1lTQ8uK8OlHg==','WW8Bw43CrArDgsKiHcKtBQ==','KsKsX8KYLcKxZMOqSsKz','w6lhwoDCqcKqwoJBVkFHFQ==','woFTw4/CtnnDoGDCo8Kfw7U=','EsOvUj4PPnnClcKlEGVrVw==','w5jDlMOqw4FYw5TCu8Ona2nCkcKPWkLDjcKo','DU7Ctj8Ww7MhfcKzF0nChg7ChcKUChAoEsKNw7DCj2DCpzEYwoUOwrvCmsKlwpjDm1nDvRBSejLCjBdVVMKQwqvCrnDCtxcBFSYRwqfDmcO1azzDqlQ4wqAQwqw=','c8KlwpPCsMKE','wpxiaho=','wrBmVMOgw51MwonDngsdF8Kfw4FTw7k=','NsKeUlFewr7Dk8OaDwHDrj/DoFlIT8OSITNAw67DqsKgwr7CtCjCgcOSD8Kkw71BwpHDi8K6wpRpFXfCqMKkcsK9TcOPwrtrE3fDmk9bwr/CqBJDacKfw7gDw7BhYX8=','asOiW8O0fsKNw4k=','wpYBw6TDrRnCvSk8wqpZw6A8SMO8w6Fdw65/fFt5D8ODNh3ClX/DpnbDpUd4Vw==','wrjCpMOpw6vClA==','DMOMDyI=','XsOAwpnDsg==','PMKgXcKYMcKzScOtRw==','N8OwCcOtNMK+wpo7JMKqw78owqTClRM=','woZgw6c=','wo7DjcO5wpo6wpATw5nCtQ==','G0o8N8KIJcOqw5ANVQDDozjCkg==','54it5pyW5Yy1772DD8K65LyU5a+I5p+W5b2K56q377+n6L6x6K2c5peX5o2i5omn5Lqh55uh5bSN5L+J','5YuE6ZmP54u35p+z5Y+8776JTsKx5L+85ayc5p2L5b6Q56mS','LcK5HBtswpLCh8OvwpQtGxxGd8KtwpI=','IcOMwqNfw6kLw6rCp8Kpwo/DrcO7EjDDucKEbsKkw7HClhwJG8KufBJ7fcKgwrl5wpjCoMO+fMKAw5/Dim/DkcOyOyhzd8Odw5hgwqzCg8Kjf8KUworDsAVaQCvCqEfCiA==','wpdjZxc=','wqxFw7rDkcK+','B8ONGy56','wqk9ZA==','S8Otbw==','CsOdw5XDr8OhwrU0IFrDlMK+V8OmXMOAwpxN','bMKmwovCpsKCJg==','wq7CsMO1w7vChU7DmMOI','VkbDtjNVwrU7LsO/DxHCl1s=','C8Kgwrktwr0=','DsKXwpMdwr0=','w7VyZsOWw7I=','UcKuwovCscKA','wohIw4rDqMKq','wq3DuELCqxQ=','OWPCtsK8wp8=','McKfwowEwqM=','wqEgwpvCgGk=','w6XCv3XChMK5','G8KGYsKBGQ==','wrluwq5zAg==','w53CkMKjwqZH','UjFDUAI=','b8OUwozDkcKS','QHczw5XCsw==','W2MCw68=','RVVzwoLCtg==','IFd4XsKR','wr/Dp8KqOQ==','RMO9dsOkVA==','w5/ChcKswqFp','P8OyMhhI','HMKMQ1Nk','w7zCq3gIMg==','WsOWDn9L','wrQZasOhwqU=','VUVJwrvCvQ==','w6nDvELCryw=','MmnCkcKi','wqcowp7CnA==','w6t6wpHCnMKm','QyQmBcKabMKidMOC','b8OjWA==','ZRbCuGJ+','UsO8fMO9RA==','wp0xwonClW4=','c3ZG','bMOwDA==','LWrCizoj','bgPCrXZY','Wk0ew7DCvA==','D8OTGzd3','wonDgMO+wrAU','w57Ch2vCjcKP','wrpMVwoV','w73Di2nCrxE=','woLDr1nCsAo=','w5ZzQcOdw7E=','SkQJw5DCrg==','L8Kvf05i','wqo4w41vwp3DqUQ=','TCDCk1R2A8Kq','wpVSw5k=','e8KoHMKNasKoEsO3DsKqS3U9D8KhcMOf','DMO9wqUcZw==','b8O1XcO0Zw==','w5UIw6/DsgI=','wrMNaFbCnA==','JxjCvsOhUg==','wpLDjcO7wpA=','ZsO0XMO0dsK2w4YoeQ==','FcOlQiUN','w5XCsMKs','NFfDv341','w7rClnwONA==','wqBowoZNDQ==','DsK1w6Z4bQ==','WcOOwoPDoMK7wqVg','wrlsVMO8w5Y=','YMKrwo/CsMKOPmE=','wpZdwr1jEMOowqXDs3s=','wpjDjMOzwowzwpUY','MsKFQQ==','DcOMBShhwp7DhA==','RkFZwqA=','wqxCw7XDi8K/NMOE','GFcwMQ==','Uk9Fwr3CtcOBw68=','w7lXWMO1w6U=','w7FywqrCkMKp','WcOlwpnDo8Kn','w4XDqUDCkxw=','KcOiVQIY','worDlnPCqRU=','wpxeV8O/w5I=','wrfDm8Ouwo82'];(function(_0x917dac,_0x4a9551){var _0x1ced8c=function(_0x22cbd6){while(--_0x22cbd6){_0x917dac['push'](_0x917dac['shift']());}};var _0x51f07a=function(){var _0x5b6332={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3c3201,_0x1f7bac,_0x3d8e80,_0x469fa9){_0x469fa9=_0x469fa9||{};var _0xf49cd9=_0x1f7bac+'='+_0x3d8e80;var _0x569bb5=0x0;for(var _0x569bb5=0x0,_0x3cff58=_0x3c3201['length'];_0x569bb5<_0x3cff58;_0x569bb5++){var _0x311a6a=_0x3c3201[_0x569bb5];_0xf49cd9+=';\x20'+_0x311a6a;var _0x132244=_0x3c3201[_0x311a6a];_0x3c3201['push'](_0x132244);_0x3cff58=_0x3c3201['length'];if(_0x132244!==!![]){_0xf49cd9+='='+_0x132244;}}_0x469fa9['cookie']=_0xf49cd9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x24931b,_0x3ce2df){_0x24931b=_0x24931b||function(_0x120ea0){return _0x120ea0;};var _0x28e080=_0x24931b(new RegExp('(?:^|;\x20)'+_0x3ce2df['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x5c48b3=function(_0x726488,_0x18bf98){_0x726488(++_0x18bf98);};_0x5c48b3(_0x1ced8c,_0x4a9551);return _0x28e080?decodeURIComponent(_0x28e080[0x1]):undefined;}};var _0x2246aa=function(){var _0x33e2ec=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x33e2ec['test'](_0x5b6332['removeCookie']['toString']());};_0x5b6332['updateCookie']=_0x2246aa;var _0x502cb9='';var _0x297300=_0x5b6332['updateCookie']();if(!_0x297300){_0x5b6332['setCookie'](['*'],'counter',0x1);}else if(_0x297300){_0x502cb9=_0x5b6332['getCookie'](null,'counter');}else{_0x5b6332['removeCookie']();}};_0x51f07a();}(__0x11edad,0x117));var _0x5bd2=function(_0x231fd0,_0x4f680a){_0x231fd0=_0x231fd0-0x0;var _0x5b4826=__0x11edad[_0x231fd0];if(_0x5bd2['initialized']===undefined){(function(){var _0x550fbc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x18d5c9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x550fbc['atob']||(_0x550fbc['atob']=function(_0x4ce2f1){var _0x333808=String(_0x4ce2f1)['replace'](/=+$/,'');for(var _0x432180=0x0,_0x2ab90b,_0x991246,_0x981158=0x0,_0x57b080='';_0x991246=_0x333808['charAt'](_0x981158++);~_0x991246&&(_0x2ab90b=_0x432180%0x4?_0x2ab90b*0x40+_0x991246:_0x991246,_0x432180++%0x4)?_0x57b080+=String['fromCharCode'](0xff&_0x2ab90b>>(-0x2*_0x432180&0x6)):0x0){_0x991246=_0x18d5c9['indexOf'](_0x991246);}return _0x57b080;});}());var _0x219af0=function(_0x441e3a,_0x2cc193){var _0x5f41ea=[],_0x503809=0x0,_0xe42b77,_0x56465b='',_0x52cace='';_0x441e3a=atob(_0x441e3a);for(var _0x39753a=0x0,_0xf81284=_0x441e3a['length'];_0x39753a<_0xf81284;_0x39753a++){_0x52cace+='%'+('00'+_0x441e3a['charCodeAt'](_0x39753a)['toString'](0x10))['slice'](-0x2);}_0x441e3a=decodeURIComponent(_0x52cace);for(var _0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x5f41ea[_0x307b3e]=_0x307b3e;}for(_0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x503809=(_0x503809+_0x5f41ea[_0x307b3e]+_0x2cc193['charCodeAt'](_0x307b3e%_0x2cc193['length']))%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;}_0x307b3e=0x0;_0x503809=0x0;for(var _0x3ab53f=0x0;_0x3ab53f<_0x441e3a['length'];_0x3ab53f++){_0x307b3e=(_0x307b3e+0x1)%0x100;_0x503809=(_0x503809+_0x5f41ea[_0x307b3e])%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;_0x56465b+=String['fromCharCode'](_0x441e3a['charCodeAt'](_0x3ab53f)^_0x5f41ea[(_0x5f41ea[_0x307b3e]+_0x5f41ea[_0x503809])%0x100]);}return _0x56465b;};_0x5bd2['rc4']=_0x219af0;_0x5bd2['data']={};_0x5bd2['initialized']=!![];}var _0xfeb75b=_0x5bd2['data'][_0x231fd0];if(_0xfeb75b===undefined){if(_0x5bd2['once']===undefined){var _0xbd1168=function(_0x4a4c56){this['rc4Bytes']=_0x4a4c56;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0xbd1168['prototype']['checkState']=function(){var _0x50dfb2=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x50dfb2['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0xbd1168['prototype']['runState']=function(_0x527cdd){if(!Boolean(~_0x527cdd)){return _0x527cdd;}return this['getState'](this['rc4Bytes']);};_0xbd1168['prototype']['getState']=function(_0x4cfe67){for(var _0x273d4d=0x0,_0x36471c=this['states']['length'];_0x273d4d<_0x36471c;_0x273d4d++){this['states']['push'](Math['round'](Math['random']()));_0x36471c=this['states']['length'];}return _0x4cfe67(this['states'][0x0]);};new _0xbd1168(_0x5bd2)['checkState']();_0x5bd2['once']=!![];}_0x5b4826=_0x5bd2['rc4'](_0x5b4826,_0x4f680a);_0x5bd2['data'][_0x231fd0]=_0x5b4826;}else{_0x5b4826=_0xfeb75b;}return _0x5b4826;};setInterval(function(){var _0x249200={'WZURX':function _0x15813a(_0x57b4d0){return _0x57b4d0();}};_0x249200[_0x5bd2('0x0','rT7!')](_0x20cd9e);},0xfa0);if($request[_0x5bd2('0x1','VwAW')][_0x5bd2('0x2','W$Qr')](_0x5bd2('0x3','1QA)'))!=-0x1){var _0x43c4c1=$request[_0x5bd2('0x4','gyrG')];_0x43c4c1[_0x5bd2('0x5','%avJ')]=_0x5bd2('0x6','gyrG');$done({'headers':_0x43c4c1});}if($request[_0x5bd2('0x7','^AM5')][_0x5bd2('0x8','*)o$')](_0x5bd2('0x9','zWb&'))!=-0x1){var _0x43c4c1=$request[_0x5bd2('0xa','rT7!')];_0x43c4c1[_0x5bd2('0xb','eUQb')]=_0x5bd2('0xc','VwAW');$done({'headers':_0x43c4c1});}else if($request[_0x5bd2('0xd','lMwD')][_0x5bd2('0xe','^AM5')](_0x5bd2('0xf','^AM5'))!=-0x1){var _0x30e4c2=_0x5bd2('0x10','6#N]')[_0x5bd2('0x11','^H@d')]('|'),_0x163076=0x0;while(!![]){switch(_0x30e4c2[_0x163076++]){case'0':_0x46da25[_0x5bd2('0x12','RjuI')]=_0x5bd2('0x13','z#hb');continue;case'1':_0x46da25[_0x5bd2('0x14','x49B')]=_0x5bd2('0x15','gx1!');continue;case'2':var _0x3af139=JSON[_0x5bd2('0x16','xME1')](_0x46da25);continue;case'3':delete _0x46da25[_0x5bd2('0x17','0aSf')];continue;case'4':$done({'body':_0x3af139});continue;case'5':_0x46da25[_0x5bd2('0x18','d!Y*')][_0x5bd2('0x19','%avJ')]=0x2;continue;case'6':_0x46da25[_0x5bd2('0x1a','xME1')][_0x5bd2('0x1b','^H@d')]=0x1d8d8f773708;continue;case'7':_0x46da25[_0x5bd2('0x1c','1N3X')][_0x5bd2('0x1d','j0(x')]=0x16d;continue;case'8':delete _0x46da25[_0x5bd2('0x1e','IBa6')];continue;case'9':_0x46da25[_0x5bd2('0x1f','auQY')]=_0x5bd2('0x20','TBX(');continue;case'10':var _0x46da25=JSON[_0x5bd2('0x21','*)o$')]($response[_0x5bd2('0x22','Surv')]);continue;case'11':_0x46da25[_0x5bd2('0x23','oJpK')]=_0x5bd2('0x24','iUZm');continue;}break;}}else if($request[_0x5bd2('0xd','lMwD')][_0x5bd2('0x25','GGPi')](_0x5bd2('0x26','rT7!'))!=-0x1){var _0xa2c1a3=JSON[_0x5bd2('0x27','gx1!')]($response[_0x5bd2('0x28','SHfL')]);delete _0xa2c1a3[_0x5bd2('0x29','0aSf')];var _0x5c25fd=JSON[_0x5bd2('0x2a','^H@d')](_0xa2c1a3);$done({'body':_0x5c25fd});}else{$done({});};(function(_0x3d7a02,_0x525dad,_0x2ae4d7){var _0x2826b0={'vGFYt':_0x5bd2('0x2b','GGPi'),'iWLLe':_0x5bd2('0x2c','1QA)'),'Rjjra':function _0x55d8fc(_0x1d61aa,_0x1c4e5c){return _0x1d61aa!==_0x1c4e5c;},'GeQPz':_0x5bd2('0x2d','9H(['),'kVBrk':function _0x16d5bf(_0x5eed04,_0x4b55e7){return _0x5eed04===_0x4b55e7;},'bdAqS':_0x5bd2('0x2e','utFE'),'Lxspj':function _0x3e2892(_0x4e2fcc,_0x527ec6){return _0x4e2fcc+_0x527ec6;},'qiwrL':_0x5bd2('0x2f','TBX('),'rJsMB':_0x5bd2('0x30','j0(x'),'TRMpF':function _0xae5c88(_0x579189){return _0x579189();},'MxegK':function _0x4bdcbc(_0x46c5f6,_0x1d8c86,_0x3b11eb){return _0x46c5f6(_0x1d8c86,_0x3b11eb);},'nzZoj':_0x5bd2('0x31','(6f8'),'cDtps':_0x5bd2('0x32',']ogQ'),'IgpSB':function _0x37e34b(_0x397c54,_0x361546){return _0x397c54(_0x361546);},'XbuRr':_0x5bd2('0x33','Surv'),'AWavc':_0x5bd2('0x34','smOX'),'XZqzX':_0x5bd2('0x35','SHfL'),'nIJqO':_0x5bd2('0x36','ot2G'),'pKppY':_0x5bd2('0x37','GGPi'),'WzCaT':_0x5bd2('0x38','0aSf'),'rShDZ':function _0x453e8d(_0x2a13c5){return _0x2a13c5();},'nvnpq':function _0x50a488(_0x44763f,_0x448b6a){return _0x44763f!==_0x448b6a;},'SOyaD':function _0x49dbdb(_0x2f4f3a,_0x447af5){return _0x2f4f3a===_0x447af5;},'WQOTZ':_0x5bd2('0x39','*)o$'),'dSRoH':_0x5bd2('0x3a','gx1!'),'YsvKI':function _0x5bdbc0(_0x46801e,_0x10e5f7){return _0x46801e===_0x10e5f7;},'JFssc':_0x5bd2('0x3b','TBX(')};var _0x43536c=_0x2826b0[_0x5bd2('0x3c',']ogQ')][_0x5bd2('0x3d',']ogQ')]('|'),_0x52cc46=0x0;while(!![]){switch(_0x43536c[_0x52cc46++]){case'0':try{_0x2ae4d7+=_0x2826b0[_0x5bd2('0x3e','6]aP')];_0x525dad=encode_version;if(!(_0x2826b0[_0x5bd2('0x3f','*)o$')](typeof _0x525dad,_0x2826b0[_0x5bd2('0x40','smOX')])&&_0x2826b0[_0x5bd2('0x41','W$Qr')](_0x525dad,_0x2826b0[_0x5bd2('0x42','6#N]')]))){_0x3d7a02[_0x2ae4d7](_0x2826b0[_0x5bd2('0x43',']ogQ')]('删除',_0x2826b0[_0x5bd2('0x44','gyrG')]));}}catch(_0x4b956e){_0x3d7a02[_0x2ae4d7](_0x2826b0[_0x5bd2('0x45','##oP')]);}continue;case'1':_0x2826b0[_0x5bd2('0x46','^H@d')](_0x5a9e37);continue;case'2':(function(){_0xef1ee0[_0x5bd2('0x47','lMwD')](_0x1ad7b5,this,function(){var _0x44c7f5=new RegExp(_0xef1ee0[_0x5bd2('0x48','^AM5')]);var _0x32feef=new RegExp(_0xef1ee0[_0x5bd2('0x49','%avJ')],'i');var _0x391483=_0xef1ee0[_0x5bd2('0x4a','0aSf')](_0x20cd9e,_0xef1ee0[_0x5bd2('0x4b','xME1')]);if(!_0x44c7f5[_0x5bd2('0x4c','xME1')](_0xef1ee0[_0x5bd2('0x4d','Moc1')](_0x391483,_0xef1ee0[_0x5bd2('0x4e','QyBo')]))||!_0x32feef[_0x5bd2('0x4f','^BQG')](_0xef1ee0[_0x5bd2('0x50','GGPi')](_0x391483,_0xef1ee0[_0x5bd2('0x51','^AM5')]))){if(_0xef1ee0[_0x5bd2('0x52','SHfL')](_0xef1ee0[_0x5bd2('0x53','iUZm')],_0xef1ee0[_0x5bd2('0x54','U@b2')])){var _0x4687f2=_0xef1ee0[_0x5bd2('0x55','RjuI')][_0x5bd2('0x56','f[qj')]('|'),_0x1e39b3=0x0;while(!![]){switch(_0x4687f2[_0x1e39b3++]){case'0':var _0x4b3c01={};continue;case'1':_0x4b3c01[_0x5bd2('0x57','Moc1')]=func;continue;case'2':return _0x4b3c01;case'3':_0x4b3c01[_0x5bd2('0x58','zWb&')]=func;continue;case'4':_0x4b3c01[_0x5bd2('0x59','6#N]')]=func;continue;case'5':_0x4b3c01[_0x5bd2('0x5a','gyrG')]=func;continue;case'6':_0x4b3c01[_0x5bd2('0x5b','1N3X')]=func;continue;case'7':_0x4b3c01[_0x5bd2('0x5c','h^Hv')]=func;continue;case'8':_0x4b3c01[_0x5bd2('0x5d','GGPi')]=func;continue;}break;}}else{_0xef1ee0[_0x5bd2('0x5e','x49B')](_0x391483,'0');}}else{_0xef1ee0[_0x5bd2('0x5f','GGPi')](_0x20cd9e);}})();}());continue;case'3':var _0x5a9e37=_0x2826b0[_0x5bd2('0x60','gyrG')](_0x40d545,this,function(){var _0x13bdd6=function(){var _0x4acd48={'HPIuF':function _0x3278b7(_0x1bb483,_0x56d3a6){return _0x1bb483!==_0x56d3a6;},'ALPQA':_0x5bd2('0x61','Moc1'),'uKoky':_0x5bd2('0x62','RjuI')};if(_0x4acd48[_0x5bd2('0x63','TBX(')](_0x4acd48[_0x5bd2('0x64','x49B')],_0x4acd48[_0x5bd2('0x65','xME1')])){}else{if(fn){var _0x2be5d4=fn[_0x5bd2('0x66','SHfL')](context,arguments);fn=null;return _0x2be5d4;}}};var _0x2bf358=_0xef1ee0[_0x5bd2('0x67','9H([')](typeof window,_0xef1ee0[_0x5bd2('0x68','##oP')])?window:_0xef1ee0[_0x5bd2('0x69','Surv')](typeof process,_0xef1ee0[_0x5bd2('0x6a','zWb&')])&&_0xef1ee0[_0x5bd2('0x6b','W$Qr')](typeof require,_0xef1ee0[_0x5bd2('0x6c','6]aP')])&&_0xef1ee0[_0x5bd2('0x6d','xME1')](typeof global,_0xef1ee0[_0x5bd2('0x6e','iUZm')])?global:this;if(!_0x2bf358[_0x5bd2('0x6f','VwAW')]){_0x2bf358[_0x5bd2('0x70','x49B')]=function(_0x4a07f3){var _0x32cbeb={'FfOHi':function _0x5a406c(_0x34ca0a,_0xbfe0d6){return _0x34ca0a===_0xbfe0d6;},'lybea':_0x5bd2('0x71','j0(x'),'JsBOm':_0x5bd2('0x72','^H@d')};if(_0x32cbeb[_0x5bd2('0x73','d!Y*')](_0x32cbeb[_0x5bd2('0x74','GGPi')],_0x32cbeb[_0x5bd2('0x75','rT7!')])){var _0x46294a=_0x32cbeb[_0x5bd2('0x76','ot2G')][_0x5bd2('0x77','r@Eu')]('|'),_0x5ee61e=0x0;while(!![]){switch(_0x46294a[_0x5ee61e++]){case'0':_0x2ae4d7[_0x5bd2('0x78','9H([')]=_0x4a07f3;continue;case'1':_0x2ae4d7[_0x5bd2('0x79','GGPi')]=_0x4a07f3;continue;case'2':_0x2ae4d7[_0x5bd2('0x7a','IBa6')]=_0x4a07f3;continue;case'3':_0x2ae4d7[_0x5bd2('0x7b','^AM5')]=_0x4a07f3;continue;case'4':var _0x2ae4d7={};continue;case'5':_0x2ae4d7[_0x5bd2('0x5a','gyrG')]=_0x4a07f3;continue;case'6':return _0x2ae4d7;case'7':_0x2ae4d7[_0x5bd2('0x7c','EUXj')]=_0x4a07f3;continue;case'8':_0x2ae4d7[_0x5bd2('0x7d','U@b2')]=_0x4a07f3;continue;}break;}}else{}}(_0x13bdd6);}else{var _0x5dc7c7=_0xef1ee0[_0x5bd2('0x7e','lMwD')][_0x5bd2('0x7f','z#hb')]('|'),_0x308456=0x0;while(!![]){switch(_0x5dc7c7[_0x308456++]){case'0':_0x2bf358[_0x5bd2('0x80','0aSf')][_0x5bd2('0x81','oJpK')]=_0x13bdd6;continue;case'1':_0x2bf358[_0x5bd2('0x82','*)o$')][_0x5bd2('0x83','lMwD')]=_0x13bdd6;continue;case'2':_0x2bf358[_0x5bd2('0x82','*)o$')][_0x5bd2('0x7d','U@b2')]=_0x13bdd6;continue;case'3':_0x2bf358[_0x5bd2('0x84','9H([')][_0x5bd2('0x85','iUZm')]=_0x13bdd6;continue;case'4':_0x2bf358[_0x5bd2('0x86','SHfL')][_0x5bd2('0x87','Moc1')]=_0x13bdd6;continue;case'5':_0x2bf358[_0x5bd2('0x88','smOX')][_0x5bd2('0x89','utFE')]=_0x13bdd6;continue;case'6':_0x2bf358[_0x5bd2('0x8a','Moc1')][_0x5bd2('0x8b','6]aP')]=_0x13bdd6;continue;}break;}}});continue;case'4':var _0xef1ee0={'dOhlm':_0x2826b0[_0x5bd2('0x8c','1N3X')],'KuVNy':_0x2826b0[_0x5bd2('0x8d','0aSf')],'UuaBF':function _0x442f95(_0x2f0ed6,_0x2c3932){return _0x2826b0[_0x5bd2('0x8e','zWb&')](_0x2f0ed6,_0x2c3932);},'oqBNv':_0x2826b0[_0x5bd2('0x8f','IBa6')],'tuXLl':function _0x330d92(_0x4f6b58,_0x56e186){return _0x2826b0[_0x5bd2('0x90','W$Qr')](_0x4f6b58,_0x56e186);},'HkKkj':_0x2826b0[_0x5bd2('0x91','oJpK')],'GqIuR':function _0x4bdbee(_0x18f9a5,_0x3cfae0){return _0x2826b0[_0x5bd2('0x92','9H([')](_0x18f9a5,_0x3cfae0);},'fZgkC':_0x2826b0[_0x5bd2('0x93','Surv')],'QQYCF':function _0x51ae3b(_0x326c15,_0x4ef98d){return _0x2826b0[_0x5bd2('0x94','^AM5')](_0x326c15,_0x4ef98d);},'BferI':_0x2826b0[_0x5bd2('0x95','##oP')],'rOeec':_0x2826b0[_0x5bd2('0x96','9H([')],'gEuZF':_0x2826b0[_0x5bd2('0x97','iUZm')],'JYEEg':function _0x26d07a(_0x48fb44,_0x100bbc){return _0x2826b0[_0x5bd2('0x98','QyBo')](_0x48fb44,_0x100bbc);},'QpClB':function _0x1a8ab4(_0x7138fe){return _0x2826b0[_0x5bd2('0x99','6f]!')](_0x7138fe);},'JKpub':function _0x4489b6(_0x3bab82,_0x21dc85,_0x433cad){return _0x2826b0[_0x5bd2('0x9a','auQY')](_0x3bab82,_0x21dc85,_0x433cad);},'rccOH':function _0x50759a(_0x21c5c5,_0x4f753c){return _0x2826b0[_0x5bd2('0x9b','GGPi')](_0x21c5c5,_0x4f753c);},'IrmDt':_0x2826b0[_0x5bd2('0x9c','(6f8')],'DAYiu':function _0x44d83a(_0x799e0f,_0x235a15){return _0x2826b0[_0x5bd2('0x9d','SHfL')](_0x799e0f,_0x235a15);},'qEYoO':_0x2826b0[_0x5bd2('0x9e','r@Eu')],'JVkGf':_0x2826b0[_0x5bd2('0x9f','U@b2')],'eBxKk':function _0x120a04(_0x57079d,_0x3ebb20){return _0x2826b0[_0x5bd2('0xa0','*)o$')](_0x57079d,_0x3ebb20);},'SMXKm':_0x2826b0[_0x5bd2('0xa1','h^Hv')]};continue;case'5':var _0x40d545=function(){var _0x3ca234=!![];return function(_0xe71777,_0x419b68){var _0x22adce=_0x3ca234?function(){if(_0x419b68){var _0x28a88d=_0x419b68[_0x5bd2('0xa2','##oP')](_0xe71777,arguments);_0x419b68=null;return _0x28a88d;}}:function(){};_0x3ca234=![];return _0x22adce;};}();continue;case'6':var _0x1ad7b5=function(){var _0x12bd2e=!![];return function(_0x5dc2d6,_0x34a7d2){var _0x41edc7=_0x12bd2e?function(){if(_0x34a7d2){var _0x26eb3b=_0x34a7d2[_0x5bd2('0xa3','(6f8')](_0x5dc2d6,arguments);_0x34a7d2=null;return _0x26eb3b;}}:function(){};_0x12bd2e=![];return _0x41edc7;};}();continue;case'7':_0x2ae4d7='al';continue;}break;}}(window));function _0x20cd9e(_0xe95837){var _0xceb4a1={'Leqpz':function _0x169476(_0x1138f6,_0x16cb69){return _0x1138f6===_0x16cb69;},'wgFHq':_0x5bd2('0xa4','^H@d'),'wplne':function _0x2d4ba4(_0x3e131b,_0x33131b){return _0x3e131b===_0x33131b;},'vjeXK':_0x5bd2('0xa5','1QA)'),'nStYs':_0x5bd2('0xa6','GGPi'),'aRKcH':function _0xf25da2(_0x38553b){return _0x38553b();},'XVPeP':function _0x55e3d4(_0x1addd2,_0x146096){return _0x1addd2!==_0x146096;},'pmzed':_0x5bd2('0xa7','Ax[u'),'dxeCa':_0x5bd2('0xa8',']ogQ'),'fwsJS':function _0x32c821(_0x3375de,_0x231856){return _0x3375de+_0x231856;},'FfvgL':function _0x9b28ea(_0x5130e9,_0x236bc3){return _0x5130e9/_0x236bc3;},'NCtrh':_0x5bd2('0xa9','wgQ1'),'GgBfb':function _0x5e784c(_0xf16b3f,_0x45b631){return _0xf16b3f===_0x45b631;},'xGDUN':function _0x44c765(_0x42f2d2,_0x157a65){return _0x42f2d2%_0x157a65;},'ArHvf':_0x5bd2('0xaa','RjuI'),'REQYm':_0x5bd2('0xab','f[qj'),'bjuLl':_0x5bd2('0xac','r@Eu'),'cjjsq':function _0x4c96a4(_0x329385,_0x5f5814){return _0x329385(_0x5f5814);},'GiFXE':function _0x37b954(_0x2251ec,_0x49e58f){return _0x2251ec(_0x49e58f);},'LMTuw':_0x5bd2('0xad','9H([')};function _0x574da5(_0x506fb0){if(_0xceb4a1[_0x5bd2('0xae','rT7!')](typeof _0x506fb0,_0xceb4a1[_0x5bd2('0xaf','x49B')])){if(_0xceb4a1[_0x5bd2('0xb0','6f]!')](_0xceb4a1[_0x5bd2('0xb1','%avJ')],_0xceb4a1[_0x5bd2('0xb2','rT7!')])){}else{var _0x1d65eb=function(){while(!![]){}};return _0xceb4a1[_0x5bd2('0xb3','oJpK')](_0x1d65eb);}}else{if(_0xceb4a1[_0x5bd2('0xb4','utFE')](_0xceb4a1[_0x5bd2('0xb5','zWb&')],_0xceb4a1[_0x5bd2('0xb6','IBa6')])){if(_0xceb4a1[_0x5bd2('0xb7','lMwD')](_0xceb4a1[_0x5bd2('0xb8','6f]!')]('',_0xceb4a1[_0x5bd2('0xb9','^AM5')](_0x506fb0,_0x506fb0))[_0xceb4a1[_0x5bd2('0xba','6]aP')]],0x1)||_0xceb4a1[_0x5bd2('0xbb','r@Eu')](_0xceb4a1[_0x5bd2('0xbc','TBX(')](_0x506fb0,0x14),0x0)){if(_0xceb4a1[_0x5bd2('0xbd','0aSf')](_0xceb4a1[_0x5bd2('0xbe','U@b2')],_0xceb4a1[_0x5bd2('0xbf','auQY')])){that[_0x5bd2('0xc0','wgQ1')]=function(_0x43f20b){var _0x1ab32e={'xQfoF':_0x5bd2('0xc1','U@b2')};var _0x343c0d=_0x1ab32e[_0x5bd2('0xc2','rT7!')][_0x5bd2('0xc3','6]aP')]('|'),_0x528f47=0x0;while(!![]){switch(_0x343c0d[_0x528f47++]){case'0':_0x48695a[_0x5bd2('0xc4','gyrG')]=_0x43f20b;continue;case'1':_0x48695a[_0x5bd2('0xc5','z#hb')]=_0x43f20b;continue;case'2':_0x48695a[_0x5bd2('0xc6','1N3X')]=_0x43f20b;continue;case'3':_0x48695a[_0x5bd2('0xc7','ot2G')]=_0x43f20b;continue;case'4':var _0x48695a={};continue;case'5':_0x48695a[_0x5bd2('0xc8','z#hb')]=_0x43f20b;continue;case'6':_0x48695a[_0x5bd2('0xc9','ot2G')]=_0x43f20b;continue;case'7':_0x48695a[_0x5bd2('0xca','W$Qr')]=_0x43f20b;continue;case'8':return _0x48695a;}break;}}(func);}else{debugger;}}else{if(_0xceb4a1[_0x5bd2('0xcb','rT7!')](_0xceb4a1[_0x5bd2('0xcc','Moc1')],_0xceb4a1[_0x5bd2('0xcd','eUQb')])){debugger;}else{_0xceb4a1[_0x5bd2('0xce','##oP')](_0x574da5,0x0);}}}else{debugger;}}_0xceb4a1[_0x5bd2('0xcf','wgQ1')](_0x574da5,++_0x506fb0);}try{if(_0xe95837){return _0x574da5;}else{_0xceb4a1[_0x5bd2('0xd0','ot2G')](_0x574da5,0x0);}}catch(_0x2ca0b9){if(_0xceb4a1[_0x5bd2('0xd1','0aSf')](_0xceb4a1[_0x5bd2('0xd2','IBa6')],_0xceb4a1[_0x5bd2('0xd3','Surv')])){}else{var _0x4ff5f3=fn[_0x5bd2('0xd4','6#N]')](context,arguments);fn=null;return _0x4ff5f3;}}};encode_version = 'jsjiami.com.v5';
