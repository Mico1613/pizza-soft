import { Select } from "@chakra-ui/react";
import { sortEmployees } from "~entities/employees";
import { transformSortingDirectionToText } from "~features/EmployeesSorting/lib";
import { sortingOptions } from "~features/EmployeesSorting/model";
import { useAppDispatch } from "~shared/lib";
import { SortingEnum } from "~shared/model";
import { ChangeEventHandler } from "react";

export const EmployeesSorting = () => {
  const dispatch = useAppDispatch();
  const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(sortEmployees(e.target.value as SortingEnum));
  };
  return (
    <Select onChange={onSelect}>
      {sortingOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {`${option.label} ${transformSortingDirectionToText(option.value)}`}
        </option>
      ))}
    </Select>
  );
};
