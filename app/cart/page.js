export default function cart() {
    return (<div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>

        </div>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>

    </div>)
}

function CartItem() {
    return (<div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
    </div>)
}