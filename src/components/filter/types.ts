export interface IFilterProps{
    handleSearchChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleSearch:(event:React.FormEvent<HTMLFormElement>)=>void,
    handleCategoryChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void
    handleOrderChange : (e:React.ChangeEvent<HTMLSelectElement>)=>void
}