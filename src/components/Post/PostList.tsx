import data from "../../data/data.json"

import { postDataHandle } from "../../utils/services";

const PostList:React.FC = () => {
    return ( 
        <ul>
            {postDataHandle(data)}
        </ul>
     );
}
 
export default PostList;