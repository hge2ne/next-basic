import Image from "next/image";

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    return (<div>
        <h4 className="title">상품목록</h4>
        {상품.map((a, i) => {
            return (<div className="food" key={i}>
                <Image src={`/food${i}.png`} width={200} height={200}/>
                <h4>{a}</h4>
            </div>)
        })}

    </div>);
}
