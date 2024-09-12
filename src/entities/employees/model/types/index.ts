export interface Employee {
  birthday: string;
  id: number | string;
  isArchive: boolean;
  name: string;
  phone: string;
  role: EmployeeRole;
}

export type EmployeeFilterType = {
  isArchived: boolean;
  role: "" | EmployeeRole;
};

export type EmployeeRole = "cook" | "driver" | "waiter";

export type RolesOption = { label: string; value: EmployeeRole };
