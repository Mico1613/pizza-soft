import { EmployeesList } from "~widgets/EmployeesList/ui";
import { EmployeesListInteractions } from "~widgets/EmployeesListInteractions/ui";

import styles from "./styles.module.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <div className={styles.wrapper}>
      <EmployeesListInteractions />
      <EmployeesList />
    </div>
  );
};
