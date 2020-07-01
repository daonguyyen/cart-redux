const { act } = require("react-dom/test-utils");

var initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: 'https://24hstore.vn/images/products/2020/04/19/large/iphone-7-plus-black_1587272216_1.jpg',
        description: 'Sản phẩm này do Iphone sản xuất',
        price: 500,
        inventory : 10, 
        rating: 4
    },
    {
        id: 2,
        name: 'SamSung galaxy',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863643187455627_ss-galaxy-s10-trang-1.png',
        description: 'Sản phẩm này do Samsung sản xuất',
        price: 600,
        inventory : 60,
        rating: 3
    },
    {
        id: 3,
        name: 'Iphone X',
        image: 'https://cdn.dienthoaigiakho.vn/630x/https://cdn.dienthoaigiakho.vn/photos/1565006854377-iphone-xs-max-space-select-2018-min.png',
        description: 'Sản phẩm này do Iphone sản xuất',
        price: 900,
        inventory : 100,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;