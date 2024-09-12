import { EmployeeFilters } from "~features/EmployeesFilter";
import { EmployeesSorting } from "~features/EmployeesSorting";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export const EmployeesListInteractions = () => {
  const navigate = useNavigate();
  const goToAddPage = () => {
    navigate("/add");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <span>Фильтры:</span>
        <EmployeeFilters />
      </div>
      <div className={styles.sorting}>
        <span>Сортировка:</span>
        <EmployeesSorting />
      </div>
      <div className={styles.addEmployee}>
        <button onClick={goToAddPage}>Добавить сотрудника</button>
      </div>
    </div>
  );
};
