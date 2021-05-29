import { withRouter } from "react-router-dom";

import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from "./menu-item.styles";

const MenuItem = ({ history, imageUrl, linkUrl, match, size, title }) => (
  <MenuItemContainer
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    size={size}
  >
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
