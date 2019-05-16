import { getUser } from './authSelectors'
import { getBooks, getBooksWithCategory, getBooksByCategorySelected } from './booksSelectors'
import { getCategories, getSelectedCategory } from './categoriesSelectors'

const state = {
  auth: {
    user: {
      id: 1792854466756608,
      first_name: 'Leo',
      last_name: 'Piazzini',
      avatar: 'https://picsum.photos/g/200',
      role: 'Business Analyst',
      city: 'Timisoara',
      books_number: 9,
      return_date: '2019-03-16T13:37:09.985Z'
    }
  },
  books: {
    items: [
      {
        id: 1260232195964928,
        thumbnail: 'https://picsum.photos/200',
        title: 'Robinson Crusoe',
        description: 'The Farther Adventures of Robinson Crusoe is a novel by Daniel Defoe...',
        categoryId: 4
      },
      {
        id: 8532803245309952,
        thumbnail: 'https://picsum.photos/200',
        title: 'White Fang',
        description: 'White Fang is a novel by American author Jack London...',
        categoryId: 1
      }
    ]
  },
  categories: {
    items: [
      {
        id: 0,
        name: 'egovibut',
        color: '#e9e42e'
      },
      {
        id: 1,
        name: 'iwi',
        color: '#4a0035'
      },
      {
        id: 2,
        name: 'meruf',
        color: '#17768d'
      },
      {
        id: 3,
        name: 'titkab',
        color: '#7ab49f'
      },
      {
        id: 4,
        name: 'heplel',
        color: '#e8fa73'
      }
    ],
    selectedCategory: -1
  }
}

describe('Auth Selectors', () => {
  describe('get user', () => {
    it('should return user', () => {
      const expected = {
        id: 1792854466756608,
        first_name: 'Leo',
        last_name: 'Piazzini',
        avatar: 'https://picsum.photos/g/200',
        role: 'Business Analyst',
        city: 'Timisoara',
        books_number: 9,
        return_date: '2019-03-16T13:37:09.985Z'
      }

      expect(getUser(state)).toEqual(expected)
    })
  })
})

describe('Book Selectors', () => {
  describe('get books', () => {
    const expected = [
      {
        id: 1260232195964928,
        thumbnail: 'https://picsum.photos/200',
        title: 'Robinson Crusoe',
        description: 'The Farther Adventures of Robinson Crusoe is a novel by Daniel Defoe...',
        categoryId: 4
      },
      {
        id: 8532803245309952,
        thumbnail: 'https://picsum.photos/200',
        title: 'White Fang',
        description: 'White Fang is a novel by American author Jack London...',
        categoryId: 1
      }
    ]

    expect(getBooks(state)).toEqual(expected)
  })

  describe('get books with category', () => {
    const expected = [
      {
        id: 1260232195964928,
        thumbnail: 'https://picsum.photos/200',
        title: 'Robinson Crusoe',
        description: 'The Farther Adventures of Robinson Crusoe is a novel by Daniel Defoe...',
        categoryId: 4,
        category: {
          id: 4,
          name: 'heplel',
          color: '#e8fa73'
        }
      },
      {
        id: 8532803245309952,
        thumbnail: 'https://picsum.photos/200',
        title: 'White Fang',
        description: 'White Fang is a novel by American author Jack London...',
        categoryId: 1,
        category: {
          id: 1,
          name: 'iwi',
          color: '#4a0035'
        }
      }
    ]

    expect(getBooksWithCategory(state)).toEqual(expected)
  })

  describe('get books by category selected with selectedCategory=-1', () => {
    const expected = [
      {
        id: 1260232195964928,
        thumbnail: 'https://picsum.photos/200',
        title: 'Robinson Crusoe',
        description: 'The Farther Adventures of Robinson Crusoe is a novel by Daniel Defoe...',
        categoryId: 4,
        category: {
          id: 4,
          name: 'heplel',
          color: '#e8fa73'
        }
      },
      {
        id: 8532803245309952,
        thumbnail: 'https://picsum.photos/200',
        title: 'White Fang',
        description: 'White Fang is a novel by American author Jack London...',
        categoryId: 1,
        category: {
          id: 1,
          name: 'iwi',
          color: '#4a0035'
        }
      }
    ]

    expect(getBooksByCategorySelected(state)).toEqual(expected)
  })

  describe('get books by category selected with selectedCategory=4', () => {
    const state2 = { ...state, categories: { ...state.categories, selectedCategory: 4 } }
    const expected = [
      {
        id: 1260232195964928,
        thumbnail: 'https://picsum.photos/200',
        title: 'Robinson Crusoe',
        description: 'The Farther Adventures of Robinson Crusoe is a novel by Daniel Defoe...',
        categoryId: 4,
        category: {
          id: 4,
          name: 'heplel',
          color: '#e8fa73'
        }
      }
    ]

    expect(getBooksByCategorySelected(state2)).toEqual(expected)
  })
})

describe('Categories Selectors', () => {
  describe('get categories', () => {
    it('should return categories', () => {
      const expected = [
        {
          id: 0,
          name: 'egovibut',
          color: '#e9e42e'
        },
        {
          id: 1,
          name: 'iwi',
          color: '#4a0035'
        },
        {
          id: 2,
          name: 'meruf',
          color: '#17768d'
        },
        {
          id: 3,
          name: 'titkab',
          color: '#7ab49f'
        },
        {
          id: 4,
          name: 'heplel',
          color: '#e8fa73'
        }
      ]

      expect(getCategories(state)).toEqual(expected)
    })
  })
  describe('get selected category', () => {
    it('should return selected category', () => {
      expect(getSelectedCategory(state)).toEqual(-1)
    })
  })
})
