import {FollowingFeed,ForYouFeed} from "./Feed";
import {Link,Route,Routes} from 'react-router-dom';

function Home(props)
{
    return(
        <div className={`${props.className} grow`}>
            <div className="flex justify-evenly p-8 md:text-xl">
                <Link to='/home/following'><h1 className="hover:text-accent transition-color cursor-pointer">FOLLOWING</h1></Link>
                <div>|</div>
                <Link to='/home/foryou'><h1 className="hover:text-accent transition-colors cursor-pointer">FOR YOU</h1></Link>
            </div>
            {props.children}
        </div>
    )
}
export default Home;