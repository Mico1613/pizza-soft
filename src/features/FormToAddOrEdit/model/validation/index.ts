import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeRole } from "~entities/employees";
import { z, ZodType } from "zod";

export interface FieldValues {
  birthday: string;
  isArchived: boolean;
  name: string;
  phone: string;
  role: EmployeeRole;
}

const schema: ZodType<FieldValues> = z.object({
  birthday: z
    .string({ required_error: "Это обязательное поле" })
    .trim()
    .regex(
      /^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)\d\d$/gim,
      "Введите дату рождения в формате дд.мм.гггг",
    ),
  isArchived: z.boolean(),
  name: z
    .string({ required_error: "Это обязательное поле" })
    .trim()
    .regex(
      /[а-яА-ЯЁё]{2,}\s[а-яА-ЯЁё]{2,}/gim,
      "Введите корректные фамилию и имя",
    ),
  phone: z
    .string({ required_error: "Это обязательное поле" })
    .trim()
    .regex(
      /^\+7\s\(\d{3}\)\s\d{3}-\d{4}$/gim,
      "Введите номер телефона в формате +7 (912) 345-6789",
    ),
  role: z.union([z.literal("cook"), z.literal("driver"), z.literal("waiter")]),
});

export const resolver = zodResolver(schema);
