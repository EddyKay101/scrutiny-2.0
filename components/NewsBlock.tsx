import NewsItem from "./NewsItem";
import { News } from "@/models/News.model";
const NewsBlock = ({ data }: News) => {
  const trendingNews = data.newsPageCollection.items.filter(item => item.trending === true);
  return (
    <div className="container news-block">
      <div className="row">
        <div className="col-md-2 news-block__right-now">
          <div className="label">
            <h5>RIGHT NOW</h5>
          </div>
          <div className="row">
            {
              data.newsPageCollection.items.map((item, index) => (
                <NewsItem key={index} payload={item} main={false} />
              ))
            }
          </div>

        </div>
        <div className="col-md-7">
          <div className="row">
            {
              data.newsPageCollection.items.map((item, index) => (
                <NewsItem key={index} payload={item} main={true} />
              ))
            }
          </div>

        </div>

        <div className="col-md-3 news-block__trending">
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