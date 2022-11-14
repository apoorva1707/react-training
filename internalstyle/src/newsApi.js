import React,{useEffect, useState} from 'react';
import loadingGif from './loading.gif';
import NewsCard from "./NewsCard";

export default function App(){

  let apiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=fa639fae70524db5bf9673c950cfbc1f";
  
  let [loading, setLoading] = useState(true);
  let [articles, setArticles] = useState([]);
  let [error, setError] = useState(null);

  async function getNewData() {
    //fetch
    let response = await fetch(apiUrl);
    console.log("Response from API:", response);
    //if everything is ok ? then
    if(response.ok){
      let result = await response.json();
      console.log(result);
      setArticles(result);
      setLoading(false);
    }else{
      let result = await response.json();
      setError(result);
      console.log(result);
      setLoading(false);
    }
  }
    //let result = await response.json();
    //console.log(result);
    //setArticles(result);
    //setLoading(false);
  

  //will only run once when the component is loaded
  useEffect(() => {
    getNewData();
  }, []);

  return (
    <>
      <header className="w-full text-red-600 text-xl  text-center bg-green-100 h-16 shadow-md flex justify-center items-center">
        News Website
      </header>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center mt-12 text-2xl">
            Fetched {articles.totalResults} News articles for you
          </h1>
          <div className="flex flex-wrap">
          {error ?(
            <Error error={error} />
          ):(
            <ShowArticles articles={articles} />
          )}
          </div>
        </div>
      )}
    </>
  );
}

function Loader() {
  return (
    <>
      <img src={loadingGif} alt="Loading" className="w-24 mx-auto mt-12" />
    </>
  );
}
function Error(props){
  return(
    <div className="text-center bg-red-300 p-3">{props.error.message}</div>
  );
}
function ShowArticles(props){
  return(
    <>
    {props.articles.articles.map((article)=>{
      return <NewsCard key={article.publishedAt} article={article}  />;

    })}
    </>
  )
}