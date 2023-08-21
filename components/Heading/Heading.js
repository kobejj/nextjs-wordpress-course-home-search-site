import { getFontSizeForHeading, getTextAlign } from "utils/fonts";
import { createElement } from "react";

export const Heading = ({ textAlign, content, level = 2, textColor }) => {
  console.log(textColor);
  const tag = createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
    style: { color: textColor },
  });
  return tag;
};
