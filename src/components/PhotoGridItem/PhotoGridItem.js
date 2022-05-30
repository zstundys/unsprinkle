import styled from "styled-components/macro";
import Picture from "../Picture";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image src={src} alt={alt} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled(Picture)`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: block;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 4px 0;
`;

const Tag = styled.li`
  display: inline;
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  position: relative;
  margin-left: 8px;
  margin-right: 16px;

  &::before {
    content: "";
    position: absolute;
    inset: -4px -8px;
    background: var(--color-gray-300);
    z-index: -1;
  }
`;

export default PhotoGridItem;
