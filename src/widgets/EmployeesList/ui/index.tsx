import {
  Employee,
  EmployeeCard,
  selectFilteredEmployees,
} from "~entities/employees";
import { useAppSelector } from "~shared/lib";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export const EmployeesList = () => {
  const navigate = useNavigate();
  const filteredEmployees = useAppSelector(selectFilteredEmployees);

  const goToEdit = (employee: Employee) => {
    navigate(`/edit/${employee.id}`);
  };

  return (
    <div className={styles.employeesWrapper}>
      {filteredEmployees.map((employee) => (
        <button key={employee.id} onClick={() => goToEdit(employee)}>
          <EmployeeCard employeeData={employee} />
        </button>
      ))}
    </div>
  );
};
