import NewsItem from "./NewsItem";
import { News } from "@/models/News.model";
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { DARK_THEME } from '@/themes/Dark.theme';
import { LIGHT_THEME } from '@/themes/Light.theme';
const NewsBlock = ({ data }: News) => {

  const newsBlockThemeStyles = (theme: Theme) => {
    const numberingStyles = {
      color: theme.color.accents,
      fontSize: "100px"
    };

    return {
      numberingStyles
    }
  }


  const Styles = useThemeAwareObject(newsBlockThemeStyles);
  const trendingNews = data.newsPageCollection.items.filter(item => item.trending === true);
  return (
    <div className="container news-block">
      <div className="row">
        <div className="col-md-2 col-6 news-block__right-now order-1">
          <div className="label">
            <h5>RIGHT NOW</h5>
          </div>
          <div className="row">
            {
              data.newsPageCollection.items.map((item, index) => (
                <NewsItem key={index} payload={item} main={false} number={index + 1} />
              ))
            }
          </div>

        </div>
        <div className="col-md-8 col-12 col-md-push-4 order-md-2 order-3">
          <div className="row">
            {
              data.newsPageCollection.items.map((item, index) => (
                <NewsItem key={index} payload={item} main={true} />
              ))
            }
          </div>

        </div>

        <div className="col-md-2 col-6 news-block__trending col-md-pull-4 order-md-3 order-2">
          <div className="label">
            <h5 className="text-right">TRENDING</h5>
          </div>
          <div className="row">
            {
              trendingNews.map((item, index) => (
                <NewsItem key={index} payload={item} main={false} trending={true} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsBlock;