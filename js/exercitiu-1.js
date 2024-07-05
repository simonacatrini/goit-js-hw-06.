const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');.

console.log(`Number of categories: ${categoriesItems.length}\n`);

categoriesItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}\n`);
});