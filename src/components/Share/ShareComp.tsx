import * as SC from "../../styles/commonStyled";

import fbIcon from "../../assets/icons/fb.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import pinterestIcon from "../../assets/icons/pinterest.svg";
import ButtonCon from "../Button/Button";
import { defaultFunc } from "../../utils/services";
import { IButton } from "../../utils/interfaces";
import { useScreenSize } from "../../hooks/useScreenSize";
import Triangle from "../Triangle/Triangle";

const ShareComp: React.FC<Partial<IButton>> = ({ closeShare, isShare }) => {
  const { isDesktop } = useScreenSize();

  return (
    <SC.ShareCommonCon>
      <SC.ShareTitle>share</SC.ShareTitle>
      <SC.IconsList>
        <li>
          <a
            href="https://www.facebook.com/sasha.berdichevsky"
            target="_blank"
            rel="noreferrer"
          >
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
      </SC.IconsList>
      {isDesktop && <Triangle/>}
      {!isDesktop && <ButtonCon handleComp={closeShare ?? defaultFunc} isShare={isShare}/>}
    </SC.ShareCommonCon>
  );
};

export default ShareComp;
