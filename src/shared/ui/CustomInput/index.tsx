import { forwardRef, InputHTMLAttributes, useRef } from "react";

import styles from "./styles.module.scss";
import { IMaskInput } from "react-imask";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  mask?: string;
}

export const CustomInput = forwardRef<HTMLInputElement, Props>(
  ({ error, label, mask, ...rest }, ref) => {
    const maskedInputRef = useRef(null);
    return (
      <label className={styles.inputLabel}>
        <span>{label}</span>
        {mask ? (
          <IMaskInput
            {...rest}
            value={String(rest.value)}
            {...(mask === "date"
              ? {
                  mask: Date,
                  min: new Date(1900, 0, 1),
                  max: new Date(2024, 0, 1),
                }
              : { mask })}
            unmask={false}
            ref={maskedInputRef}
            inputRef={ref}
          />
        ) : (
          <input type="text" {...rest} ref={ref} />
        )}

        {error && <span className={styles.error}>{error}</span>}
      </label>
    );
  },
);
