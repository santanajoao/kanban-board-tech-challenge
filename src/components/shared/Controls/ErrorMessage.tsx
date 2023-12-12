type Props = {
  children?: string;
}

export function ErrorMessage({ children }: Props) {
  if (!children) return null;

  return (
    <p className="mt-2 text-xs text-primaryRed">{children}</p>
  );
}
