import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import Head from 'next/head';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';
import { IFrame } from '@/components/IFrame/IFrame';


const client = createClient({
  space: 'sxw14dxmazhg',
  accessToken: 'f2ab054e0c0112d9fe1efe829a0daccbca465574ab566590f4669489629ac044'
});

interface getPageContent {
  id: string;
  set?: any;
  callBack?: any;
  tag?: any;
  slug?: any;
}


interface PageHeaderProps {
  OGimageURL: string;
  OGtitle: string;
  OGpageDescription: string;
  siteURL: string;
}

class $contentfulHelper {

  PageHead(data: PageHeaderProps) {

    return <Head>
      <title>{data.OGtitle}</title>
      {/* HTML Meta Tags  */}
      <meta name="description" content={data.OGpageDescription} key="desc" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />

      {/* Open Graph */}
      <meta property="og:url" content={data.siteURL} key="ogurl" />
      <meta property="og:image" content={data.OGimageURL} key="ogimage" />
      <meta property="og:site_name" content="Leadership Dynamics" key="ogsitename" />
      <meta property="og:title" content={data.OGtitle} key="ogtitle" />
      <meta property="og:description" content={data.OGpageDescription} key="ogdesc" />

    </Head>
  }

  getPageContent(params: getPageContent) {
    const payLoad = client.getEntries({
      'sys.id': params.id,
      include: 10,
    })
      .then((entries: any) => {
        params.set !== void (0) ? params.set(entries.items[0]) : null;
        params.callBack !== void (0) ? params.callBack() : null;
        return (entries.items[0]);
      });
    return payLoad;
  }

  getContentViaSlug(params: getPageContent) {

    const payLoad = client.getEntries({
      'fields.slug': params.slug,
      'content_type': params.id,
      include: 10,
    })
      .then((entries: any) => {

        return (entries.items[0])
      })
    return payLoad;
  }


  getPageContentArray(params: getPageContent) {
    const payLoad = client.getEntries({
      'content_type': params.id,
      include: 10,
    })
      .then((entries: any) => {
        params.set !== void (0) ? params.set(entries) : null;
        params.callBack !== void (0) ? params.callBack() : null;
        return (entries.items);
      });

    return payLoad;
  }

  getPageContentArrayBasedOnTag(params: getPageContent) {
    const payLoad = client.getEntries({
      'content_type': params.id,
      'fields.tags': params.tag,
      include: 10,
    })
      .then((entries: any) => {
        params.set !== void (0) ? params.set(entries.items) : null;
        params.callBack !== void (0) ? params.callBack() : null;
        return (entries.items);
      });
    return payLoad;
  }


  richTextRender(obj: any) {


    const options = {
      renderNode: {

        [BLOCKS.PARAGRAPH]: (node, children) => {
          return (
            <p>{
              node.content.map((item, i) => (
                item.value && item.value.includes('iframe') ? <IFrame key={i} url={item.value}></IFrame> : <>{children[i]}</>
              ))}
            </p>
          )
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node) => {
          const { table } = node.data.target.fields;
          return (
            <div style={{ overflowX: "auto" }}>
              <table className="customtable">
                <thead>
                  <tr>
                    {table.tableData[0].map((data, i) => <th key={i}>{data}</th>)}
                  </tr>
                </thead>

                {
                  table.tableData.slice(1).map((data, i) => (
                    <tr key={i}>
                      {
                        data.map((dd, i) => (
                          <td key={i}>{dd}</td>
                        ))
                      }
                    </tr>
                  ))
                }
              </table>
            </div>

          )
        },
        'embedded-asset-block': (node: any) =>
          <Image
            className='mb-3'
            alt=""
            src={"https:" + node.data.target.fields.file.url}
            layout={"responsive"}
            objectFit="cover"
            objectPosition="center"
            quality={75}
            width={300}
            height={130}
            placeholder="blur"
            blurDataURL={"https:" + node.data.target.fields.file.url + "?q=5"}
          />
      },
      renderText: (text) => {
        return text.split('\n').reduce((children, textSegment, index) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
      },

    }

    return documentToReactComponents(obj, options);
  }

  markdown(children) {
    return (
      <Markdown>{children}</Markdown>
    )
  }

}
const $c = new $contentfulHelper();
export { $c }
