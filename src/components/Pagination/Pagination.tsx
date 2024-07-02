import React, { FC } from "react";
import { variant as systemVariant } from "styled-system";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import classNames from "classnames";

// types
import { type PaginationProps, Variants } from "./types";

// theme
import { PaginationVariants, VariantsArrows } from "./theme";

// components
import { ChevronLeftIcon, ChevronRightIcon } from "../Svg";
import { Flex } from "../Box";

const PaginationWrap = styled(Flex)<{ variant: Variants }>`
  justify-content: center;

  .paginate-wrapper {
    display: flex;
    justify-content: center;
  }

  .pagination {
    display: flex;

    li {
      width: 40px;
      height: 40px;
      border: 0;
      border-radius: 8px;
      outline: 0;
      list-style-type: none;
      line-height: 20px;
      font-size: 14px;
      font-weight: 600;
      transition:
        opacity 0.4s ease-in-out,
        color 0.4s ease-in-out;

      ${systemVariant({
        variants: PaginationVariants,
      })}

      &:hover {
        &:not(:first-child, :last-child, .active) {
          opacity: 0.56;
        }
      }

      &.active {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.primary};

        &:hover {
          background: lighten(${({ theme }) => theme.colors.primary}, 5%);
        }
      }

      &:first-child,
      :last-child {
        background-color: ${({ theme }) => theme.colors.dark800};

        &:hover {
          background-color: #46465f;
        }
      }

      &.previous,
      &.next {
        background-color: transparent;
        transition: all 0.4s ease-in-out;

        ${systemVariant({
          variants: VariantsArrows,
        })}
      }

      &.previous {
        margin-right: 12px;

        ${({ theme }) => theme.mediaQueries.sm} {
          margin-right: 24px;
        }
      }
      &.next {
        margin-left: 12px;

        ${({ theme }) => theme.mediaQueries.sm} {
          margin-left: 24px;
        }
      }

      &.disabled {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.32;
      }
      &.break-me {
        width: 20px;

        a {
          width: 20px;
        }
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      font-weight: 600;

      &:focus {
        outline: none;
      }
    }
  }
`;

const Pagination: FC<PaginationProps> = ({
  variant,
  isLight,
  pageCount,
  handlePageClick,
  marginPagesDisplayed = 1,
  pageRangeDisplayed = 2,
  forcePage = 0,
}) => {
  const paginationClass = classNames("paginate-wrapper", {
    paginate__light: isLight,
    paginate__dark: !isLight,
  });

  return (
    <PaginationWrap className={paginationClass} variant={variant}>
      <ReactPaginate
        previousLabel={<ChevronLeftIcon color={variant === Variants.LIGHT ? "primary" : "white"} />}
        nextLabel={<ChevronRightIcon color={variant === Variants.LIGHT ? "primary" : "white"} />}
        forcePage={forcePage}
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </PaginationWrap>
  );
};

export default Pagination;
