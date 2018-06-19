$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $(".divlink, .nlink").live("click", function () {
        var href = $(this).attr('href');
        if (href != '')
            $.gotoUrl(href);
        return false;
    });

    $.getToken = function () {
        return $("div#token").text();
    }

    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    }

    $.isSafeStr = function (str) {
        var reg = /^([a-zA-Z0-9_-])+/;
        return reg.test(str);
    }
});
