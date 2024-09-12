export const transformSortingDirectionToText = (value: string) => {
  const [type, direction] = value.split("_");
  if (type === "name") {
    return direction === "asc" ? "(Я-А)" : "(А-Я)";
  }
  return direction === "asc" ? "(по возрастанию)" : "(по убыванию)";
};
