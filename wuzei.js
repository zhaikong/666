/*
 *
 *
脚本功能：污贼直播（前神户）会员+去广告
软件版本：0.8.0++
下载地址：
脚本作者：
更新时间：2024年,6.20
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >18+ 污贼直播（前神户）会员+去广告
^https?:\/\/.+Api\/(Account\/Login|App\/Splash|App\/Update|App\/PlatData|App\/homeData).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/wuzei.js
^https?:\/\/videocloud.cn-hangzhou.log.aliyuncs.com\/logstores\/newplayer\/track url request-body .+ request-body null,
[mitm] 
hostname = www.auth.open.52kuajing002.51kuajing.net,*.aliyuncs.com,videocloud.cn-hangzhou.log.aliyuncs.com
*
*
*/


if($request["\u0075\u0072\u006c"]["\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0073"]("hsalpS/ppA/ipA/".split("").reverse().join(""))){let body=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);Object["\u0061\u0073\u0073\u0069\u0067\u006e"](body["\u0072\u0065\u0073\u0075\u006c\u0074"],{"\u0063\u006f\u0075\u006e\u0074\u0064\u006f\u0077\u006e\u005f\u0074\u0069\u006d\u0065":0x1,"\u0069\u006d\u0061\u0067\u0065":"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u007a\u0064\u0069\u006d\u0067\u002e\u006c\u0069\u0066\u0065\u0077\u0065\u0065\u006b\u002e\u0063\u006f\u006d\u002e\u0063\u006e\u002f\u0061\u0070\u0070\u002f\u0032\u0030\u0032\u0034\u0030\u0036\u0031\u0034\u002f\u0031\u0037\u0031\u0038\u0033\u0031\u0031\u0039\u0036\u0036\u0035\u0030\u0030\u0032\u0034\u0031\u0035\u002e\u006a\u0070\u0067","\u006c\u0069\u006e\u006b":"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0074\u002e\u006d\u0065\u002f\u0047\u0069\u0065\u0047\u0069\u0065\u0037\u0037\u0037"});$done({"\u0062\u006f\u0064\u0079":JSON['stringify'](body)});}else if($request['url']['includes']('/Api/Account/Login')){let body=JSON['parse']($response["\u0062\u006f\u0064\u0079"]);Object["\u0061\u0073\u0073\u0069\u0067\u006e"](body,{'status':!![],"\u0072\u0065\u0073\u0075\u006c\u0074":{"\u0075\u0073\u0065\u0072\u006e\u0061\u006d\u0065":"\u0031\u0037\u0030\u0033\u0033\u0037\u0030\u0033\u0033\u0032\u0039","\u0076\u0069\u0070\u005f\u0065\u0078\u0070\u0069\u0072\u0079\u005f\u0064\u0061\u0079\u0073":-(0x4123a^0x4123b),"\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u005f\u0069\u0064":'100025166','token':'af973bcddab8ab3c6884c3b6f1ff313a',"\u0076\u0069\u0070\u005f\u0065\u0078\u0070\u0069\u0072\u0079\u005f\u0074\u0069\u006d\u0065":0x0},"\u0063\u006f\u0064\u0065":0x0});$notify("777eiGeiG/em.t//:sptth".split("").reverse().join("")),$done({"\u0062\u006f\u0064\u0079":JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](body)});}else if($request["\u0075\u0072\u006c"]['includes']("etadpU/ppA/ipA/".split("").reverse().join(""))){let body=JSON["\u0070\u0061\u0072\u0073\u0065"]($response['body']);Object['assign'](body,{'status':!![],'result':{"\u0066\u006f\u0072\u0063\u0065\u0055\u0070\u0064\u0061\u0074\u0065":![]},"\u0070\u006f\u0070\u0055\u0070":{}});$done({"\u0062\u006f\u0064\u0079":JSON['stringify'](body)});}else if($request['url']["\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0073"]("/ppA/ipA/".split("").reverse().join(""))){let body=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);Object["\u0061\u0073\u0073\u0069\u0067\u006e"](body,{"\u0072\u0065\u0073\u0075\u006c\u0074":null});$done({'body':JSON['stringify'](body)});}