import { useState } from "react";
import { linkIcon, copy, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../redux/articleApi";


const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
   
  const [allArticles, setAllArticles] = useState([]);

  const [ getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if( data?.summary) {
        const newArticle = { ...article, summary: data.summary };
         const updatedAllArticle = [newArticle, ...allArticles];

        setArticle(newArticle);
        setAllArticles(updatedAllArticle);
        console.log(newArticle);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setArticle({
        ...article, 
        url: e.target.value
    })
  }

  return (
    <>
      <section className="w-full mt-16 max-w-xl">
        <div className="flex flex-col w-full gap-2">
          <form
            onSubmit={handleSubmit}
            className="relative flex justify-center items-center"
          >
            <img
              src={linkIcon}
              alt="link_icon"
              className="absolute left-0 my-2 ml-3 w-5"
            />
            <input
              type="url"
              placeholder="paste url here"
              value={article.url}
              onChange={handleChange}
              required
              className="url_input peer"
            />
            <button
              type="submit"
              className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
            >
              {" "}
              <p>↵</p>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Demo;
