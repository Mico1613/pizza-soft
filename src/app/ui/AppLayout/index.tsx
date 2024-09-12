import { Spinner } from "@chakra-ui/react";
import { fetchAllEmployees, selectIsLoading } from "~entities/employees";
import { useAppDispatch, useAppSelector } from "~shared/lib";
import { ReactNode, useEffect } from "react";

import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};
export const AppLayout = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAllEmployees());
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}>
          <Spinner
            color="blue.500"
            emptyColor="gray.200"
            size="xl"
            speed="1s"
            thickness="4px"
          />
        </div>
      ) : (
        <main className={styles.layout}>{children}</main>
      )}
    </>
  );
};
