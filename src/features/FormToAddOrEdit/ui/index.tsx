import { Button, Checkbox } from "@chakra-ui/react";
import { Employee, rolesOptions } from "~entities/employees";
import { FieldValues, resolver } from "~features/FormToAddOrEdit/model";
import { CustomInput, CustomSelect } from "~shared/ui";
import { Controller, useForm } from "react-hook-form";

import styles from "./styles.module.scss";

interface Props {
  btnText: string;
  employee?: Employee;
  onSubmit: (data: FieldValues) => void;
}

export const FormToAddOrEdit = ({ btnText, employee, onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      birthday: employee?.birthday ?? "",
      isArchived: employee?.isArchive ?? false,
      name: employee?.name ?? "",
      phone: employee?.phone ?? "",
      role: employee?.role ?? rolesOptions[0].value,
    },
    resolver,
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState }) => (
          <CustomInput
            {...field}
            error={fieldState.error?.message}
            label="Фамилия и имя"
            maxLength={50}
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field, fieldState }) => (
          <CustomInput
            {...field}
            error={fieldState.error?.message}
            label="Номер телефона"
            maxLength={17}
          />
        )}
      />
      <Controller
        control={control}
        name="birthday"
        render={({ field, fieldState }) => (
          <CustomInput
            {...field}
            error={fieldState.error?.message}
            label="Дата рождения"
          />
        )}
      />
      <Controller
        control={control}
        name="role"
        render={({ field, fieldState }) => (
          <CustomSelect
            {...field}
            error={fieldState.error?.message}
            label="Роль"
          >
            {rolesOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
        )}
      />
      <Controller
        control={control}
        name="isArchived"
        render={({ field: { value, ...restField } }) => (
          <Checkbox {...restField} isChecked={!!value}>
            В архиве
          </Checkbox>
        )}
      />
      <Button colorScheme="blue" type="submit">
        {btnText}
      </Button>
    </form>
  );
};
