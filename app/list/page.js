'use client'
import Image from "next/image";
import {useState} from "react";

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let [수량,수량변경]=useState(0);
    return (<div>
        <h4 className="title">상품목록</h4>
        {상품.map((a, i) => {
            return (<div className="food" key={i}>
                <Image src={`/food${i}.png`} width={200} height={200}/>
                <h4>{a}</h4>
                <button onClick={()=>{수량변경(수량-1)}}>+</button>
                <span>{수량}</span>
                <button onClick={()=>{수량변경(수량+1)}}>+</button>
            </div>)
        })}

    </div>);
}
