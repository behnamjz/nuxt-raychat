if (typeof window !== 'undefined') {
    (function(a, r, o, t, j)) {
        raychatSetting = {
            rayid: '<%= options.id %>'
        };
        t = localStorage.getItem("rayToken")
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + raychatSetting.rayid + j + t;
        a.appendChild(r);
    })(window, document, 'https://app.raychat.io/scripts/js/', '.js?rid=');
}