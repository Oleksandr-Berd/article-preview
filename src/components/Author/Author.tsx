import * as SC from "../../styles/commonStyled";
import { IButton, IPost } from "../../utils/interfaces";
import { defaultFunc } from "../../utils/services";
import ButtonCon from "../Button/Button";

type Props = Partial<IPost> & Partial<IButton>;

const AuthorComp: React.FC<Props> = (props) => {
  const { imgAuthor, author, date, openShare } = props;

  return (
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
      <ButtonCon handleComp={openShare ?? defaultFunc} />
    </SC.AuthorCon>
  );
};

export default AuthorComp;
