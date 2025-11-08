// Валидация форм
(function () {
    'use strict';

    // Форма контактов
    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        if (!contactForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        contactForm.classList.add('was-validated');
    }, false);

    // Форма бронирования
    var bookingForm = document.getElementById('bookingForm');
    var submitBooking = document.getElementById('submitBooking');

    submitBooking.addEventListener('click', function (event) {
        if (!bookingForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        bookingForm.classList.add('was-validated');

        if (bookingForm.checkValidity()) {
            // В реальном приложении здесь будет отправка данных
            alert('Бронирование успешно отправлено! Мы свяжемся с вами в ближайшее время.');
            var bookingModal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
            bookingModal.hide();
        }
    });

    // Изменение навигации при скролле
    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Добавляем smooth scroll для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Закрываем мобильное меню после клика
                var navbarToggler = document.querySelector('.navbar-toggler');
                var navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && !navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
})();
