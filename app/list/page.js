export default function List() {
    let 상품 =['Tomatoes','Pasta','Coconut']

    return (
        <div>
            <h4 className="title">상품목록</h4>
           <div className="food">
               <h4>상품[0]</h4>
           </div>
            <div className="food">
                <h4>상품[1] $40</h4>
            </div>
            <div className="food">
                <h4>상품[2]</h4>
            </div>
        </div>
    );
}
