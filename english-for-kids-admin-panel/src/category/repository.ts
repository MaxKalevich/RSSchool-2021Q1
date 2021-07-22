const state = [
    [
        {
            category: 'Action (Set A)',
        },
        {
            category: 'Action (Set B)',
        },
        {
            category: 'Auto',
        },
        {
            category: 'Adjective',
        },
        {
            category: 'Animal (Set A)',
        },
        {
            category: 'Animal (Set B)',
        },
        {
            category: 'Clothes',
        },
        {
            category: 'Emotion',
        },
    ],
    [
        {
            category: 'Action (Set A)',
            word: 'cry',
            translation: 'плакать',
            img: '/categoryActionSetA/cry.jpg',
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
            img: '/categoryActionSetA/dance.jpg',
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
            img: '/categoryActionSetA/dive.jpg',
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
            img: '/categoryActionSetA/draw.jpg',
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
            img: '/categoryActionSetA/fish.jpg',
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
            img: '/categoryActionSetA/fly.jpg',
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
            img: '/categoryActionSetA/hug.jpg',
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
            img: '/categoryActionSetA/jump.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 8
        },
        {
            category: 'Action (Set B)',
            word: 'open',
            translation: 'открывать',
            img: '/categoryActionSetB/open.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 1
        },
        {
            category: 'Action (Set B)',
            word: 'play',
            translation: 'играть',
            img: '/categoryActionSetB/play.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 2
        },
        {
            category: 'Action (Set B)',
            word: 'point',
            translation: 'указывать',
            img: '/categoryActionSetB/point.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 3
        },
        {
            category: 'Action (Set B)',
            word: 'ride',
            translation: 'ездить',
            img: '/categoryActionSetB/ride.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 4
        },
        {
            category: 'Action (Set B)',
            word: 'run',
            translation: 'бегать',
            img: '/categoryActionSetB/run.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 5
        },
        {
            category: 'Action (Set B)',
            word: 'sing',
            translation: 'петь',
            img: '/categoryActionSetB/sing.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 6
        },
        {
            category: 'Action (Set B)',
            word: 'skip',
            translation: 'пропускать, прыгать',
            img: '/categoryActionSetB/skip.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 7
        },
        {
            category: 'Action (Set B)',
            word: 'swim',
            translation: 'плавать',
            img: '/categoryActionSetB/swim.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 8
        },
        {
            category: 'Auto',
            word: 'BMW',
            translation: 'БМВ',
            img: '/auto/BMW.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 1
        },
        {
            category: 'Auto',
            word: 'Bugatti',
            translation: 'Бугатти',
            img: '/auto/Bugatti.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 2
        },
        {
            category: 'Auto',
            word: 'DeLorean',
            translation: 'ДеЛореан',
            img: '/auto/DeLorean.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 3
        },
        {
            category: 'Auto',
            word: 'Lada',
            translation: 'Лада',
            img: '/auto/Lada.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 4
        },
        {
            category: 'Auto',
            word: 'Lamborghini',
            translation: 'Ламба',
            img: '/auto/Lamborghini.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 5
        },
        {
            category: 'Auto',
            word: 'Mercedes',
            translation: 'Мерседес',
            img: '/auto/Mercedes.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 6
        },
        {
            category: 'Auto',
            word: 'Rolls Royse',
            translation: 'Роллс Ройс',
            img: '/auto/Rolls Royse.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 7
        },
        {
            category: 'Auto',
            word: 'Tesla',
            translation: 'Тесла',
            img: '/auto/Tesla.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 8
        },
        {
            category: 'Adjective',
            word: 'large',
            translation: 'большой',
            img: '/adjective/large.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 1
        },
        {
            category: 'Adjective',
            word: 'fast',
            translation: 'быстрый',
            img: '/adjective/fast.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 2
        },
        {
            category: 'Adjective',
            word: 'friendly',
            translation: 'дружелюбный',
            img: '/adjective/friendly.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 3
        },
        {
            category: 'Adjective',
            word: 'old',
            translation: 'старый',
            img: '/adjective/old.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 4
        },
        {
            category: 'Adjective',
            word: 'slow',
            translation: 'медленный',
            img: '/adjective/slow.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 5
        },
        {
            category: 'Adjective',
            word: 'little',
            translation: 'маленький',
            img: '/adjective/little.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 6
        },
        {
            category: 'Adjective',
            word: 'unfriendly',
            translation: 'недружелюбный',
            img: '/adjective/unfriendly.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 7
        },
        {
            category: 'Adjective',
            word: 'young',
            translation: 'молодой',
            img: '/adjective/young.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 8
        },
        {
            category: 'Animal (Set A)',
            word: 'cat',
            translation: 'кот',
            img: '/animalSetA)/cat.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 1
        },
        {
            category: 'Animal (Set A)',
            word: 'chick',
            translation: 'цыплёнок',
            img: '/animalSetA/chick.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 2
        },
        {
            category: 'Animal (Set A)',
            word: 'chicken',
            translation: 'курица',
            img: '/animalSetA/chicken.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 3
        },
        {
            category: 'Animal (Set A)',
            word: 'dog',
            translation: 'собака',
            img: '/animalSetA/dog.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 4
        },
        {
            category: 'Animal (Set A)',
            word: 'horse',
            translation: 'лошадь',
            img: '/animalSetA/horse.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 5
        },
        {
            category: 'Animal (Set A)',
            word: 'pig',
            translation: 'свинья',
            img: '/animalSetA/pig.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 6
        },
        {
            category: 'Animal (Set A)',
            word: 'rabbit',
            translation: 'кролик',
            img: '/animalSetA/rabbit.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 7
        },
        {
            category: 'Animal (Set A)',
            word: 'sheep',
            translation: 'овца',
            img: '/animalSetA/sheep.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 8
        },
        {
            category: 'Animal (Set B)',
            word: 'bird',
            translation: 'птица',
            img: '/animalSetB/bird.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 1
        },
        {
            category: 'Animal (Set B)',
            word: 'dolphin',
            translation: 'дельфин',
            img: '/animalSetB/dolphin.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 2
        },
        {
            category: 'Animal (Set B)',
            word: 'fish',
            translation: 'рыба',
            img: '/animalSetB/fish.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 3
        },
        {
            category: 'Animal (Set B)',
            word: 'frog',
            translation: 'жаба',
            img: '/animalSetB/frog.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 4
        },
        {
            category: 'Animal (Set B)',
            word: 'giraffe',
            translation: 'жираф',
            img: '/animalSetB/giraffe.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 5
        },
        {
            category: 'Animal (Set B)',
            word: 'lion',
            translation: 'лев',
            img: '/animalSetB/lion.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 6
        },
        {
            category: 'Animal (Set B)',
            word: 'mouse',
            translation: 'мышь',
            img: '/animalSetB/mouse.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 7
        },
        {
            category: 'Animal (Set B)',
            word: 'turtle',
            translation: 'черепаха',
            img: '/animalSetB/turtle.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 8
        },
        {
            category: 'Clothes',
            word: 'blouse',
            translation: 'блузка',
            img: '/clothes/blouse.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 1
        },
        {
            category: 'Clothes',
            word: 'boot',
            translation: 'ботинок',
            img: '/clothes/boot.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 2
        },
        {
            category: 'Clothes',
            word: 'coat',
            translation: 'пальто',
            img: '/clothes/coat.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 3
        },
        {
            category: 'Clothes',
            word: 'dress',
            translation: 'платье',
            img: '/clothes/dress.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 4
        },
        {
            category: 'Clothes',
            word: 'pants',
            translation: 'брюки',
            img: '/clothes/pants.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 5
        },
        {
            category: 'Clothes',
            word: 'shirt',
            translation: 'рубашка',
            img: '/clothes/shirt.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 6
        },
        {
            category: 'Clothes',
            word: 'shoe',
            translation: 'туфли',
            img: '/clothes/shoe.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 7
        },
        {
            category: 'Clothes',
            word: 'skirt',
            translation: 'юбка',
            img: '/clothes/skirt.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 8
        },
        {
            category: 'Emotion',
            word: 'angry',
            translation: 'сердитый',
            img: '/Emotion/angry.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 1
        },
        {
            category: 'Emotion',
            word: 'happy',
            translation: 'счастливый',
            img: '/Emotion/happy.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 2
        },
        {
            category: 'Emotion',
            word: 'laugh',
            translation: 'смех',
            img: '/Emotion/laugh.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 3
        },
        {
            category: 'Emotion',
            word: 'sad',
            translation: 'грустный',
            img: '/Emotion/sad.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 4
        },
        {
            category: 'Emotion',
            word: 'scared',
            translation: 'испуганный',
            img: '/Emotion/scared.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 5
        },
        {
            category: 'Emotion',
            word: 'smile',
            translation: 'улыбка',
            img: '/Emotion/smile.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 6
        },
        {
            category: 'Emotion',
            word: 'surprised',
            translation: 'удивленный',
            img: '/Emotion/surprised.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 7
        },
        {
            category: 'Emotion',
            word: 'tired',
            translation: 'уставший',
            img: '/Emotion/tired.jpg',
            trained: '0',
            correct: '0',
            incorrect: '0',
            percent: '0',
            id: 8
        },
    ]
];

const newId = (function () {
    let id = state.length;
    return () => id++;
})();

export function getCategoriesState(): Promise<any> {
    return Promise.resolve(state);
}

export function deleteCategoryByCategoryName(categoryName: string) {
    let stateOne = state[0].filter(el => {
        if (el.category !== categoryName) {
            return el;
        }
    });
    let stateTwo = state[1].filter(el => {
        if (el.category !== categoryName) {
            return el;
        }
    });
    state[0] = stateOne;
    state[1] = stateTwo;
}

export function createNewCategory(data: any): Promise<any> {
    const isExists = state[0].findIndex((cat) => cat.category === data.category) >= 0;
    if (isExists) {
        return Promise.reject(new Error(`Category with name ${data.category} already exists`));
    }
    const newCategory = {
        ...data,
        id: newId(),
    };
    state[0].push(newCategory);
    return Promise.resolve(newCategory);
}
