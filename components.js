(function () {
    function run() {
        var header = document.querySelector('header');
        var footer = document.querySelector('footer');

        if (header) {
            fetch('/components/header.html')
                .then(function (r) { return r.text(); })
                .then(function (html) { header.innerHTML = html; })
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
