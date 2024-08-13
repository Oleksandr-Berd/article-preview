import { IPost } from "../../utils/interfaces";
import nextBtnIcon from "../../assets/icons/next.svg"

import * as SC from "../../styles/commonStyled"

const Post: React.FC<IPost> = (props) => {
  const { title, author, imgAuthor, imgPost, date, text } = props;

  return (
    <div>
      <SC.ImgPostCon>
        <img src={imgPost} alt={title} />
      </SC.ImgPostCon>
      <SC.ContentCon>
        <div>
        <SC.PostTitle>{title}</SC.PostTitle>
        <p>{text}</p>
        </div>
        <div>
            <div>
                <img src={imgAuthor} alt={author} />
            </div>
            <div>
                <h4>{author}</h4>
                <p>{date}</p>
            </div>
            <button>
                <img src={nextBtnIcon} alt="next"/>
            </button>
        </div>
      </SC.ContentCon>
    </div>
  );
};

export default Post;
