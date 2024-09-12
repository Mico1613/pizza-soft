import { fetchAllEmployees, selectEmployeeById } from "~entities/employees";
import { FormToAddOrEdit } from "~features/FormToAddOrEdit";
import { FieldValues } from "~features/FormToAddOrEdit/model";
import { api } from "~shared/api";
import { useAppDispatch, useAppSelector } from "~shared/lib";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./styles.module.scss";

export const EditPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { employeeId } = useParams();
  const employee = useAppSelector((state) =>
    selectEmployeeById(state, employeeId),
  );
  const editEmployee = async (data: FieldValues) => {
    await api.patch(`/${employee?.id}`, data);
    dispatch(fetchAllEmployees());
    navigate("/");
  };
  return (
    <div className={styles.notFound}>
      {employee ? (
        <FormToAddOrEdit
          btnText="Редактировать"
          employee={employee}
          onSubmit={editEmployee}
        />
      ) : (
        <h1>Такой работник отсутствует</h1>
      )}
    </div>
  );
};
