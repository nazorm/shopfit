import { IProduct } from "../common/types";

export interface IProductCardProps{
    productcard : IProduct;
    handleCart :(id:number)=>void,
    disabled: number[],
}