import classNames from "classnames";
import { useState, useEffect } from "react";

interface Props {
  placeholderSrc: string;
  src: string;
  [x: string]: any;
}

const ProgressiveImage = ({ placeholderSrc, src, ...props }: Props) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className={classNames(
        "transition-all",
        {
          "filter blur-md": placeholderSrc && imgSrc === placeholderSrc,
        },
        props.className,
      )}
    />
  );
};

export default ProgressiveImage;
