import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSkip } from "@/redux/features/users/usersSlice";

const usePagination = () => {
  const dispatch = useAppDispatch();
  const { total, skip, limit } = useAppSelector((state) => state.users);

  const handlePageChange = useCallback(
    (page: number) => {
      const newSkip = (page - 1) * limit;
      dispatch(setSkip(newSkip));
    },
    [dispatch, limit]
  );

  return {
    total,
    limit,
    skip,
    handlePageChange,
  };
};

export default usePagination;
