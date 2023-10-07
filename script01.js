// Задание 1
// Представьте, что у вас есть класс для управления библиотекой.В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список.Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг(массив) в качестве аргумента.Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.


class Library {
    #books = [];

    get allBooks() {
        return this.#books;
    }

    hasBook(title) {
        return this.#books.includes(title);
    }

    addBook(title) {

        if (this.hasBook(title)) {
            throw new Error('Такая книга уже есть');
        } else {
            this.#books.push(title);
        }
    }

    removeBook(title) {
        if (this.hasBook(title)) {
            this.#books = this.#books.filter(function (item) { return item !== title })
        } else {
            throw new Error('Книгу удалить нельзя, т.к. её нет в массиве')
        }
    }

    constructor(array) {
        const tempArr = new Set(array);
        if (tempArr.size !== array.length) {
            throw new Error('В библиотеке есть книги-дубликаты')
        } else {
            this.#books = array;
        }
    }
}

// Проверка
const arrWithDuplicateBooks = ['Тимуровцы', 'Семеро Козлят', 'Тимуровцы'];
const arrWithoutDuplicateBooks = ['Тимуровцы', 'Семеро Козлят', 'Чук и Гек'];

let newLib = new Library(arrWithoutDuplicateBooks);

// let newLib2 = new Library(arrWithDuplicateBooks); // Uncaught Error: В библиотеке есть книги - дубликаты
// newLib.addBook('Тимуровцы'); // Uncaught Error: Такая книга уже есть

console.log(newLib);
// Library { #books: Array(3) }
// #books:Array(2)
// allBooks(...)

console.log(newLib.hasBook('Тимуровцы')) // true

newLib.removeBook("Семеро Козлят")

console.log(newLib.allBooks); // (2) ['Тимуровцы', 'Чук и Гек']
