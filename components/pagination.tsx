'use client'
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };
  console.log(currentPage, totalPages, handlePageChange(1))

  return (
    <div className="flex justify-center mt-6">
      
    </div>
  );
};

export default Pagination;