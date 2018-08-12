/* OH HELL NO */


(function (d, w, _onLoad) {
    /// the linter was saying line tooo long bu ti  have 3 monitors hahahahhahahah i have as much space as  i want
    var comps = ['google', 'youtube', 'facebook', 'baidu', 'wikipedia.org', 'reddit', 'yahoo', 'qq', 'taobao', 'amazon', 'twitter', 'sohu', 'instagram', 'vk', 'jd', 'sina.com.cn', 'weibo', 'yandex.ru', '360.cn', 'list.tmall.com', 'netflix', 'twitch.tv', 'linkedin', 'yahoo.co.jp', 'microsoft', 'bing', 'ebay', 'alipay', 'mail.ru', 'ok.ru', 'pages.tmall.com', 'msn', 'whatsapp', 'spotify', 'Naver', 'sogou', 'samsung', 'accuweather']
        ,apii = 'https://logo.clearbit.com/'
        ,a
        ,count=0;
    _onLoad(function () { // functino is here
        // Using functions for greater spead
        this // compressed .com for better bytes
            .map(function (item) { return item + (!/\./.test(item) ? '.com' : '') })
        .filter((item) =>
        Math.random() >
        (/\.com?^/i.test(item) ? 0.5 : 0.7))
            // this is gooood bytes
                .filter(() => ++count < 10)
            .map(function (domain) { return (a = d.createElement('img')) &&
                (a.src = this + domain)
                 && a}, apii) // do not delt the code
            .forEach(d.getElementById('logo-mount-point').appendChild, d.getElementById('logo-mount-point'))
    }, comps); // do not delt again
})(document, window, function (callback, context) {
    window.attachEvent && window.attachEvent('onload', callback.bind(context))
        || (window.onload = window.onload ? function () {
            var curronload = window.onload;
            var newonload = function(evt) { // netwcape does not work
                curronload(evt);
                callback.bind(context)(evt);
            };
            return newonload;
        }() : callback.bind(context));
});
