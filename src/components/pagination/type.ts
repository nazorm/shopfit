export interface IPaginationNumberProps{
    productsPerPage?: number;
  totalProducts?: number;
  handlePage?: (id: number) => void;
}