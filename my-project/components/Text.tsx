export type TextProps = {
  children: React.ReactNode;
  color?: string;
  size?:
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl"
    | "text-7xl"
    | "text-8xl"
    | "text-9xl";
  weight?:
    | "font-thin"
    | "font-extralight"
    | "font-light"
    | "font-normal"
    | "font-medium"
    | "font-semibold"
    | "font-bold"
    | "font-extrabold"
    | "font-black";
  style?: React.CSSProperties;
  className?: string;
};

const Text = (props: TextProps) => {
  const { children, style, size, weight, ...rest } = props;
  const className =
    "font-normal" +
    (size ? " " + size : "") +
    (weight ? " " + weight : "") +
    (props.className ? " " + props.className : "");
  return (
    <p {...rest} className={className} style={style}>
      {children}
    </p>
  );
};

export default Text;
