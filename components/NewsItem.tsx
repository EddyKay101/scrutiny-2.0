import Image from "next/image";
import Link from "next/link";
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { DARK_THEME } from '@/themes/Dark.theme';
import { LIGHT_THEME } from '@/themes/Light.theme';
import { NewsItem } from "@/models/News.model";
interface Props {
  payload: NewsItem;
  main: boolean;
  trending?: boolean;
  number?: number;
}
const NewsItem = ({ payload, main, trending = false, number }: Props) => {
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
    <div className={`news-item ${!main ? "col-12" : "col-md-6"} ${trending === false && !main ? "mb-md-5" : ""}`}>

      {
        !main && trending === false &&
        <div className={`news-container`}>
          <div className="news-container__img-holder">
            <img src={payload?.image?.url} alt={payload.title} className="news-image" />
          </div>

          <div className="news-container__content-holder">
            <span className="news-container__numbering">
              <p style={{ ...Styles.numberingStyles }}>{number}</p>
            </span>
            <Link href="">
              <a>
                <h5>
                  <strong style={{ ...Styles.textStyles }}>
                    {payload?.title}
                  </strong>

                </h5>

              </a>
            </Link>
          </div>
        </div>
      }

      {
        main &&
        <div className={`news-container-main`}>
          <div className="news-container-main__img-holder">
            <img src={payload?.image?.url} alt={payload.title} className="news-image" />
          </div>
          {

            <div className="news-container-main__content-holder">
              <Link href="">
                <a>
                  <h5>
                    <strong>
                      {payload?.title}
                    </strong>

                  </h5>

                </a>
              </Link>
            </div>
          }
        </div>
      }
      {
        main === false && trending === true &&
        <div className={`news-container-main`}>
          {

            <div className="news-container-main__content-holder">
              <Link href="">
                <a>
                  <h5>
                    <strong>
                      {payload?.title}
                    </strong>

                  </h5>

                </a>
              </Link>
            </div>
          }
        </div>
      }


    </div>

  )
}

export default NewsItem;