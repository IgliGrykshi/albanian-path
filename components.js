(function () {
    function run() {
        var header = document.querySelector('header');
        var footer = document.querySelector('footer');

        if (header) {
            fetch('/components/header.html')
                .then(function (r) { return r.text(); })
                .then(function (html) {
                    header.innerHTML = html;
                    var btn = header.querySelector('.hamburger');
                    var menu = header.querySelector('.nav-menu');
                    if (btn && menu) {
                        btn.addEventListener('click', function () {
                            var isOpen = menu.classList.toggle('open');
                            btn.classList.toggle('open');
                            btn.setAttribute('aria-expanded', isOpen);
                        });
                        menu.querySelectorAll('a').forEach(function (a) {
                            a.addEventListener('click', function () {
                                menu.classList.remove('open');
                                btn.classList.remove('open');
                                btn.setAttribute('aria-expanded', 'false');
                            });
                        });
                    }
                })
                .catch(function (e) { console.error('Header component failed to load', e); });
        }

        if (footer) {
            footer.id = 'contact';
            fetch('/components/footer.html')
                .then(function (r) { return r.text(); })
                .then(function (html) { footer.innerHTML = html; })
                .catch(function (e) { console.error('Footer component failed to load', e); });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
