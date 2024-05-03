"use client";

import { useRouter, useSearchParams } from "next/navigation";

const PaginationControls = ({ hasNextPage, hasPrevPage, listLength }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // read the current url query string
  const page = searchParams.get("page") ?? 1;
  const per_page = searchParams.get("per_page") ?? 5;

  return (
    <>
      {listLength > 5 && (
        <div className="flex gap-4 justify-center items-center">
          {/* Prev button */}
          <button
            className={`${
              !hasPrevPage ? "bg-slate-300" : "bg-blue-500"
            } text-white py-1 px-2`}
            disabled={!hasPrevPage}
            onClick={() => {
              router.push(`/?page=${page - 1}&per_page=${per_page}`);
            }}
          >
            Prev
          </button>

          {/* Number of pages */}
          <div>
            {page} / {Math.ceil(listLength / per_page)}
          </div>

          {/* Next button */}
          <button
            className={`${
              !hasNextPage ? "bg-slate-300" : "bg-blue-500"
            } text-white py-1 px-2`}
            disabled={!hasNextPage}
            onClick={() => {
              router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
            }}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default PaginationControls;
