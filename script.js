

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
window.addEventListener('DOMContentLoaded', function (e) {
    console.log('Все теги прогрузились.');
});





// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener('load', function (e) {
    console.log('страница загрузилась"');
});





// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие: Класс "super_element" присутствует в элементе "div". сообщение должно определять присутствует или отсутствует класс "super_element" у элемента, а также выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик. Необходимо использовать делегирование.
document.addEventListener('click', function (e) {
    
    if (e.target.classList.contains('super_element'))
    {
        console.log(`Класс "super_element" присутствует в элементе`);
    }
    else
    {
        console.log('Класс "super_element" НЕ присутствует в элементе ');
    }
    
    console.log(e.target);

  });






// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textAreaEL = document.querySelector('textarea');
textAreaEL.addEventListener('mouseover', function (e) {
  console.log('Вы навели на textarea.');
})



// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const buttonsUL = document.querySelector('ul');
const Pressbutton = (e) => {
    console.log(e.target.textContent);
}
buttonsUL.addEventListener('click', Pressbutton);





// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Скорее всего это связано с e.target , но точного объяснения не могу предоставить :(




// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const liEl = document.querySelectorAll('li');

for (let i = 0; i < liEl.length; i = i + 2) {
    const but = liEl[i].querySelector('button');
    but.style.background = "green";
}
// было бы логично изменить цвет заднего фона каждого второго не тега li,  а кнопки в каждом втором теге li.. 