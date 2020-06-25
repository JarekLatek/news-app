import "./HomePage.css";
import React from "react";
import NewsList from './NewsList/NewsList';
import NewsFiltersBar from "./NewsFiltersBar/NewsFiltersBar";
import LanguageContext from "../../../languageContext";

class HomePage extends React.Component {

  static contextType = LanguageContext;

  constructor(props) {
    super(props);

    this.state = {
      results: null,
      category: "sport",
      searchQuery: null,
      lang: "pl",
      pagesNumber: 1,
      page: 1
    };
  }

  componentDidMount() { 
    this.getArticles();
    this.setState({ lang: this.context }); 
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category || prevState.searchQuery !== this.state.searchQuery || prevState.lang !== this.state.lang || prevState.page !== this.state.page) this.getArticles();
    if (prevState.lang !== this.context) this.setState({ lang: this.context });
  }

  getQuery () {
    const { category, searchQuery } = this.state;

    let query;
    if (category) {
      query = searchQuery
      ? `&category=${category}&q=${searchQuery}`
      : `&category=${category}`;
    } else {
      query = searchQuery ? `&q=${searchQuery}` : "";
    }
    return query;
  }

  getArticles() {

    const { lang, page } = this.state;
    
    fetch(`http://localhost:4000/articles?country=${lang}${this.getQuery()}&page=${page}`)
      .then((response) => response.json())
      .then(results => {
        this.setState({ results });
        this.setState({
          pagesNumber: Math.ceil(results.totalResults / 15)
        });
      });
  }

  setCategory = (category) => this.setState({ category, page: 1 });
  setSearchQuery = searchQuery => {
    this.setState({ searchQuery });
    if (searchQuery) this.setState({ page: 1 });
  };

  setPage = page => this.setState({ page });

  render() {
    const { results, pagesNumber, category, page } = this.state;

    if (!results) return null;
    return (
      <div id="HomePage">
        <NewsFiltersBar 
          onCategoryChange={this.setCategory}
          onSearchQueryChange={this.setSearchQuery}
          category={category} />
        <NewsList 
          articles={results.articles}
          onPageChange={this.setPage}
          pagesNumber={pagesNumber}
          currentPage={page} />
      </div>
    );
  }
}

export default HomePage;
