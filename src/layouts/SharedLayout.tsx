import Post from "../components/Post/Post";
import data from "../data/data.json"

const SharedLayout:React.FC = () => {


    return ( 
       <div>
       {data.map(({id, title, author, imgAuthor, imgPost, date, text}) => {
        const imgAuthorPath = require(`../assets/img/${imgAuthor}`)
        const imgPostPath = require(`../assets/img/${imgPost}`)

        return (
            <Post title={title} author={author} imgAuthor={imgAuthorPath} imgPost={imgPostPath} text={text} date={date} key={id}/>
        )
       })}
        
       </div>
     );
}
 
export default SharedLayout;


