(function(d, w, _onLoad) {
  /// the linter was saying line tooo long bu ti  have 3 monitors hahahahhahahah i have as much space as  i want
  var comps = [
      "google",
      "youtube",
      "facebook",
      "baidu",
      "wikipedia.org",
      "reddit",
      "yahoo",
      "qq",
      "taobao",
      "amazon",
      "twitter",
      "sohu",
      "instagram",
      "vk",
      "jd",
      "sina.com.cn",
      "weibo",
      "yandex.ru",
      "360.cn",
      "list.tmall.com",
      "netflix",
      "twitch.tv",
      "linkedin",
      "yahoo.co.jp",
      "microsoft",
      "bing",
      "ebay",
      "alipay",
      "mail.ru",
      "ok.ru",
      "pages.tmall.com",
      "msn",
      "whatsapp",
      "spotify",
      "Naver",
      "sogou",
      "samsung",
      "accuweather"
    ],
    apii = "https://logo.clearbit.com/",
    a, count = 0;
  _onLoad(function() {
    comps.map(item => item + (!/\./.test(item) ? ".com" : "")) // checks for .com , adds if missing
      .filter(() => Math.random() > 0.5) // randomzies logos
      .filter(() => ++count <= 14) // limits
      .map(domain => (a = d.createElement("img")) && (a.src = apii + domain) && a) // creates an array of <img> tags
      .forEach(image => d.getElementById("logo-mount-point").appendChild(image));
  });
  })(document, window, function(callback, context) {
  (window.attachEvent &&
    window.attachEvent("onload", callback.bind(context))) ||
    (window.onload = window.onload
      ? (function() {
          var curronload = window.onload;
          var newonload = function(evt) {
            // netwcape does not work
            curronload(evt);
            callback.bind(context)(evt);
          };
          return newonload;
        })()
      : callback.bind(context));
});
