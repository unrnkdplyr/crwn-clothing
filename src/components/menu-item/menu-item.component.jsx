import "./menu-item.styles.scss";

const MenuItem = ({ imageUrl, size, title }) => {
  let menuItemClass = "menu-item";
  if (size) menuItemClass += ` ${size}`;

  return (
    <div className={menuItemClass}>
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

export default MenuItem;
