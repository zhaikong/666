/*
 *
 *
脚本功能：起点读书 解锁会员免费听书板块
软件版本：5.9.364
下载地址：++
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >起点读书 解锁会员免费听书板块
^https?:\/\/.+.qidian.com\/argus\/api\/v[0-9]\/(adv\/getadvlistbatch|user\/getaccountpage|subscription\/getvipprice|client\/getsplashscreen) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/QDVIP.js
^https?:\/\/.+.qidian.com\/argus\/api\/v[0-9]\/(audio\/getTtsChapterAudio|bookcontent\/getvipcontent|audio\/getaudiochapter\?) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/QDVIP.js

[mitm] 
hostname = *.qidian.com,*.if.qidian.com

*
*
*/











;var encode_version = 'jsjiami.com.v5', axxdh = '__0x11cc55',  __0x11cc55=['worDnjXDsMON','w6fChmsUwoc=','REXDkj7ChA==','w63Dtx0dMQ==','w7ZBHw==','w5oTQQ==','AlFJwrAg','bUTDlCbCug==','w505M1XCnA==','w5vDiSjCn1s=','SnzDpw==','DcOgV1/DpA==','CsKUO8KhwqQ=','CMOXwrvClMOr','w5bDvXZXwqU=','w7AOM1w=','w6PDtBjChlYJ','w78qEi1bScOxD0A=','BMOrw7FSw5o=','NsK4wrEuWg==','CjvCtHgv','w5LCoXgMwqQ=','w7LCssOkw5km','w4zCksOzw7oJ','PFTCrMOwJg==','w4ZzBD/Csw==','w5srPUvCpA==','w6xpPR3Crw==','ZcKtesOxFw==','OAbCkF7CsSbDuA==','wp7DvkQ3VsKjw6DDnMOJSSBDeMKIBcKyTw==','w7cXNkTDoQ==','w4NADj7DlQ==','w6wjScOoNQ==','woA8wppx','GR7Cjl43','dX7Cv0vCi1XDpmBz','wpfCnirDrMKz','w5HDvXZK','agp9','wos+wohMQw==','wpXCjgU=','w5DDtjk=','w6srTcOoBsKRfF/ChMOtG8KQw6TCs8KRdsKHwoxiw4pleVLDsMOhw7jDqFjDrmbCj8OCXwzDqsKrTljDnzB3w7QMeDHCt8OfFR3CrkkqwpjDjcO+cw1jwpnCi8OKwrh+wqxfC07DnwFXf2LCrF/DlRkDH8KWwo7ClcKZQA8Cw6zDkMKyw6DDu1QRwqxaw5jDlgPCk1TCmcKxw5nChsOTwqvCugImwqkdwqTCsCR9HAgbwohRwqjCkMOeEBhxw6ZBTcOgNjo0ZV/Di8KdFgzDsDjCuVxNUArCkyRSwoLDthFKEcKUIcOxwrbCvh5MZTw0FsKXw4zDrnllw4XDi8KDw5VzD8K1woxgw5ElVx5Qw5ADLMOAwp0mJsKdfx7Crz3DvhgowqwfZDYef8KfG8OTw7wLw618csOrw7RrFH5dw7TCnsO1fsKFw6/CvsKow7bCgw1pw4p6w41Mw6HClMK/wqtjwoFsL3rCmWceR8KQw4bCig3DvcKiw7xVw4AVw6XCrj3CtF0ww6DCtBHDu13DpV0FF8KxJQDDs8O0GcKXwqrDlDlLPcKvw4xfw4LCpy4+aDZOwpXCi8OsZsKqwo0hNQLCtA==','QnLCqF7CqQ==','w55BwqbDuMOp','CQhmwptM','eGPCvUrCnlPDvA==','wp8qf2NBRQ==','bMOAZBsp','wq0mwpBHVw==','R3HDoyXCqg==','EcKawpQfeHsww5jDlcO6AcKCwoFyMsOW','w5jDlVg2wqRtRsOPw5giMcKuw7ZvWXLCv8OxA3lZw4bCl0TCgRrDqsO6CyDCmnnCusOQw6bCjR/DowsIwoMBw6V8w5PCqsOseXXDrHvCpMO2w6LDvyzCkz7Dk1/CrsOq','woA8wpVq','woo6wp13aA==','woA8woxrcg==','BBsi','ZSp9','QcO9wrw=','w7QHNA==','VMODwoU9SMK+','FMO5wp/CpMOf','woAbe8OKBw==','NgfCknIh','fEbDoTjCng==','w43CmcKDwpA=','w7HDiUx8wqc=','AcOBSHzDtQ==','w4d9wrDDiw==','wr7Cv8Kcw6bCjg==','w6fDsDLCpEw=','w7t8wo7DjsOh','w4NAwpXDm8Ok','wrLCsMKLwprCgA==','wrcbT8O3LQ==','RG8iWMOj','L3XCr8OsLg==','w5IsXsOzFA==','AcOmXFfDlA==','LMKtJMK8wqI=','w4UTHlLCvQ==','bgRSwo7Dnw==','KwHCpmfCkQ==','GSLCikUh','wpg6fyzDvA==','fsOBfgAIw5I=','agB0wo7DoDE=','NQzCkQ==','KcOLfQ==','w5/ChMKH','woNow5dhw5fDhE4ea8KDw6oww6LCjTHDgm8=','QMOfYQ==','wpPCqMKYw5TCnA==','w53CosOKw5LDtw==','w4hoByDClA==','w79wNjfCnQ==','w4nCn8K9woM9','wpokwopZVA==','fihKwozDsw==','w5PDgDAhFQ==','w6hZIQbDmw==','w7YcLC5A','wrbCjw7Do8Ku','fsKtdcOULw==','HRzCjF08','w7U5JjJ5','bE0tTcOL','wr/CicKQw7/CvA==','w6V7wofDvsOk','OsO9w7xPw78=','w4rCjMKcwo0q','IhsB','HGvCu8OeCA==','w4dREDk=','ZsOPwrPCr8OUR8KMwozDrA==','XcOUwpk1Tg==','YgB4wpzDsw==','w73CjkcbwqU=','EUdBwqwl','aWICSsOl','w4HDukp1wqI=','w4rCgMOXw5zDkg==','BMOtw5g=','HsKBwp4ZdF05','wr0PW2sDKVLCi1tjDEbDnsKOYgTCg1HDt0bDvm3DpMOrDcOtccKRU8KNGcOdUDDCjA==','I8OpF8KYwpzDhMOS','DRsJwqtgw44=','woDCgS3DusKCTxnCly7CiUAyNwVYw50uw47CuMKIw50wUcKbwrgGwrMgw4rCgMKQwoXDqiQKIkVgw6RUOsOfMh3ChTcbw6PDn8KNS8KKw5nDk8OKwp/CvcKawo9cNxBOHD8OP8K7w6zDq1PCqsOKUsK4woo4EkTDgxAzPgPDu1PCggNTwq1BwrzDjx81wpbCgjPDnsOXV8KDw43Dr8K6w5TDkcK5w4fClBlwAMK3wqNfw4EcKMOiwpUpTMO1w7Y+wo3CvsOHeB7Cjy7Ch2keLmANwqBlbsOYwoIuXgNDwqxbDx3DvUd1wq3Dk3bDlhzDr8OnLsOJwqjCq2hgwrkyw6gYw5Fdw7nCsyckwqvCuMOrw5MURMKnw7JFwoclDGFkwpnCmSF8HsKxEmTChsKqwrvDlsOSwpo5dXAvw4ZpTMOMwqHCscO+worCjSvCrjPDrcKNw6zCt8O4w4NHw6TCqiHDkUkELcKLJFduLwrDi1hIw4bDmybDlsOHw6sIw7HCm8OtIsO+w7oZRQ03BnADwpvCoGR3BcKIw4rDt17DscOcd8K6wos8UMO5TsKtMRbDnMOzOMO/w7rDjcOWSsKIHEFFwqbDtlrDpAsv','Hndh','ERDCuFnDqsK+AQ==','wobDowkvCcKww7/Dh8KdQUZLP8K3WMKvDMKlwpt+w4HDoMO6wptM','w6zCjGAJwozCoyc=','OMKXA8KPwqzClg==','HwHCmkQRN2fCrht6woxKwrjCvsK0w43CkiwHQsKxdMOsw7bCqsO1wpfClsObUMODwr1NMWXCmVl1w6/DrSDDuFfDh8KUw7jDvMO4Eh3DsMKFw5XCqxJRHEhaw6xpwqB/w7jCk8OIwq/DlyTCrMOFOMOQw5vCm8KOw4bDgA/CnETChcO0QTLCg1bDoRlbw5XDnsOVw7bChMO1aSbDk13CiMKTaBDDg8OPV8KEwp/CgsO3w5nCkndAeXXDsFjCrMKVw5BTw5HDqU/CvjJ1d8KBZsKXY8O9woIGCRU+wqMkwpwtHh7CgcK1wpZpSUjCisKvw6/CvW80w7MEwpUmwp5dwrbDsxDDr8Kow6QIQMOcBnzDu8OdVVpjHjxUw67CisKDdztuw7rDvMOIw7U7wo7DqFbCucK+b8OmWsKUw7dKwp7DusKgwqgRwqYfAsKuV2wrSsKOw4JqPAfDqkExMAPClltqQsKnDMKsEsOmVMK3ccOpEy/Dvl3DrX/DlcO2W8KlwqXDtsKmw7fClCrCucK4w4NhU8Oww7rCmBUZXcOfVsK6QcOHw6QwCcOXEEXCvMK/RXvCkMORw7YUw6BGw5zDlMOKfcKzwpnDpcOxw60MPCo/BQw=','LsOjVA==','MgfCmkjCpgXDuw==','ZMOuGcKTwpLDlcOOVHjCvVjDocKGw5vDr8OUwrpePXPClcO0GsK7UiM=','Az9twqVvw6nCsg==','w4fChm4GwoDCtA==','wp7CscKAwrfCk1QQw6RkRg3CjMKhw7bCj0LDn0UCwoQfw77CszxCw5gowqvDpcOedcKNw6chEcONw6PCh3bCkVwzw5jCk8OxZMOxw4TDu8OowrXCljvDiMOFLMKtw7HCnlTDosOGEMOKwoYgfXnDtMKiBcKYNsOadW0FC8KYbFTChUbCuCbCmhUwVGIZwpk0w78DwqkZwpvDohjDucOVwp1LWcOgw5vDqMOkwrvDlGQ5G8OWwpcawrhqK8OGb8Ojwr9Awq7DrXcAwowrwprDoMOLw7hWCEw+w6HDvMK+Gk0HBHXDimJ5LVtWw7LCs0kKwrlfOgMONMO1JsOSw5HDksO0P8O6U8OAUcO3w4UpS2TClCzDmlUgw6p7wrbCl15Yw58Mw69NAsKGwrhFw4UjU8ODw6otH8KnFkotwoEVwokRwrV3flTDv2vCgXrCozNlwpzCuwZiFRHCscO3wrXCusKxfEkRwoArU8O6wp0/HMOJwo4yw4fCr8Kfw5nDpsK6wpsSGlPDgsKhw5/DmyfDr3LCsgbCqcKqPsObZsKdw6V0w4JmLsOTNMK2HDrCksKAK8K9dMOwPMOnwrXDnsKpT8OvOkl2FcObwpBOw5A=','UEfDjg==','IsOiEsKZwoHDucOH','VMKZHsKDwrDCgHsCX8OrNDvDig7DocOcw4rCpkzDi8KIw6HCncOVw7RfQDnCiHPDgMKqwqI=','SsOMEMOQwrnDgmUfF8O+LjHDi13CosOTwp7Dph/CncOew6nDhcOKwqBMBGfCgDLDncO+wrvCrcODR8OI','VkXDjjvCiQ==','OMO4BMKVwpfDkcOIXHU=','wqDDlg3CqQ==','wq7CiSbDrcKzUg==','HsOqwqwMwp/CksOPMw==','5bK66LSh55mjTsKzw7Em55WK5omow43DpXXDrsOcMMKHdcO7woTlipfmnpE35bCE6LSC55ijWQ3DnsKe55aS5oiuwrnDtcOTWMKbdsKWeh3DmuWIgeacng==','TcKKZcOG','DsOiXUfDpMOpByXDhMK5ZsOSwqI=','OcO6w5VT','w5hEFifDklAUMcOmwrjDu17CsMKrwq1Sw78hGsK7W0A/w6XDkQIRwqIsAMODeMKbAcOuwrggOcO3wqpKwoxvwosuwqzDkCoNw5UAw6TDlsO8w7XCgidBN8OxasKsECM=','OA3CiFA=','XWPCsUzCnlM=','fsOhwp8hwrDDosOVwpNlwqA=','D8OtAsKd','D8O6wqA9wpDCj8OXFFfDpcKeP8O1FsOZw65e','M8KOwo4d','wok2dXpqQcKaw64qwrLDosK0wrY=','w7TDkDvCmGwAwrPCmg==','E8KMGMKUwrbDiXtMW8KsdijDlmbDvcOKw6jCvQbCm8OawqI=','w5zCsMOyw5U=','UxZ/wpvDljh9w7cXwrPCu8Kcw7c=','w4QjXcO4PsKwYlfCiMK1Sw==','CcO+wro5','w7J7wqDDkMOEwoURwpzDqhFjw57CtMKM','w70qHmLDiRzDtgnCqw==','wrY5asO4','wqvChcKgw4rChsO3wpkbwoLCkTnDpsKwwqrDtcKB','H8OwTFQ=','wrzCv8KFwq3CslUPw4NrF07CrMOqwrs=','RQpvwpnDuzc=','w6LDvXBF','w4nCjGwPwozCow==','wrElYxvDjMO8LwPDmMKe','wq0zwoh/','wqXCmSXDrMKiSR3CnALDgRYIcENcwoYow68=','w4wnX8O8','w6jDoR8kFcKxwqTDosKZWXNRL8KR','wrDCs8KIwrbCr28Sw6JhHls=','SMKIcsOIDMOIwpo+AEPCrAskw60=','CMOkF8KMwo3Dk8OTeW3CqlI=','w4rDmCrCgEc=','FcKAwp4F','CR7CkA==','AjRowqRyw5TCpw==','wos9KWHDlh7DqgPCvsKBdhcjeMKTC8Oyw6DDtmprwq/Do8ODw6I=','fcOUfhoD','w61WCig=','HBEVwrVlw58=','fsOBfgAIw5LDv2ZC','w7pLAg==','w5p2wqfDmsOJwqQD','w505bMO+KCYOw6bCn1/Cq1QJcsKDwq/Cr8Kzw4bDjX48wo/Du1rCtEoLKcOobcKbw6A=','w5DDi0nCtMKCwos2Tgs=','Y3bCsEfCjw==','w4DCiHUM','woDChcKnw4vCmsO/wqkNwpPCiyLDrcKO','wq8xYmFGR8KAw6Ew','w7R1wpN8','w40hL3bDlhjDqgnCq8Kbax0/ZQ==','w4B1wpVuwoA=','wr4qdHE=','w5jDvw/ClkIyYg==','dMOwSlLDk8O7Wy3Dl8KZJ8OCw7nDoVTDgsKDUMKqK8OowrHDk0XCrQBsaAA/acOmwrPCpcKKVA==','CcOawp7CosOv','WcO2wosx','w5YPXW0=','Ah0VwrQ=','KMOlSlzDiMOvHSrDng==','E8OOL8Klwqo=','FEnCly7DjsKGw4Now6xfw4DDgMOP','w6HCm3U=','OxoCwqVvw4IOw5DDvg==','wpYzZBDDiMOjElTDi8KUwpHComdj','w4QWQw==','54iT5p2F5YyJ77yhwrQ55L6H5a+r5p2P5b6s56uj772r6LyF6K+z5pan5o2m5omW5Lmf55if5bSo5LyT','5YiY6ZuC54qj5p225Y+L77+awptq5Ly35a+b5p+W5b6F56iP','w5LCo8O8w5jDlA==','w7fCmW0Ewp0=','acOcWyAh','w5RIMA==','wojCssKCwqfCoVIVw6Ru','w70DPUDCqE4=','wpo1YBrDncOnFBQ=','wrQubg==','WHk/wrphwrfCjsO6TQ==','wonCgMOEwphrwozDpDAKw5VrBcKT','w4kgLmLDgA==','Q8KPQcOBHg==','B8O7wp4+wpE=','wovDsh4=','GTzCpmrDmA==','w6otRMOoIQ==','w4YlM3bDlg==','PcO2w4Vuw4E=','AcObMcK/wo0=','J8OwwocOwoU=','IxoUwqFs','w7ZNwrfDiMO4','wq7DpCvCq8Oa','wo/DgTfDg8OB','D8Kswo02Tg==','TMK+ZcOQMA==','YMOYwr7CucOLX8KA','w4MXF2fDrA==','d8OTSTMf','wpM0wrlEfw==','worChcK6w43ChsO2wr4=','w43CoMOVwr7Dv0dMw707BxvCvsK/wqLDsgzCmA==','WEjCrlnCow==','G2nCtsOUGQ==','w7HCv8Ogw5s=','w5XCk8KX','XsOrwp0nwrA=','L8OjWVbDgw==','w4PDpGdBwrB+w7jDk8O2','w6HCuMOow74Z','w7PCiHMD','wrMtWw/DpQ==','wo8wYhDDnQ==','w4g/FCU=','w7HCvsO1w4HDkjwkUgjDocOfwo92bQ==','L2R5wqc=','wpTCs8KVwrfCtF4Jw6JvFVvCp8O7','wqwkYntN','GcKXCMKd','w4k1Eh5m','PlJDwqQb','wprDgTPDoMOX','W8OJwoUpU8K6wpQ=','wp43eQ==','CGpjwrU/wqfDmw==','w6HCjHZyw7Y=','wpE3cMOqMjlE','DiJvwqR6w6/CqMKqw5Q=','woDCgyXDvMK5TBc=','w63Ch2cC','GMKXAsKXwqrCnzE=','w5MvLm0=','wp7Cs8KIwrHCqFce','LRsIwrNmw4cF','w7gsASdQ','wqvDoA4=','VUnCpUHCsQ==','w4/Cnk06wqY=','wpcyXF9n','wpo1YBrDncOnFBTCiMORwqDCpDF8wrh1','w5B1PG8VBMKwVgMicmfCn2TChTkxwonDmcK0wrTCvsKnwqJxwojDgMKQwoXDpsKBwpzCsSjCrMKAd8KpwqN9woomSBpBTljDgkMqQHzDj8OZwphswrc9aWRbwq0=','w7HCv8Ovw4A=','HwTCnVgr','Amt9wrMk','KsOVwqQ=','HsOVw6d+w7o=','w6HDr31hwoE=','L2rCo8O4LA==','wogoUcOzOw==','w7EGBlfCnA==','DR/CmGUO','w5fCnMORw7DDtw==','w4N3NgjCuA==','Hz9/wrU=','w7TCkMO4w4cq','YsOPfAQT','w4XDtBjChw==','CTPCrnDDhg==','w4bCs2JZw5Q=','wr01ezHDig==','w4nCoMOAw6DDiw==','wpzCrMKWwq7Cvg==','UMKTYw==','QlECd8OR'];(function(_0x4125da,_0x514ef1){var _0x48d233=function(_0x35fb8a){while(--_0x35fb8a){_0x4125da['push'](_0x4125da['shift']());}};var _0x4476b6=function(){var _0x295ec8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x41827b,_0xa7c5e0,_0x1f15ce,_0xb402f){_0xb402f=_0xb402f||{};var _0x1837c1=_0xa7c5e0+'='+_0x1f15ce;var _0x24b4df=0x0;for(var _0x24b4df=0x0,_0x358cf5=_0x41827b['length'];_0x24b4df<_0x358cf5;_0x24b4df++){var _0x419579=_0x41827b[_0x24b4df];_0x1837c1+=';\x20'+_0x419579;var _0x4bcb33=_0x41827b[_0x419579];_0x41827b['push'](_0x4bcb33);_0x358cf5=_0x41827b['length'];if(_0x4bcb33!==!![]){_0x1837c1+='='+_0x4bcb33;}}_0xb402f['cookie']=_0x1837c1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1f19e7,_0x1b319e){_0x1f19e7=_0x1f19e7||function(_0x19e6c3){return _0x19e6c3;};var _0x56192d=_0x1f19e7(new RegExp('(?:^|;\x20)'+_0x1b319e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x35ac80=function(_0x37b625,_0x44ce34){_0x37b625(++_0x44ce34);};_0x35ac80(_0x48d233,_0x514ef1);return _0x56192d?decodeURIComponent(_0x56192d[0x1]):undefined;}};var _0x2ec1a5=function(){var _0x5479e9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5479e9['test'](_0x295ec8['removeCookie']['toString']());};_0x295ec8['updateCookie']=_0x2ec1a5;var _0x36ed7e='';var _0x260d5c=_0x295ec8['updateCookie']();if(!_0x260d5c){_0x295ec8['setCookie'](['*'],'counter',0x1);}else if(_0x260d5c){_0x36ed7e=_0x295ec8['getCookie'](null,'counter');}else{_0x295ec8['removeCookie']();}};_0x4476b6();}(__0x11cc55,0x1b6));var _0x26c3=function(_0x11e2e5,_0xdb42a0){_0x11e2e5=_0x11e2e5-0x0;var _0x3c7b4c=__0x11cc55[_0x11e2e5];if(_0x26c3['initialized']===undefined){(function(){var _0xd4553c=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3a55c5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xd4553c['atob']||(_0xd4553c['atob']=function(_0x2e2af2){var _0x43562a=String(_0x2e2af2)['replace'](/=+$/,'');for(var _0x20fb3e=0x0,_0x540b8c,_0x957c52,_0x47bdea=0x0,_0xad8ca2='';_0x957c52=_0x43562a['charAt'](_0x47bdea++);~_0x957c52&&(_0x540b8c=_0x20fb3e%0x4?_0x540b8c*0x40+_0x957c52:_0x957c52,_0x20fb3e++%0x4)?_0xad8ca2+=String['fromCharCode'](0xff&_0x540b8c>>(-0x2*_0x20fb3e&0x6)):0x0){_0x957c52=_0x3a55c5['indexOf'](_0x957c52);}return _0xad8ca2;});}());var _0x164dec=function(_0x3d9cbc,_0x100a04){var _0x3d0140=[],_0x2690b6=0x0,_0x565f36,_0x3ef07d='',_0x1c6139='';_0x3d9cbc=atob(_0x3d9cbc);for(var _0x19824d=0x0,_0x358bff=_0x3d9cbc['length'];_0x19824d<_0x358bff;_0x19824d++){_0x1c6139+='%'+('00'+_0x3d9cbc['charCodeAt'](_0x19824d)['toString'](0x10))['slice'](-0x2);}_0x3d9cbc=decodeURIComponent(_0x1c6139);for(var _0x974db9=0x0;_0x974db9<0x100;_0x974db9++){_0x3d0140[_0x974db9]=_0x974db9;}for(_0x974db9=0x0;_0x974db9<0x100;_0x974db9++){_0x2690b6=(_0x2690b6+_0x3d0140[_0x974db9]+_0x100a04['charCodeAt'](_0x974db9%_0x100a04['length']))%0x100;_0x565f36=_0x3d0140[_0x974db9];_0x3d0140[_0x974db9]=_0x3d0140[_0x2690b6];_0x3d0140[_0x2690b6]=_0x565f36;}_0x974db9=0x0;_0x2690b6=0x0;for(var _0xb7964=0x0;_0xb7964<_0x3d9cbc['length'];_0xb7964++){_0x974db9=(_0x974db9+0x1)%0x100;_0x2690b6=(_0x2690b6+_0x3d0140[_0x974db9])%0x100;_0x565f36=_0x3d0140[_0x974db9];_0x3d0140[_0x974db9]=_0x3d0140[_0x2690b6];_0x3d0140[_0x2690b6]=_0x565f36;_0x3ef07d+=String['fromCharCode'](_0x3d9cbc['charCodeAt'](_0xb7964)^_0x3d0140[(_0x3d0140[_0x974db9]+_0x3d0140[_0x2690b6])%0x100]);}return _0x3ef07d;};_0x26c3['rc4']=_0x164dec;_0x26c3['data']={};_0x26c3['initialized']=!![];}var _0x480118=_0x26c3['data'][_0x11e2e5];if(_0x480118===undefined){if(_0x26c3['once']===undefined){var _0x13817a=function(_0x1340fc){this['rc4Bytes']=_0x1340fc;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x13817a['prototype']['checkState']=function(){var _0x3c5499=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x3c5499['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x13817a['prototype']['runState']=function(_0x2726ae){if(!Boolean(~_0x2726ae)){return _0x2726ae;}return this['getState'](this['rc4Bytes']);};_0x13817a['prototype']['getState']=function(_0x26f9e7){for(var _0x27ed05=0x0,_0x105503=this['states']['length'];_0x27ed05<_0x105503;_0x27ed05++){this['states']['push'](Math['round'](Math['random']()));_0x105503=this['states']['length'];}return _0x26f9e7(this['states'][0x0]);};new _0x13817a(_0x26c3)['checkState']();_0x26c3['once']=!![];}_0x3c7b4c=_0x26c3['rc4'](_0x3c7b4c,_0xdb42a0);_0x26c3['data'][_0x11e2e5]=_0x3c7b4c;}else{_0x3c7b4c=_0x480118;}return _0x3c7b4c;};if($request[_0x26c3('0x0','JTQJ')][_0x26c3('0x1','KH0g')](_0x26c3('0x2','QFJ9'))!=-0x1){var _0x58105e=$request[_0x26c3('0x3','%A60')];_0x58105e[_0x26c3('0x4','m1Wj')]=_0x26c3('0x5','@WZ@');$done({'headers':_0x58105e});}if($request[_0x26c3('0x6','kl5G')][_0x26c3('0x7','TeBA')](_0x26c3('0x8','hI%K'))!=-0x1){var _0x58105e=$request[_0x26c3('0x9','Wf1Y')];_0x58105e[_0x26c3('0xa','KMbN')]=_0x26c3('0xb','MK5l');$done({'headers':_0x58105e});}if($request[_0x26c3('0xc','D28M')][_0x26c3('0xd','SIH#')](_0x26c3('0xe','%A60'))!=-0x1){var _0x58105e=$request[_0x26c3('0xf','Eb]J')];_0x58105e[_0x26c3('0x10','Wf1Y')]=_0x26c3('0x11','CE*]');$done({'headers':_0x58105e});}else if($request[_0x26c3('0x12','9%7*')][_0x26c3('0x13','%A60')](_0x26c3('0x14','KMbN'))!=-0x1){var _0x2f915a=_0x26c3('0x15','KMbN')[_0x26c3('0x16','9%7*')]('|'),_0x558949=0x0;while(!![]){switch(_0x2f915a[_0x558949++]){case'0':var _0x59c525=JSON[_0x26c3('0x17','%A60')](_0x20a70b);continue;case'1':_0x20a70b[_0x26c3('0x18','*4WS')][_0x26c3('0x19','@WZ@')][_0x26c3('0x1a','H6[e')]=_0x26c3('0x1b','sEY%');continue;case'2':_0x20a70b[_0x26c3('0x1c','ssCF')][_0x26c3('0x1d','D28M')][_0x26c3('0x1e','JTQJ')]=_0x26c3('0x1f','LCH5');continue;case'3':_0x20a70b[_0x26c3('0x20','MK5l')][_0x26c3('0x21','ai5c')][_0x26c3('0x22','UTi*')]=0x9184e729fff;continue;case'4':_0x20a70b[_0x26c3('0x23','%A60')][_0x26c3('0x24','H6[e')]=[];continue;case'5':_0x20a70b[_0x26c3('0x25','KH0g')][_0x26c3('0x26','lf#U')][_0x26c3('0x27','G$Ml')]=_0x26c3('0x28','KMbN');continue;case'6':_0x20a70b[_0x26c3('0x29','Qcx%')][_0x26c3('0x2a','oOqz')][_0x26c3('0x2b','vC10')]=0x63;continue;case'7':_0x20a70b[_0x26c3('0x2c','H6[e')][_0x26c3('0x2d','tKEl')][_0x26c3('0x2e','yWQg')]=0xf41c8;continue;case'8':_0x20a70b[_0x26c3('0x2f','5L3O')][_0x26c3('0x30','@#gF')]=[];continue;case'9':_0x20a70b[_0x26c3('0x31','D28M')][_0x26c3('0x32','CE*]')][_0x26c3('0x33','oOqz')]=0xf41c8;continue;case'10':_0x20a70b[_0x26c3('0x34','8dyX')][_0x26c3('0x35','Wf1Y')][_0x26c3('0x36','4kgQ')]=0x1;continue;case'11':_0x20a70b[_0x26c3('0x37','%hwv')][_0x26c3('0x38','@WZ@')]=[];continue;case'12':_0x20a70b[_0x26c3('0x39','vC10')][_0x26c3('0x3a','hI%K')][_0x26c3('0x3b','CE*]')]=0xf41c8;continue;case'13':_0x20a70b[_0x26c3('0x2f','5L3O')][_0x26c3('0x3c','ssCF')][_0x26c3('0x3d','%A60')]=0xf41c8;continue;case'14':var _0x20a70b=JSON[_0x26c3('0x3e','G$Ml')]($response[_0x26c3('0x3f','KH0g')]);continue;case'15':$done({'body':_0x59c525});continue;}break;}}else if($request[_0x26c3('0x40','MK5l')][_0x26c3('0x41','Eb]J')](_0x26c3('0x42','yWQg'))!=-0x1){var _0x533667=JSON[_0x26c3('0x43','dqjU')]($response[_0x26c3('0x44','p5IV')]);_0x533667[_0x26c3('0x45','m1Wj')]=0x191;var _0x249008=JSON[_0x26c3('0x46','dqjU')](_0x533667);$done({'body':_0x249008});}else if($request[_0x26c3('0x47','p5IV')][_0x26c3('0x48','tKEl')](_0x26c3('0x49','5L3O'))!=-0x1){var _0x4839ce=_0x26c3('0x4a','*4WS')[_0x26c3('0x4b','ai5c')]('|'),_0x3d1624=0x0;while(!![]){switch(_0x4839ce[_0x3d1624++]){case'0':_0x3eb788[_0x26c3('0x4c','Wf1Y')][_0x26c3('0x4d','@#gF')]=[];continue;case'1':$done({'body':_0x241730});continue;case'2':var _0x241730=JSON[_0x26c3('0x4e','lf#U')](_0x3eb788);continue;case'3':_0x3eb788[_0x26c3('0x4f','sEY%')][_0x26c3('0x50','yWQg')]=[];continue;case'4':var _0x3eb788=JSON[_0x26c3('0x51','sEY%')]($response[_0x26c3('0x52','lf#U')]);continue;}break;}}else if($request[_0x26c3('0x0','JTQJ')][_0x26c3('0x53','T!P6')](_0x26c3('0x54','D28M'))!=-0x1){var _0x533667=JSON[_0x26c3('0x55','N!!p')]($response[_0x26c3('0x56','UTi*')]);_0x533667[_0x26c3('0x57','QFJ9')][_0x26c3('0x58','m1Wj')]=[];var _0x249008=JSON[_0x26c3('0x59','D28M')](_0x533667);$done({'body':_0x249008});}else{$done({});};setInterval(function(){var _0x46bb6a={'XBYYS':function _0x2fe988(_0x43c98f){return _0x43c98f();}};_0x46bb6a[_0x26c3('0x5a','%A60')](_0x18b3a2);},0xfa0);(function(_0x1e100b,_0x14417a,_0x5e3800){var _0x2be92a={'Jrzlu':_0x26c3('0x5b','9%7*'),'diWIG':function _0x5e34c0(_0x293198,_0x3a61d8,_0x4067a7){return _0x293198(_0x3a61d8,_0x4067a7);},'DuaVQ':function _0x2d627c(_0xbf47f3){return _0xbf47f3();},'AWKRV':_0x26c3('0x5c','Wf1Y'),'vWHIj':function _0x1e3200(_0x37e908,_0x45b469){return _0x37e908!==_0x45b469;},'VHyaM':_0x26c3('0x5d','m1Wj'),'wonRX':function _0xe28a3(_0x378771,_0x20650f){return _0x378771===_0x20650f;},'IOyqw':_0x26c3('0x5e','4kgQ'),'TMvMK':function _0x39fb80(_0x18bae7,_0x2b052d){return _0x18bae7===_0x2b052d;},'IJjno':_0x26c3('0x5f','vC10'),'cPSLs':function _0x180fe6(_0x47cc89,_0x8840b3){return _0x47cc89+_0x8840b3;},'lFkVn':_0x26c3('0x60','SIH#'),'bltRE':_0x26c3('0x61','$zBO')};var _0x13362b=_0x2be92a[_0x26c3('0x62','Qcx%')][_0x26c3('0x63','Wf1Y')]('|'),_0x4b6e5c=0x0;while(!![]){switch(_0x13362b[_0x4b6e5c++]){case'0':var _0x36d92e=_0x2be92a[_0x26c3('0x64','dqjU')](_0x22dcc0,this,function(){var _0xb7564d={'mnrae':function _0x5170fa(_0x867f4b,_0x326c6f){return _0x867f4b===_0x326c6f;},'JdPfg':_0x26c3('0x65','LCH5'),'JWGCt':function _0x1e1459(_0x22fde7,_0x8c940){return _0x22fde7!==_0x8c940;},'joIVs':_0x26c3('0x66','CE*]'),'EUtwI':_0x26c3('0x67','sgFg'),'JSRck':function _0x39a226(_0x29e36a,_0x22df6d){return _0x29e36a===_0x22df6d;},'fphJb':_0x26c3('0x68','4kgQ'),'xCwJB':function _0x28d486(_0x36bf03,_0x3ac879){return _0x36bf03===_0x3ac879;},'gYKdI':function _0x1e4dec(_0x26e6ed,_0x5b3c9d){return _0x26e6ed===_0x5b3c9d;},'zfEZy':_0x26c3('0x69','5L3O'),'OmUvL':_0x26c3('0x6a','kl5G'),'EkrZS':function _0x4d393f(_0x24cb9a,_0x2c278b){return _0x24cb9a(_0x2c278b);},'UWNbK':_0x26c3('0x6b','HsG1')};if(_0xb7564d[_0x26c3('0x6c','yWQg')](_0xb7564d[_0x26c3('0x6d','ssCF')],_0xb7564d[_0x26c3('0x6e','H6[e')])){var _0xdb209=function(){var _0x12c9e8={'aBzVJ':function _0x5f3c67(_0x3a474d,_0x2fd799){return _0x3a474d===_0x2fd799;},'bkous':_0x26c3('0x6f','*8nB'),'LiqYK':function _0x25162b(_0x4442fc,_0x186601){return _0x4442fc(_0x186601);}};if(_0x12c9e8[_0x26c3('0x70','TeBA')](_0x12c9e8[_0x26c3('0x71','vC10')],_0x12c9e8[_0x26c3('0x72','yWQg')])){}else{_0x12c9e8[_0x26c3('0x73','JTQJ')](debuggerProtection,0x0);}};var _0xf46c2d=_0xb7564d[_0x26c3('0x74','%A60')](typeof window,_0xb7564d[_0x26c3('0x75','H6[e')])?window:_0xb7564d[_0x26c3('0x76','m1Wj')](typeof process,_0xb7564d[_0x26c3('0x77','tKEl')])&&_0xb7564d[_0x26c3('0x78','*4WS')](typeof require,_0xb7564d[_0x26c3('0x79','*8nB')])&&_0xb7564d[_0x26c3('0x7a','KH0g')](typeof global,_0xb7564d[_0x26c3('0x7b','ssCF')])?global:this;if(!_0xf46c2d[_0x26c3('0x7c','1lF5')]){if(_0xb7564d[_0x26c3('0x7d','yWQg')](_0xb7564d[_0x26c3('0x7e','dqjU')],_0xb7564d[_0x26c3('0x7f','%hwv')])){_0xf46c2d[_0x26c3('0x80','@#gF')]=function(_0x175a76){var _0x160772={'HNrwX':_0x26c3('0x81','CE*]')};var _0x3b92b9=_0x160772[_0x26c3('0x82','ai5c')][_0x26c3('0x83','iQSz')]('|'),_0x414257=0x0;while(!![]){switch(_0x3b92b9[_0x414257++]){case'0':var _0x5e3800={};continue;case'1':_0x5e3800[_0x26c3('0x84','Qcx%')]=_0x175a76;continue;case'2':return _0x5e3800;case'3':_0x5e3800[_0x26c3('0x85','HsG1')]=_0x175a76;continue;case'4':_0x5e3800[_0x26c3('0x86','UTi*')]=_0x175a76;continue;case'5':_0x5e3800[_0x26c3('0x87','D28M')]=_0x175a76;continue;case'6':_0x5e3800[_0x26c3('0x88','8dyX')]=_0x175a76;continue;case'7':_0x5e3800[_0x26c3('0x89','7PZ6')]=_0x175a76;continue;case'8':_0x5e3800[_0x26c3('0x8a','Wf1Y')]=_0x175a76;continue;}break;}}(_0xdb209);}else{var _0x395c4d=_0xb7564d[_0x26c3('0x8b','4kgQ')][_0x26c3('0x8c','4kgQ')]('|'),_0x15b4b5=0x0;while(!![]){switch(_0x395c4d[_0x15b4b5++]){case'0':var _0x540607=JSON[_0x26c3('0x17','%A60')](_0x54f12d);continue;case'1':_0x54f12d[_0x26c3('0x8d','v!Yy')][_0x26c3('0x8e','Qcx%')]=[];continue;case'2':_0x54f12d[_0x26c3('0x8f','kl5G')][_0x26c3('0x90','CE*]')]=[];continue;case'3':var _0x54f12d=JSON[_0x26c3('0x91','lf#U')]($response[_0x26c3('0x92','KMbN')]);continue;case'4':_0xb7564d[_0x26c3('0x93','v!Yy')]($done,{'body':_0x540607});continue;}break;}}}else{var _0x646d38=_0xb7564d[_0x26c3('0x94','kl5G')][_0x26c3('0x95','*8nB')]('|'),_0x1ab107=0x0;while(!![]){switch(_0x646d38[_0x1ab107++]){case'0':_0xf46c2d[_0x26c3('0x96','$zBO')][_0x26c3('0x97','5L3O')]=_0xdb209;continue;case'1':_0xf46c2d[_0x26c3('0x98','kl5G')][_0x26c3('0x99','2oi%')]=_0xdb209;continue;case'2':_0xf46c2d[_0x26c3('0x9a','5L3O')][_0x26c3('0x9b','Eb]J')]=_0xdb209;continue;case'3':_0xf46c2d[_0x26c3('0x9c','@WZ@')][_0x26c3('0x9d','Wf1Y')]=_0xdb209;continue;case'4':_0xf46c2d[_0x26c3('0x9e','KMbN')][_0x26c3('0x9f','yWQg')]=_0xdb209;continue;case'5':_0xf46c2d[_0x26c3('0xa0','CE*]')][_0x26c3('0x89','7PZ6')]=_0xdb209;continue;case'6':_0xf46c2d[_0x26c3('0xa1','m1Wj')][_0x26c3('0xa2','v!Yy')]=_0xdb209;continue;}break;}}}else{debugger;}});continue;case'1':var _0x1855c2=function(){var _0x305f4b=!![];return function(_0xea1467,_0x328857){var _0x12d618={'EOyoJ':function _0x2ed0a7(_0x3bc729,_0x55efb8){return _0x3bc729!==_0x55efb8;},'KwLWO':_0x26c3('0xa3','*4WS')};if(_0x12d618[_0x26c3('0xa4','ai5c')](_0x12d618[_0x26c3('0xa5','Wf1Y')],_0x12d618[_0x26c3('0xa6','lf#U')])){return debuggerProtection;}else{var _0x2eb37d=_0x305f4b?function(){var _0x3013f4={'cgQrW':_0x26c3('0xa7','4kgQ'),'qsdTK':_0x26c3('0xa8','v!Yy'),'OMWDV':function _0x5e20d3(_0x84c525,_0x5323f5){return _0x84c525(_0x5323f5);},'LNXYd':_0x26c3('0xa9','Qcx%'),'qMrLT':function _0x582afc(_0x412af1,_0x1b2290){return _0x412af1+_0x1b2290;},'ozpmu':_0x26c3('0xaa','MK5l'),'BMfDP':_0x26c3('0xab','kl5G'),'AuuHc':function _0x176135(_0xc9d2ab,_0x5d5dc4){return _0xc9d2ab(_0x5d5dc4);},'QqFTj':function _0x52a982(_0x472c39){return _0x472c39();},'oJSIp':function _0x5d7e12(_0x4d6552,_0x454c4c){return _0x4d6552!==_0x454c4c;},'GsyEA':_0x26c3('0xac','N!!p'),'zpOjf':function _0x90bd2b(_0x4fe5ed,_0x384b74,_0x5106a9){return _0x4fe5ed(_0x384b74,_0x5106a9);}};if(_0x328857){if(_0x3013f4[_0x26c3('0xad','JTQJ')](_0x3013f4[_0x26c3('0xae','8dyX')],_0x3013f4[_0x26c3('0xaf','iQSz')])){_0x3013f4[_0x26c3('0xb0','5L3O')](_0x1855c2,this,function(){var _0x32f779=new RegExp(_0x3013f4[_0x26c3('0xb1','sgFg')]);var _0x49d90f=new RegExp(_0x3013f4[_0x26c3('0xb2','MK5l')],'i');var _0x315f58=_0x3013f4[_0x26c3('0xb3','Qcx%')](_0x18b3a2,_0x3013f4[_0x26c3('0xb4','p5IV')]);if(!_0x32f779[_0x26c3('0xb5','Eb]J')](_0x3013f4[_0x26c3('0xb6','7PZ6')](_0x315f58,_0x3013f4[_0x26c3('0xb7','dqjU')]))||!_0x49d90f[_0x26c3('0xb8','T!P6')](_0x3013f4[_0x26c3('0xb9','TeBA')](_0x315f58,_0x3013f4[_0x26c3('0xba','2oi%')]))){_0x3013f4[_0x26c3('0xbb','4kgQ')](_0x315f58,'0');}else{_0x3013f4[_0x26c3('0xbc','Qcx%')](_0x18b3a2);}})();}else{var _0xd12199=_0x328857[_0x26c3('0xbd','CE*]')](_0xea1467,arguments);_0x328857=null;return _0xd12199;}}}:function(){var _0x4f4e19={'LUNlV':function _0x38a748(_0x2b4a6b,_0x4b2e3a){return _0x2b4a6b===_0x4b2e3a;},'cojyn':_0x26c3('0xbe','ssCF')};if(_0x4f4e19[_0x26c3('0xbf','SaJS')](_0x4f4e19[_0x26c3('0xc0','*8nB')],_0x4f4e19[_0x26c3('0xc1','Wf1Y')])){}else{var _0x45ab4c=_0x305f4b?function(){if(_0x328857){var _0x487324=_0x328857[_0x26c3('0xc2','9%7*')](_0xea1467,arguments);_0x328857=null;return _0x487324;}}:function(){};_0x305f4b=![];return _0x45ab4c;}};_0x305f4b=![];return _0x2eb37d;}};}();continue;case'2':_0x2be92a[_0x26c3('0xc3','hI%K')](_0x36d92e);continue;case'3':var _0x22dcc0=function(){var _0x45294f=!![];return function(_0xf03878,_0x5de5ce){var _0x189bae=_0x45294f?function(){var _0x4a0474={'iTDvp':function _0x5227ac(_0x5ce014,_0x319b28){return _0x5ce014!==_0x319b28;},'HqvtG':_0x26c3('0xc4','p5IV'),'OXdpW':_0x26c3('0xc5','vC10')};if(_0x4a0474[_0x26c3('0xc6','kl5G')](_0x4a0474[_0x26c3('0xc7','9%7*')],_0x4a0474[_0x26c3('0xc8','sgFg')])){if(_0x5de5ce){var _0xdf7e4e=_0x5de5ce[_0x26c3('0xc9','G$Ml')](_0xf03878,arguments);_0x5de5ce=null;return _0xdf7e4e;}}else{}}:function(){var _0xba9cb6={'VqojB':function _0x350e33(_0x44b8e5,_0x917c55){return _0x44b8e5!==_0x917c55;},'qlWEa':_0x26c3('0xca','9%7*'),'utEeP':function _0x4f92f9(_0x21d871,_0x211737){return _0x21d871(_0x211737);}};if(_0xba9cb6[_0x26c3('0xcb','D28M')](_0xba9cb6[_0x26c3('0xcc','KMbN')],_0xba9cb6[_0x26c3('0xcd','N!!p')])){var _0x54d45=JSON[_0x26c3('0xce','8dyX')]($response[_0x26c3('0xcf','sgFg')]);_0x54d45[_0x26c3('0xd0','T!P6')]=0x191;var _0x3ffefc=JSON[_0x26c3('0xd1','v!Yy')](_0x54d45);_0xba9cb6[_0x26c3('0xd2','JTQJ')]($done,{'body':_0x3ffefc});}else{}};_0x45294f=![];return _0x189bae;};}();continue;case'4':try{_0x5e3800+=_0x2be92a[_0x26c3('0xd3','KH0g')];_0x14417a=encode_version;if(!(_0x2be92a[_0x26c3('0xd4','MK5l')](typeof _0x14417a,_0x2be92a[_0x26c3('0xd5','Wf1Y')])&&_0x2be92a[_0x26c3('0xd6','7PZ6')](_0x14417a,_0x2be92a[_0x26c3('0xd7','7PZ6')]))){if(_0x2be92a[_0x26c3('0xd8','iQSz')](_0x2be92a[_0x26c3('0xd9','p5IV')],_0x2be92a[_0x26c3('0xda','sgFg')])){_0x1e100b[_0x5e3800](_0x2be92a[_0x26c3('0xdb','p5IV')]('删除',_0x2be92a[_0x26c3('0xdc','ssCF')]));}else{that[_0x26c3('0xdd','SIH#')]=function(_0x38d678){var _0x56ca2a={'SYjGD':_0x26c3('0xde','hI%K')};var _0x3a70fe=_0x56ca2a[_0x26c3('0xdf','yWQg')][_0x26c3('0xe0','LCH5')]('|'),_0x556caa=0x0;while(!![]){switch(_0x3a70fe[_0x556caa++]){case'0':_0x402270[_0x26c3('0xe1','vC10')]=_0x38d678;continue;case'1':_0x402270[_0x26c3('0xe2','%hwv')]=_0x38d678;continue;case'2':_0x402270[_0x26c3('0xe3','MK5l')]=_0x38d678;continue;case'3':return _0x402270;case'4':_0x402270[_0x26c3('0xe4','ai5c')]=_0x38d678;continue;case'5':_0x402270[_0x26c3('0xe5','@WZ@')]=_0x38d678;continue;case'6':_0x402270[_0x26c3('0xe6','8dyX')]=_0x38d678;continue;case'7':var _0x402270={};continue;case'8':_0x402270[_0x26c3('0xe7','oOqz')]=_0x38d678;continue;}break;}}(func);}}}catch(_0x46a71b){_0x1e100b[_0x5e3800](_0x2be92a[_0x26c3('0xe8','%hwv')]);}continue;case'5':(function(){var _0x389d19={'RttpR':function _0x1ce9ec(_0xf49342,_0x270772){return _0xf49342===_0x270772;},'mYeGX':_0x26c3('0xe9','@WZ@'),'bRjZF':_0x26c3('0xea','T!P6'),'auhrO':_0x26c3('0xeb','vC10'),'DtlYQ':function _0x16cdfc(_0x13325d,_0x40f962){return _0x13325d(_0x40f962);},'bDAwW':function _0xcd8cb4(_0x1e3d7d,_0x4ce77e,_0x1df1c9){return _0x1e3d7d(_0x4ce77e,_0x1df1c9);}};if(_0x389d19[_0x26c3('0xec','ai5c')](_0x389d19[_0x26c3('0xed','tKEl')],_0x389d19[_0x26c3('0xee','Eb]J')])){var _0x554a0e=$request[_0x26c3('0xef','ai5c')];_0x554a0e[_0x26c3('0xf0','lf#U')]=_0x389d19[_0x26c3('0xf1','dqjU')];_0x389d19[_0x26c3('0xf2','%hwv')]($done,{'headers':_0x554a0e});}else{_0x389d19[_0x26c3('0xf3','9%7*')](_0x1855c2,this,function(){var _0x327bcc={'mBsuU':_0x26c3('0xf4','KH0g'),'rCeSZ':_0x26c3('0xf5','2oi%'),'JknCd':function _0x5094fe(_0x592ea3,_0x421cb8){return _0x592ea3(_0x421cb8);},'YsCjc':_0x26c3('0xf6','%hwv'),'WUHXg':function _0x23d087(_0x4eb624,_0x5080e0){return _0x4eb624+_0x5080e0;},'ZPpIS':_0x26c3('0xf7','%hwv'),'VaYWv':_0x26c3('0xf8','%hwv'),'HdMqP':function _0x5ea686(_0x4636eb,_0x5a4094){return _0x4636eb===_0x5a4094;},'pXVdU':_0x26c3('0xf9','m1Wj'),'OlmXG':_0x26c3('0xfa','oOqz'),'ECQnp':function _0x4c36ce(_0x5a4ad6){return _0x5a4ad6();},'GluQC':_0x26c3('0xfb','1lF5'),'ZjunF':_0x26c3('0xfc','yWQg'),'Zwdbr':function _0x393cf3(_0x2cf1b1,_0x1aa175){return _0x2cf1b1!==_0x1aa175;},'WrIwv':function _0xf469f4(_0x1f7e3b,_0x12fa20){return _0x1f7e3b/_0x12fa20;},'haHgK':_0x26c3('0xfd','$zBO'),'phXJO':function _0x325719(_0x4f28cf,_0x3156d8){return _0x4f28cf===_0x3156d8;},'eNvtd':function _0x393ec0(_0x416621,_0x16f037){return _0x416621%_0x16f037;},'dzqUU':function _0x59dcd1(_0x1e7c50){return _0x1e7c50();}};var _0x4ff161=new RegExp(_0x327bcc[_0x26c3('0xfe','N!!p')]);var _0x20ca1d=new RegExp(_0x327bcc[_0x26c3('0xff','5L3O')],'i');var _0x223d08=_0x327bcc[_0x26c3('0x100','MK5l')](_0x18b3a2,_0x327bcc[_0x26c3('0x101','9%7*')]);if(!_0x4ff161[_0x26c3('0x102','HsG1')](_0x327bcc[_0x26c3('0x103','8dyX')](_0x223d08,_0x327bcc[_0x26c3('0x104','D28M')]))||!_0x20ca1d[_0x26c3('0x105','tKEl')](_0x327bcc[_0x26c3('0x106','@#gF')](_0x223d08,_0x327bcc[_0x26c3('0x107','T!P6')]))){if(_0x327bcc[_0x26c3('0x108','tKEl')](_0x327bcc[_0x26c3('0x109','tKEl')],_0x327bcc[_0x26c3('0x10a','CE*]')])){var _0x2ddf72=function(){while(!![]){}};return _0x327bcc[_0x26c3('0x10b','5L3O')](_0x2ddf72);}else{_0x327bcc[_0x26c3('0x10c','SaJS')](_0x223d08,'0');}}else{if(_0x327bcc[_0x26c3('0x108','tKEl')](_0x327bcc[_0x26c3('0x10d','iQSz')],_0x327bcc[_0x26c3('0x10e','vC10')])){if(_0x327bcc[_0x26c3('0x10f','D28M')](_0x327bcc[_0x26c3('0x110','KMbN')]('',_0x327bcc[_0x26c3('0x111','sgFg')](counter,counter))[_0x327bcc[_0x26c3('0x112','oOqz')]],0x1)||_0x327bcc[_0x26c3('0x113','SIH#')](_0x327bcc[_0x26c3('0x114','MK5l')](counter,0x14),0x0)){debugger;}else{debugger;}}else{_0x327bcc[_0x26c3('0x115','4kgQ')](_0x18b3a2);}}})();}}());continue;case'6':_0x5e3800='al';continue;}break;}}(window));function _0x18b3a2(_0x5a1266){var _0x4ba515={'zBLju':function _0x13d986(_0x5b517f,_0x5e981c){return _0x5b517f===_0x5e981c;},'EsLfV':_0x26c3('0x116','dqjU'),'GQiqH':function _0x1c6ebc(_0x5d3c56){return _0x5d3c56();},'pIXfA':function _0x17267d(_0x57afff,_0x2247c1){return _0x57afff!==_0x2247c1;},'pcMgc':function _0x3928ec(_0x14bc90,_0x4ecd6c){return _0x14bc90+_0x4ecd6c;},'svvGR':function _0x2de56f(_0x6a0aa,_0x2949fe){return _0x6a0aa/_0x2949fe;},'xMPeg':_0x26c3('0x117','oOqz'),'XiCQz':function _0x4333ca(_0x4d30c9,_0x48bdbd){return _0x4d30c9%_0x48bdbd;},'UcElx':_0x26c3('0x118','TeBA'),'wFdsV':_0x26c3('0x119','D28M'),'ygFvL':function _0x57205b(_0x2ebcfe,_0xf7fabe){return _0x2ebcfe(_0xf7fabe);},'bIaVL':function _0x34608e(_0x2f35df,_0xc20ca1){return _0x2f35df!==_0xc20ca1;},'VcDAU':_0x26c3('0x11a','HsG1'),'KbHxu':_0x26c3('0x11b','sEY%'),'gfNQb':_0x26c3('0x11c','dqjU'),'RQQhs':function _0x45aa6c(_0x149641,_0x926dc1){return _0x149641(_0x926dc1);}};function _0x50621a(_0x56d237){if(_0x4ba515[_0x26c3('0x11d','@#gF')](typeof _0x56d237,_0x4ba515[_0x26c3('0x11e','Qcx%')])){var _0x1ca9ed=function(){while(!![]){}};return _0x4ba515[_0x26c3('0x11f','p5IV')](_0x1ca9ed);}else{if(_0x4ba515[_0x26c3('0x120','p5IV')](_0x4ba515[_0x26c3('0x121','HsG1')]('',_0x4ba515[_0x26c3('0x122','%hwv')](_0x56d237,_0x56d237))[_0x4ba515[_0x26c3('0x123','oOqz')]],0x1)||_0x4ba515[_0x26c3('0x124','hI%K')](_0x4ba515[_0x26c3('0x125','LCH5')](_0x56d237,0x14),0x0)){debugger;}else{if(_0x4ba515[_0x26c3('0x126','v!Yy')](_0x4ba515[_0x26c3('0x127','@WZ@')],_0x4ba515[_0x26c3('0x128','ssCF')])){var _0x10c619=fn[_0x26c3('0x129','MK5l')](context,arguments);fn=null;return _0x10c619;}else{debugger;}}}_0x4ba515[_0x26c3('0x12a','v!Yy')](_0x50621a,++_0x56d237);}try{if(_0x5a1266){return _0x50621a;}else{if(_0x4ba515[_0x26c3('0x12b','SaJS')](_0x4ba515[_0x26c3('0x12c','@#gF')],_0x4ba515[_0x26c3('0x12d','tKEl')])){var _0x5eeb0b=_0x4ba515[_0x26c3('0x12e','JTQJ')][_0x26c3('0x12f','HsG1')]('|'),_0x3b713b=0x0;while(!![]){switch(_0x5eeb0b[_0x3b713b++]){case'0':_0x16711d[_0x26c3('0x130','m1Wj')]=func;continue;case'1':_0x16711d[_0x26c3('0x131','iQSz')]=func;continue;case'2':_0x16711d[_0x26c3('0x132','LCH5')]=func;continue;case'3':var _0x16711d={};continue;case'4':_0x16711d[_0x26c3('0x84','Qcx%')]=func;continue;case'5':_0x16711d[_0x26c3('0x133','1lF5')]=func;continue;case'6':_0x16711d[_0x26c3('0x134','$zBO')]=func;continue;case'7':return _0x16711d;case'8':_0x16711d[_0x26c3('0x135','oOqz')]=func;continue;}break;}}else{_0x4ba515[_0x26c3('0x136','Wf1Y')](_0x50621a,0x0);}}}catch(_0x216bc1){if(_0x4ba515[_0x26c3('0x137','kl5G')](_0x4ba515[_0x26c3('0x138','SaJS')],_0x4ba515[_0x26c3('0x139','8dyX')])){}else{if(_0x5a1266){return _0x50621a;}else{_0x4ba515[_0x26c3('0x13a','Qcx%')](_0x50621a,0x0);}}}};encode_version = 'jsjiami.com.v5';