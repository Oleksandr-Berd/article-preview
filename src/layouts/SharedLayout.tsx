import * as SC from "../styles/commonStyled"

import PostList from "../components/Post/PostList";

const SharedLayout: React.FC = () => {
  return (
    <SC.SharedLayoutStyled>
      <PostList />
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
