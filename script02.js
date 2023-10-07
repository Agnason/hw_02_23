// Задание 2
// Вы разрабатываете систему отзывов для вашего веб - сайта.Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML - структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// Исходник

const app = new Vue({
    el: '#app',
    data: {
        listOfMobiles: ['Apple iPhone 13', 'Samsung Galaxy Z Fold 3', 'Sony PlayStation 5'],
        selectedMobile: '',
        tempMessage: '',
        feedbacks: [
            {
                product: "Apple iPhone 13",
                reviews: [
                    {
                        id: "1",
                        text: "Отличный телефон! Батарея держится долго.",
                    },
                    {
                        id: "2",
                        text: "Камера супер, фото выглядят просто потрясающе.",
                    },
                ],
            },
            {
                product: "Samsung Galaxy Z Fold 3",
                reviews: [
                    {
                        id: "3",
                        text: "Интересный дизайн, но дорогой.",
                    },
                ],
            },
            {
                product: "Sony PlayStation 5",
                reviews: [
                    {
                        id: "4",
                        text: "Люблю играть на PS5, графика на высоте.",
                    },
                ],
            },
        ]
    },
    methods: {
        addNewFeedback() {
           
           
            this.feedbacks.forEach(element => {
                if (element.product === this.selectedMobile) {
                    if (this.tempMessage.length > 5) { 
                        element.reviews.push({ text: this.tempMessage })
                    } 
                }
            });

            const inputEl = document.querySelector('.createFeedback-field');
            inputEl.value = ''; // не получается очистить




        }
    }

});

