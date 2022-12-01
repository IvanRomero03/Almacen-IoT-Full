type BoxProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  outline?: boolean;
  size?: "box-sm" | "box-md" | "box-lg";
  height?: string; //
  width?: string;
};

const Box = (props: BoxProps) => {
  const { children, style, ...rest } = props;
  return (
    <div
      {...rest}
      className="outline-dashed w-64 h-24 border-2 border-gray-300 bg-slate-400 p-6 mt-4 ml-4"
      style={style}
    >
      {children}
    </div>
  );
};

export default Box;
