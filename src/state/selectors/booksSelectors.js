import { createSelector } from 'reselect'
import { getCategories, getSelectedCategory } from './categoriesSelectors'

export const getBooks = state => state.books.items
export const getBooksWithCategory = createSelector(
  [getBooks, getCategories],
  (books, categories) =>
    books.map(book => ({
      ...book,
      category: categories.find(category => book.categoryId === category.id)
    }))
)

export const getBooksByCategorySelected = createSelector(
  [getBooksWithCategory, getSelectedCategory],
  (books, selectedCategory) => {
    if (selectedCategory === -1) return books

    return books.filter(book => book.categoryId === selectedCategory)
  }
)
