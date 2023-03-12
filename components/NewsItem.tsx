import Image from "next/image";
import Link from "next/link";

const NewsItem = ({ payload, main, trending = false }) => {
  return (
    <div className={`news-item ${!main ? "col-12" : "col-md-6"}`}>

      {
        !main && trending === false &&
        <div className={`news-container`}>
          <div className="news-container__img-holder">
            <img src={payload?.image?.url} alt={payload.title} className="news-image" />
          </div>

          <div className="news-container__content-holder">
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