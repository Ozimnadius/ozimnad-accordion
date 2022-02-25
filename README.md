# Ozimnad-accordion
Простая и легкая библиотека js-аккордиона.

## Особенности
+ __Никаких зависимостей__.  Библиотека написана на чистом JavaScript, для работы не требуются иные библиотеки.
+ __Нет жесткой структуры.__ Нет жесткой привязки в структуре.
+ __Простота и функциональность__. Вы можете легко и быстро подключить и использовать библиотеку.
+ __Настройка с помощью CSS__. Вы можете легко менять внешний вид, расположение с помощью CSS.

## Как работать с библиотекой

1. Скачайте последнюю версию библиотеки
2. Подключите `style.css` и `script.js` из папки `dist` к странице
3. Поместите в ваш html-документ следующую разметку:
````html
<div data-accordion="accordion">
    <div data-accordion="item">
        <div data-accordion="btn">Кнопка 1</div>
        <div data-accordion="collapse">
            <div data-accordion="content">
                Контент
            </div>
        </div>
    </div>
    <div data-accordion="item">
        <div data-accordion="btn">Кнопка 2</div>
        <div data-accordion="collapse">
            <div data-accordion="content">
                Контент
            </div>
        </div>
    </div>
    <div data-accordion="item">
        <div data-accordion="btn">Кнопка 3</div>
        <div data-accordion="collapse">
            <div data-accordion="content">
                Контент
            </div>
        </div>
    </div>
    <div data-accordion="item">
        <div data-accordion="btn">Кнопка 4</div>
        <div data-accordion="collapse">
            <div data-accordion="content">
                Контент
            </div>
        </div>
    </div>
</div>
````
4.Разместите следующий JS-код для подключения аккордиона:
````javascript
new OzimnadAccordion();
````
5.Настройки:

| Свойство  | Описание                                                                     |
|-----------|------------------------------------------------------------------------------|
| __selector__ | Строка с селектором CSS, который указывает на аккордион.                     |
| __selectorItem__ | Строка с селектором CSS, который указывает на элементы аккордиона.           |
| __selectorBtn__ | Строка с селектором CSS, который указывает на кнопки элементов.              |
| __selectorCollapse__ | Строка с селектором CSS, который указывает на схлопывающийся блок элементов. |
| __selectorContent__ | Строка с селектором CSS, который указывает на контентный блок элементов.     |

Пример:
````javascript
new OzimnadAccordion();
````
### Важно
Дата атрибуты обязательны и их нельзя менять.