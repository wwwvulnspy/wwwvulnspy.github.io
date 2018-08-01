$(function(){
        $.extend({
                escapeHtml : function(str) {
                        var entityMap = {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': '&quot;',
                                "'": '&#39;',
                                "/": '&#x2F;'
                        };
                        return String(str).replace(/[&<>"'\/]/g, function (s) {
                                return entityMap[s];
                        });
                }
	});
        
        
	
	$.extend({
		gotoUrl : function(url) {
			window.location.href = url;
		}
	});
});
function randomString(len) {
　　len = len || 32;
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}
