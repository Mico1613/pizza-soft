import { Employee, EmployeeRole } from "~entities/employees";
import { SortingEnum } from "~shared/model";
import { compareAsc, compareDesc, parse } from "date-fns";

export const transformRoleToText = (role: EmployeeRole) => {
  const map = {
    cook: "повар",
    driver: "водитель",
    waiter: "официант",
  };
  return map[role];
};

export const sortEmployeesByCondition = (
  array: Employee[],
  sortingCondition: SortingEnum,
) => {
  if (sortingCondition === SortingEnum.nameAsc) {
    return array.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (sortingCondition === SortingEnum.nameDesc) {
    return array.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortingCondition === SortingEnum.birthDateAsc) {
    return array.sort((a, b) =>
      compareAsc(
        parse(a.birthday, "dd.MM.yyyy", new Date()),
        parse(b.birthday, "dd.MM.yyyy", new Date()),
      ),
    );
  }
  if (sortingCondition === SortingEnum.birthDateDesc) {
    return array.sort((a, b) =>
      compareDesc(
        parse(a.birthday, "dd.MM.yyyy", new Date()),
        parse(b.birthday, "dd.MM.yyyy", new Date()),
      ),
    );
  }

  return array;
};
