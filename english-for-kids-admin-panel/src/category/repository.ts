import { Category } from './category';

const categories: Category[] = [
    {
        category: 'Action (Set A)',
        word: 'cry',
        translation: 'плакать',
        trained: '0',
        correct: '0',
        incorrect: '0',
        percent: '0',
        id: 1
    },
    {
        category: 'Action (Set A)',
        word: 'dance',
        translation: 'танцевать',
        trained: '0',
        correct: '0',
        incorrect: '0',
        percent: '0',
        id: 2
    },
    {
        category: 'Action (Set A)',
        word: 'dive',
        translation: 'нырять',
        trained: '0',
        correct: '0',
        incorrect: '0',
        percent: '0',
        id: 3
    },
    {
        category: 'Action (Set A)',
        word: 'draw',
        translation: 'рисовать',
        trained: '0',
        correct: '0',
        incorrect: '0',
        percent: '0',
        id: 4
    },
    {
        category: 'Action (Set A)',
        word: 'fish',
        translation: 'ловить рыбу',
        trained: '0',
        correct: '0',
        incorrect: '0',
        percent: '0',
        id: 5
    },
    {
        category: 'Action (Set A)',
        word: 'fly',
        translation: 'летать',
        trained: '0',
        correct: '0',
        incorrect: '0',
        percent: '0',
        id: 6
    },
    {
        category: 'Action (Set A)',
        word: 'hug',
        translation: 'обнимать',
        trained: '0',
        correct: '0',
        incorrect: '0',
        percent: '0',
        id: 7
    },
    {
        category: 'Action (Set A)',
        word: 'jump',
        translation: 'прыгать',
        trained: '0',
        correct: '0',
        incorrect: '0',
        percent: '0',
        id: 8
    }
];

const newId = (function() {
    let id = categories.length;
    return () => id++;
})();

export function getCategories(): Promise<Category[]> {
    return Promise.resolve(categories);
}

export function getCategoryById(id: number): Promise<Category | undefined> {
    const category = categories.find((cat) => cat.id === id);
    return Promise.resolve(category);
}

export function deleteCategory(id: number): Promise<void> {
    const categoryIndex = categories.findIndex((cat) => cat.id === id);
    if (categoryIndex < 0) return Promise.reject(new Error('Category not found'));
    categories.splice(categoryIndex, 1);
    return Promise.resolve();
}

export function createCategory(data: Category): Promise<Category> {
    const isExists = categories.findIndex((cat) => cat.category === data.category) >= 0;
    if (isExists) {
        return Promise.reject(new Error(`Category with name ${data.category} already exists`));
    }
    const newCategory: Category = {
        ...data,
        id: newId(),
    };
    categories.push(newCategory);
    return Promise.resolve(newCategory);
}
