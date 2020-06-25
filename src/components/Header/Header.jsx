import React from "react";
import { NavLink } from "react-router-dom";
import LanguageDropdown from "./LanguageDropdown";
import { Menu, Segment, Sticky } from "semantic-ui-react";

class Header extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Sticky context={this.contextRef}>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item
              as={NavLink}
              to="/"
              name="home"
              exact
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              to="/film"
              name="Film News"
              active={activeItem === "Film News"}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item text='Language'>
                <LanguageDropdown onLanguageChange={this.props.onLanguageChange} />
              </Menu.Item>
          </Menu.Menu>
          </Menu>
        </Segment>
      </Sticky>
    );
  }
}

export default Header;
