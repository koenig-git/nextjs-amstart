import { NotionAPI } from 'notion-client';
const notion = new NotionAPI();
// const SLUG_ID = "3x=Q";
// const DATE_ID = "S)s,";
const SLUG_ID = "I`Q{";
const LENGTH_ID = "zE]A";
const READER_TAG = "CXv[";

// const NOTION_BLOG_ID = 'a77b23577e1d47a9b06cba6e0202369d';
// const NOTION_BLOG_ID = '1099525da7e5405c961706de56622ccd';
const NOTION_BLOG_ID = '0fce51353967410995e7f7f4f27d4d77';


export const getAllPosts = async () => {
	const recordMap = await notion.getPage(NOTION_BLOG_ID);

    let posts = [];
    for (var [id, block] of Object.entries(recordMap.block)) {
        let blockProperties = block.value.properties;
        if (block.value.type == 'page' && SLUG_ID in blockProperties) {
            // console.log(block.value.properties)
            posts.push({
            'id': id,
            'title': blockProperties.title[0][0],
            'slug': blockProperties[SLUG_ID][0][0],
            // 'date': ((DATE_ID in blockProperties) ? blockProperties[DATE_ID][0][1][0][1].start_date : ''),
            'cover': ((block.value.format.page_cover) ? block.value.format.page_cover : ''),
            'length': blockProperties[LENGTH_ID][0][0],
            'textArt': blockProperties[READER_TAG][0][0].split(",")
            })
        }
    }
    return posts
}
