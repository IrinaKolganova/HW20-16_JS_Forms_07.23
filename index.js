if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
}
else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}
// ]]>




// Напишите калькулятор расчёта стоимости автомобиля в зависимости от комплектации. 

// - Должен содержать поля:
// - выпадающий список с маркой автомобиля (Reno, Opel, Mazda, Jaguar);
// - выпадающий список с моделью автомобиля;
// - чекбокс или радиокнопка для выбор топлива (бензин, дизель, газ, электричество)
// - инпут для ввода объёма двигателя (от 1.1 литра до 3.5 литров);
// - чекбокс или радиокнопка для выбора состояния автомобиля (новый, подержанный);
// - если автомобиль подержанный, то появляется чекбокс или радиокнопка с количеством владельцев (1-2 владельца, более 3х);
// - чекбокс или радиокнопка для выбора способа оплаты (картой, наличными, счёт на юридическое лицо;
// - можете добавить дополнительные поля по своему желанию.
// - Выбор того или иного элемента должен влиять на результирующую цену

// Пример подобного калькулятора с сайта [https://www.japantrek.ru/calculator](https://www.japantrek.ru/calculator), но мы уверены, что вы можете сделать лучше!
// Или вот ещё один пример отсюда https://cena-auto.ru/calculator/