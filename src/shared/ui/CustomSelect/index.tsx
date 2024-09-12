import { Select } from "@chakra-ui/react";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import styles from "./styles.module.scss";

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  error?: string;
  label?: string;
}
export const CustomSelect = forwardRef<HTMLSelectElement, Props>(
  ({ children, error, label, size, ...rest }, ref) => {
    return (
      <div className={styles.selectWrapper}>
        {label && <span>{label}</span>}
        <Select {...rest} ref={ref}>
          {children}
        </Select>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  },
);
