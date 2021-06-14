import { IProduct } from "../../common/types";

export interface ICartProps{
    cartProducts : IProduct;
    handleRemovefromCart:(id:number)=>void
    
}