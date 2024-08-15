import * as SC from "../../styles/commonStyled"

import nextBtnIcon from "../../assets/icons/next.svg"
   
type buttonCon = {
    handleComp:()=> void
}

const ButtonCon: React.FC<buttonCon> = ({handleComp}) => {
    return (  <SC.Button type="button" onClick={handleComp}>
        <img src={nextBtnIcon} alt="next"/>
    </SC.Button> );
}
 
export default ButtonCon;