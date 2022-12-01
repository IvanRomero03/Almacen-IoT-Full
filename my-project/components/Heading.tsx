import { TextProps } from "./Text";
type HeadingProps = TextProps;

const Heading = (props: HeadingProps) => {
  const { children, style, size, weight, ...rest } = props;
  const className =
    "font-bold" +
    (size ? " " + size : "") +
    (weight ? " " + weight : "") +
    (props.className ? " " + props.className : "");
  return (
    <h1 {...rest} className={className} style={style}>
      {children}
    </h1>
  );
};

export default Heading;
