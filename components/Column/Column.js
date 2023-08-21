export const Column = ({ children, width, textColor, backgroundColor }) => {
  const widthStyle = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };

  const textColorStyle = textColor ? { textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  const combinedStyles = {
    ...widthStyle,
    ...textColorStyle,
    ...backgroundColorStyle,
  };
  return (
    <div style={combinedStyles} className="px-2 py-5">
      {children}
    </div>
  );
};
