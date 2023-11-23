import {useEffect, useState} from "react";
import { getProductsById } from "../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const { id } = useParams ();
    const [item, setItem] = useState(null);

    useEffect ( () =>{
        getProductsById (id)
       .then (resp => setItem (resp))
       .catch (error => console.log(error));
    }, [])
    return(
        <>
        {item && <ItemDetail {...item} />}
        </>
        )
       }