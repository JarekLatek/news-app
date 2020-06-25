import React from "react";

const languages = ['en', 'pl', 'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 
'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng'];


class LanguageDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }


  onValueChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onLanguageChange(value);
  };

  render() {
    const { value } = this.state;

    return (
      <div className="LanguageDropdown">
        <label>Language: </label>
        <select value={value} onChange={this.onValueChange}>
          {languages.map((lang) =>
              <option key={lang} value={lang}>{lang}</option>
          )}
        </select>
      </div>
    );
  }
}

export default LanguageDropdown;