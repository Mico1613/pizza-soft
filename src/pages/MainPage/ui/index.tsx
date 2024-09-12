import { EmployeesList } from "~widgets/EmployeesList/ui";
import { EmployeesListInteractions } from "~widgets/EmployeesListInteractions/ui";

import styles from "./styles.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <EmployeesListInteractions />
      <EmployeesList />
    </div>
  );
};
