const textWhite = "Привет, меня зовут "; // Белый текст
const textOrange = "Юрий"; // Оранжевый текст
const typedTextWhite = document.getElementById("typed-text-white");
const typedTextOrange = document.getElementById("typed-text-orange");
let indexWhite = 0;
let indexOrange = 0;

function typeWhiteText() {
    if (indexWhite < textWhite.length) {
        typedTextWhite.textContent += textWhite.charAt(indexWhite); // Добавляем по одному символу
        indexWhite++;
        setTimeout(typeWhiteText, 100); // Скорость печати (100 мс на символ)
    } else {
        // После завершения белого текста начинаем печатать оранжевый
        typeOrangeText();
    }
}

function typeOrangeText() {
    if (indexOrange < textOrange.length) {
        typedTextOrange.textContent += textOrange.charAt(indexOrange); // Добавляем по одному символу
        indexOrange++;
        setTimeout(typeOrangeText, 100); // Скорость печати (100 мс на символ)
    } else {
        // После завершения анимации убираем курсор
        typedTextOrange.style.borderRight = "none"; // Убираем курсор
    }
}

// Запускаем анимацию при загрузке страницы
window.onload = typeWhiteText;



// Функция для открытия модального окна
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы
}

// Функция для закрытия модального окна
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; // Восстанавливаем прокрутку страницы
}

// Закрытие модального окна при клике вне его
document.addEventListener("click", function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) { // Проверяем, что клик был на затемнённом фоне
            closeModal(modal.id); // Закрываем модальное окно
        }
    });
});

// Закрытие модального окна при нажатии на Esc
document.onkeydown = function(event) {
    if (event.key === "Escape") { // Проверяем, нажата ли клавиша Esc
        const openModals = document.querySelectorAll('.modal[style*="display: block"]');
        openModals.forEach(modal => {
            closeModal(modal.id); // Закрываем все открытые модальные окна
        });
    }
};

// Функция для открытия увеличенного изображения
function openImageModal(imageSrc) {
    const imageModal = document.getElementById("image-modal");
    const expandedImage = document.getElementById("expanded-image");
    expandedImage.src = imageSrc;
    imageModal.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы
}

// Функция для закрытия увеличенного изображения
function closeImageModal() {
    const imageModal = document.getElementById("image-modal");
    imageModal.style.display = "none";
    document.body.style.overflow = "auto"; // Восстанавливаем прокрутку страницы
}

// Закрытие увеличенного изображения при клике вне его
document.addEventListener("click", function(event) {
    const imageModal = document.getElementById("image-modal");
    if (event.target === imageModal) {
        closeImageModal();
    }
});

// Закрытие увеличенного изображения при нажатии на крестик
document.querySelector(".close-image-modal").onclick = closeImageModal;

// Добавляем обработчики клика на все изображения в модальном окне
document.querySelectorAll(".modal-image").forEach(image => {
    image.addEventListener("click", () => {
        openImageModal(image.src);
    });
});