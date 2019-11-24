import { Country } from "./../config/countries";
import { HTMLAttributes, ReactNode } from "react";
import { BaseTextFieldProps } from "@material-ui/core/TextField";

type InnerRefType = null[] | { current: any } | any;

export type InputComponentProps = Pick<BaseTextFieldProps, "inputRef"> &
  HTMLAttributes<HTMLDivElement>;

export interface OptionType {
  label: string;
  value: string;
  image: string;
}

export interface InputComponent {
  inputRef: InnerRefType;
}

export interface IOption {
  children?: ReactNode;
  innerProps?: InnerRefType;
  innerRef?: InnerRefType;
  isFocused: boolean;
  isSelected: boolean;
}

export interface IPlaceholder {
  selectProps: any;
  children?: ReactNode;
  innerProps?: any;
}

export interface ISingleValue extends OptionType {
  selectProps: any;
  children?: ReactNode;
  innerProps?: InnerRefType;
  data: Country;
}

export interface IValueContainer {
  selectProps: any;
  children?: ReactNode;
}

export interface IMenu {
  children: ReactNode;
  innerProps: InnerRefType;
  selectProps: any;
}

export interface IComponents {
  [key: string]: ReactNode;
}
