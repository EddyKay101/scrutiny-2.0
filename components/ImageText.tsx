import Image from "next/image";
import Link from "next/link";
import { Theme } from '@/models/Theme.model';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { $c } from "utils/contentfulhelper";
// interface Props {
//   payload: NewsItem;
//   main: boolean;
//   trending?: boolean;
//   number?: number;
// }
const ImageText = () => {
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
        <img className="image-text__container--image" src="/images/pexels.jpg" alt="" />

        <div className="image-text__container--text-content" style={{ ...Styles.overPanel }}>
          <div className="title mx-auto py-3">
            <h4><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong></h4>
          </div>

          <div className="synopsis mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
        </div>
      </div>
    </div>

  )
}

export default ImageText;