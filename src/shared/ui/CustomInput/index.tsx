import { forwardRef, InputHTMLAttributes } from "react";

import styles from "./styles.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}
export const CustomInput = forwardRef<HTMLInputElement, Props>(
  ({ error, label, ...rest }, ref) => {
    return (
      <label className={styles.inputLabel}>
        <span>{label}</span>
        <input type="text" {...rest} ref={ref} />
        {error && <span className={styles.error}>{error}</span>}
      </label>
    );
  },
);
