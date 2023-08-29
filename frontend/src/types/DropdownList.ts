export interface IDropdownList {
  title: string;
  link: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  className?: string | undefined;
}
