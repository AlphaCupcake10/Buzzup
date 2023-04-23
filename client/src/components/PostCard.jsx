import Card from "./Card";
import ProfileDisplay from "./ProfileDisplay";
function PostCard(props)
{
    return(
        <Card>
            <ProfileDisplay></ProfileDisplay>
            <p className="p-6 text-light/75">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, quisquam delectus rerum error animi eos illo quas quis repellendus pariatur? Accusamus, nulla temporibus. Dolore similique unde consequuntur asperiores eaque vel! Eum, perferendis?</p>
            <img className="p-6" src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="" />
        </Card>
    )
}
export default PostCard;