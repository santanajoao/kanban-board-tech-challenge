export const inputVariants = {
  'outline-fieldset': {
    container: 'relative text-primaryGray flex items-center',
    label: 'absolute left-0 top-0 w-fit px-1 text-[11px] translate-x-2 -translate-y-1/2 bg-white',
    input: 'border w-full border-secondaryGray rounded-md px-2 py-3 text-sm placeholder:font-semibold placeholder:text-secondaryGray',
  },
};

export type InputVariants = keyof typeof inputVariants;

export type FieldsetInputProps = {
  label: string;
  variant?: InputVariants;
}
