import { IPost } from "../../utils/interfaces";
import nextBtnIcon from "../../assets/icons/next.svg"

import * as SC from "../../styles/commonStyled"
import { useToggle } from "../../hooks/useToggle";

const Post: React.FC<IPost> = (props) => {
  const { title, author, imgAuthor, imgPost, date, text } = props;
  const {openShare, closeShare, isShare} = useToggle()

console.log(closeShare, isShare);


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
        <SC.AuthorCon>
            <div>
            <SC.AuthorImg>
                <img src={imgAuthor} alt={author} />
            </SC.AuthorImg>
            <div>
                <SC.AuthorTitle>{author}</SC.AuthorTitle>
                <p>{date}</p>
            </div>
            </div>
            <SC.Button type="button" onClick={openShare}>
                <img src={nextBtnIcon} alt="next"/>
            </SC.Button>
        </SC.AuthorCon>
      </SC.ContentCon>
    </SC.PostCon>
  );
};

export default Post;
