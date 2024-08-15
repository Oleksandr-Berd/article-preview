import * as SC from "../../styles/commonStyled"

import fbIcon from "../../assets/icons/fb.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import pinterestIcon from "../../assets/icons/pinterest.svg";
import ButtonCon from "../Button/Button";
import { defaultFunc } from "../../utils/services";
import { IButton } from "../../utils/interfaces";

const ShareComp: React.FC<Partial <IButton>> = ({closeShare}) => {


  return (
    <SC.ShareCommonCon>
      
        <SC.ShareTitle>share</SC.ShareTitle>
        <ul>
          <li>
            <a href="https://www.facebook.com/sasha.berdichevsky" target="_blank" rel="noreferrer">
              <img src={fbIcon} alt="fb link" />
            </a>
          </li>
          <li>
            <a href="https://x.com/?lang=uk" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="twitte link" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
              <img src={pinterestIcon} alt="pinterest link" />
            </a>
          </li>
        </ul>
      <ButtonCon handleComp={closeShare ?? defaultFunc}/>
    </SC.ShareCommonCon>
  );
};

export default ShareComp;
