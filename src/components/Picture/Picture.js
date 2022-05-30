import styled from "styled-components";

const Picture = ({
  className,
  src,
  alt,
  formats = ["avif", "jpg"],
  sizes = ["", "@2x", "@3x"],
}) => {
  const srcWithoutExt = src.replace(/\.[^/.]+$/, "");
  const srcFallback = `${srcWithoutExt}.${formats[formats.length - 1]}`;

  return (
    <picture>
      {formats.map((format) => (
        <source
          key={format}
          type={`image/${format}`}
          srcSet={sizes
            .map((size, i) => `${srcWithoutExt}${size}.${format} ${i + 1}x`)
            .join(", ")}
        />
      ))}
      <Img className={className} src={srcFallback} alt={alt} />
    </picture>
  );
};

const Img = styled.img`
  object-fit: cover;
`;

export default Picture;
