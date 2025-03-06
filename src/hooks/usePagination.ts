import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSkip as setUserSkip } from "@/redux/features/users/usersSlice";
import { setSkip as setProductSkip } from "@/redux/features/products/productsSlice";

const usePagination = (entity: "users" | "products") => {
  const dispatch = useAppDispatch();

  const { total, skip, limit } = useAppSelector((state) =>
    entity === "users" ? state.users : state.products
  );

  const handlePageChange = useCallback(
    (page: number) => {
      const newSkip = (page - 1) * limit;
      dispatch(
        entity === "users" ? setUserSkip(newSkip) : setProductSkip(newSkip)
      );
    },
    [dispatch, limit, entity]
  );

  return {
    total,
    limit,
    skip,
    handlePageChange,
  };
};

export default usePagination;
