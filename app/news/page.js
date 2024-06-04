import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

const News = () => {
    return (
        <>
            <h1>News page</h1>
            <NewsList news={DUMMY_NEWS} />
        </>
    );
}
 
export default News;