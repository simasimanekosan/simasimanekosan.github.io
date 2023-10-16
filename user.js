// --- ユーザエージェント取得 -----------------------------
var ua = navigator.userAgent.toLowerCase;
// --- OS判定 ---------------------------------
if(ua.indexOf('windows') > 0){
if(ua.indexOf('phone') > 0){
alert('Windows Phoneを使ってますね。ようこそ')
}else{
alert('windowsを使っていますね。ようこそ')
}
}
else if((ua.indexOf('mac') > 0) && (ua.indexOf('os') > 0)){
if((ua.indexOf('iphone') > 0) || (ua.indexOf('ipad') > 0) || (ua.indexOf('ipod') > 0)){
alert('iosを使っていますね。ようこそ')
}else{
alert('macosを使っていますね。ようこそ')
}
}
else if(ua.indexOf('android') > 0){
alert('androidosを使っていますね。ようこそ')
}
else if((ua.indexOf('linux') > 0) || (ua.indexOf('sunos') > 0) || (ua.indexOf('bsd') > 0)){
alert('linuxosを使っていますね。ようこそ')
}
else if((ua.indexOf('nintendo') > 0) || (ua.indexOf('playstation') > 0)){
alert('ゲーム機を使っていますね。ようこそ')
}
else if((ua.indexOf('docomo') > 0) || (ua.indexOf('kddi') > 0) || (ua.indexOf('softbank') > 0) || (ua.indexOf('j-phone') > 0) || (ua.indexOf('willcom') > 0)){
alert('ガラケーを使っていますね。ようこそ')
}
else{
alert('このosは不明です 。ようこそ')
}
