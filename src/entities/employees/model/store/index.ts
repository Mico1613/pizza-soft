import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sortEmployeesByCondition } from "~entities/employees";
import { api } from "~shared/api";
import { SortingEnum } from "~shared/model";

import { Employee, EmployeeFilterType } from "../types";

interface EmployeesState {
  employees: Employee[];
  filter: EmployeeFilterType;
  filteredEmployees: Employee[];
  isLoading: boolean;
  sortingCondition: SortingEnum;
}

const initialState: EmployeesState = {
  employees: [],
  filter: {
    isArchived: false,
    role: "",
  },
  filteredEmployees: [],
  isLoading: false,
  sortingCondition: SortingEnum.nameDesc,
};

export const fetchAllEmployees = createAsyncThunk(
  "employees/fetchAllEmployees",
  async () => {
    try {
      const resp = await api.get("");
      return resp.data;
    } catch (error) {
      console.error(error);
    }
  },
);

export const employeesSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(fetchAllEmployees.fulfilled, (state, { payload }) => {
      state.employees = payload;
      state.filteredEmployees = sortEmployeesByCondition(
        payload,
        SortingEnum.nameDesc,
      );
      state.isLoading = false;
    });
    builder.addCase(fetchAllEmployees.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllEmployees.rejected, (state) => {
      state.isLoading = false;
    });
  },
  initialState,
  name: "employees",
  reducers: {
    filterEmployees: (state, action: PayloadAction<EmployeeFilterType>) => {
      const filter = action.payload;
      if (filter.role === "") {
        state.filteredEmployees = sortEmployeesByCondition(
          state.employees.filter((employee) =>
            filter.isArchived ? employee.isArchive : employee,
          ),
          state.sortingCondition,
        );
      } else {
        state.filteredEmployees = sortEmployeesByCondition(
          state.employees.filter(
            (employee) =>
              employee.role === filter.role &&
              (filter.isArchived ? employee.isArchive : employee),
          ),
          state.sortingCondition,
        );
      }
      state.filter = filter;
    },
    sortEmployees: (state, action: PayloadAction<SortingEnum>) => {
      const sortingCondition = action.payload;
      if (sortingCondition === SortingEnum.nameAsc) {
        state.filteredEmployees = sortEmployeesByCondition(
          state.filteredEmployees,
          SortingEnum.nameAsc,
        );
      }
      if (sortingCondition === SortingEnum.nameDesc) {
        state.filteredEmployees = sortEmployeesByCondition(
          state.filteredEmployees,
          SortingEnum.nameDesc,
        );
      }
      if (sortingCondition === SortingEnum.birthDateAsc) {
        state.filteredEmployees = sortEmployeesByCondition(
          state.filteredEmployees,
          SortingEnum.birthDateAsc,
        );
      }
      if (sortingCondition === SortingEnum.birthDateDesc) {
        state.filteredEmployees = sortEmployeesByCondition(
          state.filteredEmployees,
          SortingEnum.birthDateDesc,
        );
      }
      state.sortingCondition = sortingCondition;
    },
  },
  selectors: {
    selectEmployeeById: (state, id?: number | string) => {
      return state.employees.find((employee) => employee.id === id);
    },
    selectFilter: (state) => state.filter,
    selectFilteredEmployees: (state) => state.filteredEmployees,
    selectIsLoading: (state) => state.isLoading,
  },
});

export const { filterEmployees, sortEmployees } = employeesSlice.actions;

export const {
  selectEmployeeById,
  selectFilter,
  selectFilteredEmployees,
  selectIsLoading,
} = employeesSlice.selectors;

export default employeesSlice.reducer;
