const { act } = require("react-dom/test-utils");

var initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: '',
        description: 'Sản phẩm này do Iphone sản xuất',
        price: 500,
        inventory : 10
    },
    {
        id: 2,
        name: 'SamSung galaxy',
        image: '',
        description: 'Sản phẩm này do Samsung sản xuất',
        price: 600,
        inventory : 60
    },
    {
        id: 3,
        name: 'Iphone X',
        image: '',
        description: 'Sản phẩm này do Iphone sản xuất',
        price: 900,
        inventory : 100
    }
];

const product = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default product;