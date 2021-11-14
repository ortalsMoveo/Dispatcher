import { TagStyle } from "./Style";

interface Tag {
  textTag: string;
}

const Tag = ({ textTag }: Tag) => {
  return <TagStyle>{textTag}</TagStyle>;
};

export default Tag;
