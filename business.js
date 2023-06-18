document.addEventListener('DOMContentLoaded', function() {
    var fadeElements = document.querySelectorAll('.fade-in');

    function fadeInElements() {
        for (var i = 0; i < fadeElements.length; i++) {
            var bounding = fadeElements[i].getBoundingClientRect();
            if (
                bounding.top >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                fadeElements[i].classList.add('visible');
            }
        }
    }

    function throttle(func, limit) {
        var inThrottle;
        return function() {
            var args = arguments;
            var context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(function() {
                    inThrottle = false;
                }, limit);
            }
        };
    }

    window.addEventListener('scroll', throttle(fadeInElements, 100));

    fadeInElements();
});
