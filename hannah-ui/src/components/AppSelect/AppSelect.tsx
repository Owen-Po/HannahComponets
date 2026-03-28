import ReactSelect, {
  type GroupBase,
  type Props as ReactSelectProps,
} from "react-select";
import Creatable, { type CreatableProps } from "react-select/creatable";

export interface SelectOption {
  value: string;
  label: string;
}

type AppSelectProps<
  Option = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = ReactSelectProps<Option, IsMulti, Group> &
  Pick<
    CreatableProps<Option, IsMulti, Group>,
    "onCreateOption" | "formatCreateLabel" | "isValidNewOption"
  > & {
    isCreatable?: boolean;
  };

export const AppSelect = <
  Option = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  placeholder = "Seleccione una opción...",
  noOptionsMessage = () => "Sin opciones",
  loadingMessage = () => "Cargando...",
  isSearchable = true,
  isCreatable = false,
  onCreateOption,
  formatCreateLabel = (input) => `Usar "${input}"`,
  isValidNewOption,
  ...props
}: AppSelectProps<Option, IsMulti, Group>) => {
  const sharedClassNames: ReactSelectProps<Option, IsMulti, Group>["classNames"] = {
    control: ({ isFocused, isDisabled }) =>
      [
        "flex min-h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-colors",
        isFocused
          ? "border-amber-400 ring-amber-400/50 ring-[3px] outline-none"
          : "border-gray-300",
        isDisabled ? "cursor-not-allowed opacity-50" : "cursor-default",
      ].join(" "),
    valueContainer: () => "flex flex-wrap gap-1 py-0.5",
    placeholder: () => "text-gray-400",
    singleValue: () => "text-gray-900",
    input: () => "text-gray-900",
    indicatorsContainer: () => "flex items-center gap-1",
    dropdownIndicator: ({ isFocused }) =>
      [
        "text-gray-400 transition-colors hover:text-gray-600",
        isFocused ? "text-gray-600" : "",
      ].join(" "),
    clearIndicator: () =>
      "text-gray-400 transition-colors hover:text-red-500 cursor-pointer",
    indicatorSeparator: () => "bg-gray-200 mx-0.5 self-stretch w-px",
    menu: () =>
      "mt-1 rounded-md border border-gray-200 bg-white text-gray-900 shadow-md z-50 overflow-hidden",
    menuList: () => "p-1 max-h-60 overflow-auto",
    option: ({ isFocused, isSelected }) =>
      [
        "relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        isSelected
          ? "bg-amber-100 text-amber-800 font-medium"
          : isFocused
            ? "bg-amber-50 text-amber-700"
            : "text-gray-900",
      ].join(" "),
    noOptionsMessage: () => "py-6 text-center text-sm text-gray-400",
    loadingMessage: () => "py-6 text-center text-sm text-gray-400",
    multiValue: () =>
      "flex items-center gap-1 rounded-sm bg-gray-100 text-gray-800 px-1.5 py-0.5 text-xs font-medium",
    multiValueLabel: () => "text-gray-800",
    multiValueRemove: () =>
      "hover:text-red-500 cursor-pointer transition-colors",
    group: () => "py-1",
    groupHeading: () =>
      "px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider",
  };

  const commonProps = {
    unstyled: true as const,
    placeholder,
    noOptionsMessage,
    loadingMessage,
    isSearchable,
    classNames: sharedClassNames,
    menuPosition: "fixed" as const,
    menuPortalTarget: typeof document !== "undefined" ? document.body : null,
    styles: { menuPortal: (base: any) => ({ ...base, zIndex: 9999 }) },
    ...props,
  };

  if (isCreatable) {
    return (
      <Creatable<Option, IsMulti, Group>
        {...commonProps}
        onCreateOption={onCreateOption}
        formatCreateLabel={formatCreateLabel}
        isValidNewOption={isValidNewOption}
      />
    );
  }

  return <ReactSelect<Option, IsMulti, Group> {...commonProps} />;
};
