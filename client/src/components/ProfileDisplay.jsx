function ProfileDisplay(props)
{
    return(
        <div className={`${props.className} flex justify-between items-center`}>
            <div className="flex items-center justify-center">
                <img className="rounded-full w-12 h-12" src="https://pbs.twimg.com/profile_images/1342476851034218496/biF8COSB_bigger.jpg" alt="" />
            </div>
            <div className="grow ml-4 flex flex-col justify-center">
                <h1 className="leading-3">Lakshman Sundar</h1>
                <h2 className="text-xs text-light/40">@alphacupcake10</h2>
            </div>
        </div>
    )
}
export default ProfileDisplay;