import "./NewsList.css";
import React from "react";
import NewsCard from "./NewsCard";
import PagePagination from "./PagePagination";

const NewsList = (props) => (
  <div className="NewsList">
    <div className="PagePagination">
      <PagePagination
        onPageChange={props.onPageChange}
        pagesNumber={props.pagesNumber}
        currentPage={props.currentPage}
      />
    </div>
    {props.articles.map((item) => (
      <NewsCard
        urlToImage={item.urlToImage}
        title={item.title}
        description={item.description}
        url={item.url}
        name={item.source.name}
        publishedAt={item.publishedAt}
      />
    ))}
    <div className="PagePagination">
      <PagePagination
        onPageChange={props.onPageChange}
        pagesNumber={props.pagesNumber}
        currentPage={props.currentPage}
      />
    </div>
  </div>
);

export default NewsList;
