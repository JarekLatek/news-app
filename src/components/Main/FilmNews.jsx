import "./FilmNews.css";
import React, { useState, useEffect, useCallback, useContext } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import LanguageContext from "../../languageContext";

import "react-datepicker/dist/react-datepicker.css";
import NewsList from "./HomePage/NewsList/NewsList";

const FilmNews = () => {
  const [startDate, setStartDate] = useState(
    moment().subtract(1, "months").toDate()
  );
  const [endDate, setEndDate] = useState(moment().toDate());
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(1);
  const [pagesNumber, setPagesNumber] = useState(1);
  const contextlang = useContext(LanguageContext);
  const [lang, setLang] = useState(contextlang);

  const fetchArticles = useCallback(() => {
    fetch(
      `http://localhost:4000/film-news?from=${startDate.toISOString()}&to=${endDate.toISOString()}&page=${page}` +
        (lang === "pl" ? "&language=pl" : `&language=${lang}`)
    )
      .then((response) => response.json())
      .then((res) => {
        setResults(res);
        setPagesNumber(Math.ceil(res.totalResults / 15));
      });
  }, [startDate, endDate, page, lang]);

  useEffect(() => {
    setLang(contextlang);
    setPage(1);
  }, [contextlang]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  if (!results) return null;

  return (
    <div className="FilmNews">
      <div className="Date">
        <div>
          <label>Start date: </label>
          <DatePicker
            selected={startDate}
            onChange={setStartDate}
            dateFormat={"dd-MM-yyyy"}
            maxDate={endDate}
          />
        </div>
        <div>
          <label>End date: </label>
          <DatePicker
            selected={endDate}
            onChange={setEndDate}
            dateFormat={"dd-MM-yyyy"}
            maxDate={new Date()}
          />
        </div>
      </div>
      {results.totalResults !== 0 ? (
        <NewsList
          articles={results.articles.filter((item, index, self) => {
            return index === self.findIndex(t => t.title === item.title);
          })}
          pagesNumber={pagesNumber}
          onPageChange={setPage}
          currentPage={page}
        />
      ) : (
        <h1>No results</h1>
      )}
    </div>
  );
};

export default FilmNews;
