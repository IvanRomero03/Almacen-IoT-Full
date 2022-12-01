const OutlinedButton = (props: any) => {
  const { children, style, ...rest } = props;
  return (
    <button
      {...rest}
      // on hover the button should change to a solid color and opacity should be 50%
      className="border-2 border-gray-300 p-6 mt-4 ml-4 rounded-lg hover:bg-cyan-500 hover:bg-opacity-50"
      style={style}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
