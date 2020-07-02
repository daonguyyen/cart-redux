import * as Types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1; //Khong tim thay thi index = -1
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity; //Cap nhat so luong trong gio hang
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            //Set item into local storage
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }
            //Set item into local storage
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            //Set item into local storage
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default: return [...state];
    }
}

var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;