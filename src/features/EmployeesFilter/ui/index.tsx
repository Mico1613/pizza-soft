import { Checkbox, Select } from "@chakra-ui/react";
import {
  EmployeeFilterType,
  filterEmployees,
  rolesOptions,
  selectFilter,
} from "~entities/employees";
import { useAppDispatch, useAppSelector } from "~shared/lib";
import { ChangeEventHandler } from "react";

import styles from "./styles.module.scss";

export const EmployeeFilters = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(
      filterEmployees({
        isArchived: filter.isArchived,
        role: e.target.value as EmployeeFilterType["role"],
      }),
    );
  };

  const handleCheckbox: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(
      filterEmployees({
        isArchived: e.target.checked,
        role: filter.role,
      }),
    );
  };

  return (
    <div className={styles.wrapper}>
      <Select onChange={handleSelect} placeholder=" ">
        {rolesOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Checkbox onChange={handleCheckbox}>В архиве</Checkbox>
    </div>
  );
};
