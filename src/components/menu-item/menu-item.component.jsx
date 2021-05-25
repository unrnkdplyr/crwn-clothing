import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ history, imageUrl, linkUrl, match, size, title }) => {
  let menuItemClass = "menu-item";
  if (size) menuItemClass += ` ${size}`;

  return (
    <div
      className={menuItemClass}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
