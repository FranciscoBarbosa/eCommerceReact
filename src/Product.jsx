import { useState } from "react";

export function Product(props){
    const {image, name, description} = props.details;

    const [counter, setCounter] = useState(0);

    function handleCounterOnAdd(){
        setCounter(counter+1);
    }

    function handleCounterOnRemove(){
        if(counter > 0){
            setCounter(counter-1);
        }
    }

    const disabled = counter == 0;

    return (
    <>
        <div className="product">
            <img src={image} width="50" alt="" />
            <div className="product-info">

                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="product-buttons">
            <button className="product-sub" disabled={disabled} onClick={handleCounterOnRemove}>-</button>
            <h3 className="product-add">{counter}</h3>
            <button className="product-add"  onClick={handleCounterOnAdd}>+</button>
        </div>
    </>
    )
}