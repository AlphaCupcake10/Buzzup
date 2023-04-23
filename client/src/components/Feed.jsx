import PostCard from "./PostCard";

function Feed()
{
    return(
        <div className="overflow-y-scroll h-full">
            <div className="flex text-xl p-8 divide-x-4 divide-accent ">
                <h1 className="flex justify-center grow hover:text-accent cursor-pointer transition-all">FOR YOU</h1>
                <h1 className="flex justify-center grow hover:text-accent cursor-pointer transition-all">FOLLOWING</h1>
            </div>
            <div>
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
            </div>
        </div>
    )
}
export default Feed;