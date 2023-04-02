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
  const newsItemThemeStyles = (theme: Theme) => {
    const textStyles = {
      color: `#000000`
    };
    const numberingStyles = {
      color: theme.color.tertiary,
      fontSize: "170px",
      fontWeight: 900,
      opacity: 0.4
    };

    return {
      textStyles,
      numberingStyles
    }
  }

  const Styles = useThemeAwareObject(newsItemThemeStyles);
  return (
    <div>

    </div>

  )
}

export default ImageText;