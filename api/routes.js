const Chance = require('chance');

const chance = new Chance();

const categories = [];

for (let i = 0; i < 5; i += 1) {
  categories.push({
    id: i,
    name: chance.word(),
    color: chance.color({ format: 'hex' }),
  });
}

const books = [];

for (let i = 0; i < 60; i += 1) {
  books.push({
    id: chance.natural(),
    thumbnail: 'https://picsum.photos/200',
    title: chance.sentence(),
    description: chance.paragraph(),
    categoryId: chance.natural({ min: 0, max: categories.length - 1 }),
  });
}

const user = {
  id: chance.natural(),
  first_name: chance.first(),
  last_name: chance.last(),
  avatar: 'https://picsum.photos/g/200',
  role: chance.pickone(['Software Developer', 'Business Analyst', 'Quality Assurance', 'Project manager']),
  city: chance.pickone(['Timisoara', 'Sibiu']),
  books_number: chance.integer({min: 0, max: 10}),
  return_date: chance.date({year: 2019, month: 2})
};

module.exports = {
  books,
  categories,
  user
};
