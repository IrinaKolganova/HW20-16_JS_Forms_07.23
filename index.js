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




// **Задание: Форма регистрации с валидацией всех полей**
    
// 1 Создайте HTML-страницу с формой для регистрации пользователя, содержащую следующие поля:
    
// - Поле ввода имени: обязательное поле, должно содержать только буквы и пробелы. Должно иметь атрибуты `placeholder`, `required`, `minlength` и `maxlength`. Длина имени должна быть от 2 до 20 символов.
// - Поле ввода электронной почты: обязательное поле, должно быть в формате `email` (содержать символ '@' и доменное имя). Должно иметь атрибуты `placeholder` и `required`.
// - Поле ввода возраста: обязательное поле. Должно иметь атрибуты `placeholder` и `required`.
// - Поле выбора пола: представленное в виде `radio buttons` для выбора между мужчиной и женщиной
// - Поле выбора профессии: обязательное поле, представленное в виде выпадающего списка (`select`). Должно иметь атрибуты `required` и `placeholder` для выбора профессии. Варианты профессий: Врач, Программист, Учитель, Дизайнер, Инженер, Продавец, Другое.
// - Поле ввода пароля: обязательное поле, должно быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру. Должно иметь атрибуты `placeholder`, `required`, `minlength` и `pattern`.
// - Поле повтора пароля: обязательное поле, должно быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру. Должно иметь атрибуты `placeholder`, `required`, `minlength` и `pattern`.
// - Поле `checkbox`, показывающее согласие пользователя с обработкой данных. Должно иметь атрибут `required`.
// - Кнопка отправки формы (`submit`)
// - Добавьте атрибут `novalidate` к тегу `<form>` для отключения браузерной валидации и использования пользовательской валидации на основе JavaScript

// 2 Добавьте стили, чтобы форма выглядела отлично

// 3 Используя JavaScript, добавьте обработчик события отправки формы (`submit`), который будет выполнять следующие действия:

// - Отменять действие по умолчанию для события `submit`
// - Создайте функцию, которая будет проверять валидность переданного поля с использованием свойства `validity`. Если поле не валидно, добавлять класс `error` к полю (который будет обводить или подчеркивать поле красным цветом) и отображать сообщение об ошибке в соответствующем элементе `span` с помощью свойства `validationMessage`.
    
//     ```jsx
//     <div class="form-group">
//         <label for="age" class="form-label age">Возраст:</label>
//         <input
//             type="number"
//             id="age"
//             name="age"
//             class="form-input"
//             placeholder="Введите ваш возраст"
//             required />
//          <span class="error-message" id="age-error"></span>
//     </div>
//     ```
    
// - Обязательно проверяйте выбран ли `checkbox`. Если он не выбран, добавляйте класс `error` к `checkbox` и отображайте сообщение об ошибке в соответствующем элементе `span`
// - Создайте функцию, которая будет очищать сообщения об ошибках и удалять классы ошибок у полей и `checkbox`
// - Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму

// 4 Бонусное задание: добавьте динамическую проверку валидности полей при вводе пользователем. При каждом изменении значения в поле, проверяйте его валидность и добавляйте соответствующее сообщение об ошибке ([как в примере](https://www.notion.so/a118c5f5233f44e0bda3990075ad18ab?pvs=21)).