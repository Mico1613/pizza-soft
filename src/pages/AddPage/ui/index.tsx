import { fetchAllEmployees } from "~entities/employees";
import { FormToAddOrEdit } from "~features/FormToAddOrEdit";
import { FieldValues } from "~features/FormToAddOrEdit/model";
import { api } from "~shared/api";
import { useAppDispatch } from "~shared/lib";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const AddPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const addEmployee = async (data: FieldValues) => {
    await api.post("", { id: uuidv4(), ...data });
    dispatch(fetchAllEmployees());
    navigate("/");
  };
  return (
    <div>
      <FormToAddOrEdit btnText="Создать" onSubmit={addEmployee} />
    </div>
  );
};
