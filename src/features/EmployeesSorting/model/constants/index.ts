import { SortingEnum } from "~shared/model";

export const sortingOptions = [
  { label: "Имя", value: SortingEnum.nameDesc },
  { label: "Имя", value: SortingEnum.nameAsc },
  { label: "Дата рождения", value: SortingEnum.birthDateAsc },
  { label: "Дата рождения", value: SortingEnum.birthDateDesc },
];
