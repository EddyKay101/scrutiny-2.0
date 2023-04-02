import Image from "next/image";
import Link from "next/link";
import { Theme } from '@/models/Theme.model';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { $c } from "utils/contentfulhelper";
import { RichTextContent, RichTextData } from "contentful";
interface ImageTextItem {
  title: string;
  body: RichTextData | RichTextContent;
  image: {
    url: string;
  }
}
interface Props {
  payload: ImageTextItem;
}
const ImageText = ({ payload }: Props) => {
  const imageTextThemeStyles = (theme: Theme) => {
    const overPanel = {
      background: theme.color.primary,
      color: theme.id === "dark" ? theme.color.secondary : theme.color.accents
    };


    return {
      overPanel,
    }
  }

  const Styles = useThemeAwareObject(imageTextThemeStyles);
  return (
    <div className="row image-text">
      <div className="col-12 image-text__container">
        <img className="image-text__container--image" src={payload?.image?.url} alt="" />

        <div className="image-text__container--text-content" style={{ ...Styles.overPanel }}>
          <div className="title mx-auto py-3">
            <h4><strong>{payload?.title}</strong></h4>
          </div>

          <div className="synopsis mx-auto">
            {$c.markdown(payload?.body)}
          </div>
        </div>
      </div>
    </div>

  )
}

export default ImageText;