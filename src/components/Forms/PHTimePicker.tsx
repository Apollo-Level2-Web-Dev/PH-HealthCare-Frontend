import React from "react";
import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface ITimePicker {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

const PHTimePicker = ({
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
  sx,
}: ITimePicker) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              {...field}
              label={label}
              value={value || Date.now()}
              onChange={(time) => onChange(time)}
              timezone="system"
              slotProps={{
                textField: {
                  required: required,
                  fullWidth: fullWidth,
                  size: size,
                  sx: {
                    ...sx,
                  },
                  variant: "outlined",
                  error: isError,
                  helperText: isError
                    ? (formState.errors[name]?.message as string)
                    : "",
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default PHTimePicker;
