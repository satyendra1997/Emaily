import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StripeBilling from "./StripeBilling";
class Header extends React.Component {
  state = {
    showMenu: false,
  };
  toggle = () => {
    console.log(this.state.showMenu);
    this.setState({ showMenu: !this.state.showMenu });
    console.log(this.state.showMenu);
  };
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a className="loginbtn" href="/auth/google">
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <StripeBilling />
          </li>,
          <li key="3">Credits:{this.props.auth.credits}</li>,
          <li key="4">
            <a href="/surveys">Dashboard</a>
          </li>,
          <li key="2">
            <a href="/api/logout">Log Out</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="navContainer">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <div id="menuToggle" onClick={this.toggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={`rightSideMenu ${
              this.state.showMenu ? "toggleClass" : ""
            }`}
          >
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
