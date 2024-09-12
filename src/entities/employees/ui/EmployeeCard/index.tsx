import { Employee, transformRoleToText } from "~entities/employees";

import styles from "./styles.module.scss";

type Props = {
  employeeData: Employee;
};

export const EmployeeCard = ({ employeeData }: Props) => {
  return (
    <div className={styles.employeeCard}>
      <h3>{employeeData.name}</h3>
      <span>Телефон: {employeeData.phone}</span>
      <span>Должность: {transformRoleToText(employeeData.role)}</span>
    </div>
  );
};
