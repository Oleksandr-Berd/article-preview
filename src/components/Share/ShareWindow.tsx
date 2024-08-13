import fbIcon from "../../assets/icons/fb.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import pinterestIcon from "../../assets/icons/pinterest.svg";

const ShareWindow: React.FC = () => {
  return (
    <div>
      <div>
        <h3>share</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/sasha.berdichevsky">
              <img src={fbIcon} alt="fb link" />
            </a>
          </li>
          <li>
            <a href="https://x.com/?lang=uk">
              <img src={twitterIcon} alt="twitte link" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <img src={pinterestIcon} alt="pinterest link" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShareWindow;
