

export interface IClient{
    sandbox:string,
    production: string,
}

export interface IPaypayProps{
    env : string,
    client: IClient,
    currency: string,
    total: number,
    onError:(err:any)=>void
    onSuccess:(payment:any)=>void
    onCancel:(data:any)=>void
}
