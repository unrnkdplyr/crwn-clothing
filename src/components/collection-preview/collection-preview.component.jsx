import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ history, items, match, routeName, title }) => (
  <div className="collection-preview">
    <h1 className="title">
      <span onClick={() => history.push(`${match.url}/${routeName}`)}>
        {title.toUpperCase()}
      </span>
    </h1>
    <div className="preview">
      {items
        .filter((_, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
