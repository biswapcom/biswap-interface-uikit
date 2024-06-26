import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";

// components
import Wrapper from "./Wrapper";
import Placeholder from "./Placeholder";

// types
import { ImageProps } from "./types";

// config
import observerOptions from "./options";

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Image: FC<ImageProps> = ({ src, alt, width, height, ...props }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (imgRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const { isIntersecting } = entry;
          if (isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      }, observerOptions);
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [src]);

  return (
    <Wrapper ref={imgRef} height={height} width={width} {...props}>
      {isLoaded ? <StyledImage src={src} alt={alt} /> : <Placeholder />}
    </Wrapper>
  );
};

export default Image;
