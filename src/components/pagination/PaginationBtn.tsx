import React from "react";
import { Pagination } from "antd";
import "./styles.scss";
import { IPaginationNumberProps } from "./type";

const PaginationBtn = ({
  productsPerPage,
  totalProducts,
  handlePage,
}: IPaginationNumberProps) => {
  const pageNumbers = [];
  if (!totalProducts || !productsPerPage) {
    return <p></p>;
  }

  const displayPage = Math.ceil(totalProducts / productsPerPage);
  pageNumbers.push(displayPage);

  return <div className="page-number">
      {pageNumbers.map((pageNumber)=>(
        <Pagination
					key={pageNumber}
					pageSize={10}
					total={totalProducts}
					showSizeChanger={false}
					onChange={handlePage}
				/>
      ))}
  </div>;
};

export default PaginationBtn;
