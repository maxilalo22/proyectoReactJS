import { Button } from "react-bootstrap"

export const ItemCount = ({max, cantidad, modify}) =>{

    const sumar = () =>{
        if (cantidad < max){
            modify(cantidad +1)
        }
    }
    const restar = () =>{
        if(cantidad >0){
            modify(cantidad-1)
        }
    }
    

    return(
        <>
        <h4>{cantidad}</h4>
        <div>
            <Button variant="outline-warning" onClick={sumar}>➕</Button>{' '}
            <Button variant="outline-warning" onClick={restar}>➖</Button>{' '}
        </div>
        </>
    )
}