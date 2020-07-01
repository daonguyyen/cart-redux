import * as types from './../constants/ActionType';
// var data = JSON.parse(localStorage.getItem('CART'));
// var initialState = data ? data : [];
var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 7 plus',
            image: 'https://24hstore.vn/images/products/2020/04/19/large/iphone-7-plus-black_1587272216_1.jpg',
            description: 'Sản phẩm này do Iphone sản xuất',
            price: 500,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    },
    {
        product: {
            id: 3,
            name: 'Iphone X',
            image: 'https://cdn.dienthoaigiakho.vn/630x/https://cdn.dienthoaigiakho.vn/photos/1565006854377-iphone-xs-max-space-select-2018-min.png',
            description: 'Sản phẩm này do Iphone sản xuất',
            price: 900,
            inventory: 100,
            rating: 5
        },
        quantity: 3
    }
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            return [...state]
        default: return [...state];
    }
}

export default cart;