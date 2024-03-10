const listItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${listItems.length}`);

// =============== SOLUTION 1 ===============

listItems.forEach((element) => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
});


// =============== SOLUTION 2 ===============

// listItems.forEach((element) => {
//     console.log(`Category: ${element.firstElementChild.textContent}`);
//     console.log(`Elements: ${element.lastElementChild.childElementCount}`);
// });

