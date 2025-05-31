import {age, intro} from "./data.js"

export default function Cart() {
    let 장바구니 = ['Tomatoes', 'Pasta']//DB 데이터 대용
    return (
        <div>
            <p>{intro}</p>
            <h4 className="title">Cart</h4>
            <div className="cart-item">
                <p>상품명</p>
                <p>$40</p>
                <p>2개</p>
            </div>
            <CartItem item={장바구니[0]}></CartItem>
            <CartItem item={장바구니[1]}></CartItem>
            <Btn color="red"/>
            <Btn color="blue"/>

        </div>)
}

function CartItem(props) {
    return (<div className="cart-item">
        <p>{props.item}</p>
        <p>$40</p>
        <p>1개</p>
    </div>)
}
function Btn(props) {
    return <button style={{background:props.color}}>구매하기</button>
}