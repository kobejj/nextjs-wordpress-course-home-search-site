import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUris } from "utils/relativeToAbsoluteUris";

export const Paragraph = ({ textAlign = "left", content, textColor }) => {
  return (
    <p
      className={`max-w-5xl mx-auto ${getTextAlign(textAlign)} `}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUris(content) }}
      style={{
        textAlign: textAlign,
        color: textColor,
      }}
    />
  );
};
