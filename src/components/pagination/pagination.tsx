import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

export default function PaginationOfferts({
  meta,
  prev,
  next,
  access,
}: {
  prev?: () => void;
  next?: () => void;
  access?: (page: number) => void;
  meta?: { page: number; limit: number; total: number; last_page: number };
}) {
  return (
    <Pagination className="m-0 p-0 w-full h-fit">
      <PaginationContent className="flex justify-between w-full m-0 p-0 h-fit">
        {/* prev */}
        <PaginationItem
          className="border rounded-lg"
          onClick={() => {
            if (meta?.page !== 1 && prev) prev();
          }}
        >
          <PaginationPrevious />
          {/* <PaginationPrevious className={isMobile ? "size-2" : undefined} /> */}
        </PaginationItem>

        {meta && (
          <nav className="flex">
            {/* Show first page if we're far from the beginning */}
            {meta.page > 3 && (
              <>
                <PaginationItem onClick={() => access && access(1)}>
                  <PaginationLink>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </>
            )}

            {/* Show previous page */}
            {meta.page > 1 && (
              <PaginationItem onClick={() => access && access(meta.page - 1)}>
                <PaginationLink>{meta.page - 1}</PaginationLink>
              </PaginationItem>
            )}

            {/* Current page */}
            <PaginationItem>
              <PaginationLink isActive>{meta.page}</PaginationLink>
            </PaginationItem>

            {/* Show next page */}
            {meta.page < meta.last_page && (
              <PaginationItem onClick={() => access && access(meta.page + 1)}>
                <PaginationLink>{meta.page + 1}</PaginationLink>
              </PaginationItem>
            )}

            {/* Show ellipsis and last page if we're far from the end */}
            {meta.page < meta.last_page - 2 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem
                  onClick={() => access && access(meta.last_page)}
                >
                  <PaginationLink>{meta.last_page}</PaginationLink>
                </PaginationItem>
              </>
            )}
          </nav>
        )}

        {/* next */}
        <PaginationItem
          className="border rounded-lg"
          onClick={() => {
            if (meta?.page !== meta?.last_page && next) next();
          }}
        >
          {/* <PaginationNext className={isMobile ? "size-2" : undefined} /> */}
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
