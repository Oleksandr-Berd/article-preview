
import * as SC from "../../styles/commonStyled"

import { useToggle } from "../../hooks/useToggle";
import { IPost } from "../../utils/interfaces";
import AuthorComp from "../Author/Author";
import ShareComp from "../Share/ShareComp";
import { useScreenSize } from "../../hooks/useScreenSize";



const Post: React.FC<IPost> = (props) => {
  const { title, author, imgAuthor, imgPost, date, text } = props;
  const {openShare, closeShare, isShare, toggleShare} = useToggle()

const {isDesktop} = useScreenSize()

  return (
    <SC.PostCon>
      <SC.ImgPostCon>
        <img src={imgPost} alt={title} />
      </SC.ImgPostCon>
      <SC.ContentCon>
        <div>
        <SC.PostTitle>{title}</SC.PostTitle>
        <p>{text}</p>
        </div>
        {isShare ? <ShareComp closeShare={closeShare} isShare={isShare}/> : <AuthorComp openShare={openShare} imgAuthor={imgAuthor} author={author} date={date}/>}
        {isDesktop && isShare && <AuthorComp openShare={toggleShare} imgAuthor={imgAuthor} author={author} date={date} isShare={isShare}/>}
      </SC.ContentCon>
    </SC.PostCon>
  );
};

export default Post;
