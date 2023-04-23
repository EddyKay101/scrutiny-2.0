import Link from "next/link";
import { Theme } from "@/models/Theme.model";
import { useThemeAwareObject } from "@/hooks/ThemeAwareObject.hook";
import { $c } from "utils/contentfulhelper";
import { RichTextContent, RichTextData } from "contentful";
import { useMemo, memo } from "react";

export interface ImageTextItem {
  title: string;
  body?: RichTextData | RichTextContent;
  copy?: RichTextData | RichTextContent;
  image: {
    url: string;
  };
}

interface Props {
  payload: ImageTextItem;
  showCopy?: boolean;
}

const ImageText = ({ payload, showCopy = true }: Props) => {
  const imageTextThemeStyles = (theme: Theme) => {
    const overPanel = {
      background: theme.color.primary,
      color: theme.id === "dark" ? theme.color.secondary : theme.color.accents,
    };

    return {
      overPanel,
    };
  };

  const Styles = useThemeAwareObject(imageTextThemeStyles);

  const memoizedBodyContent = useMemo(() => {
    if (!payload.body) return null;
    return $c.markdown(payload.body);
  }, [payload.body]);

  const memoizedCopyContent = useMemo(() => {
    if (!payload.copy || !showCopy) return null;
    return $c.markdown(payload.copy);
  }, [payload.copy, showCopy]);

  return (
    <div className="row image-text">
      <div className="col-12 image-text__container">
        <div className="image-text__container--img-holder">
          <img className="image-text__container--image" src={payload?.image?.url} alt="" />
        </div>

        <div className="image-text__container--text-content" style={{ ...Styles.overPanel }}>
          <div className="title mx-auto py-3">
            <h4>
              <strong>{payload?.title}</strong>
            </h4>
          </div>

          <div className="synopsis mx-auto">
            {memoizedBodyContent}
            {memoizedCopyContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ImageText);
