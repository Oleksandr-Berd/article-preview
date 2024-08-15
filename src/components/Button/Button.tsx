import * as SC from "../../styles/commonStyled"

import nextBtnIcon from "../../assets/icons/next.svg"
import nextShare from '../../assets/icons/next_share.svg'
import { IButton } from "../../utils/interfaces"
   
type buttonCon = {
    handleComp:()=> void,
} & Pick<IButton, "isShare">

const ButtonCon: React.FC<buttonCon > = ({handleComp, isShare}) => {


    return (  <SC.Button type="button" onClick={handleComp}>
        <img src={isShare ? nextShare : nextBtnIcon} alt="next"/>
    </SC.Button> );
}
 
export default ButtonCon;