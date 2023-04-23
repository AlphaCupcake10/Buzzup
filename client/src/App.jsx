import PanelButton from "./components/PanelButton";
import Card from "./components/Card";
import ProfileDisplay from "./components/ProfileDisplay";
import Feed from "./components/Feed";

function App()
{
  return(
    <div className="text-light bg-darker flex px-20 w-screen h-screen overflow-hidden">
      <div className="w-80 flex flex-col shrink-0">
        <Card className='grow'>
          <img className="p-6 mb-4" src="src/assets/LOGO.png" alt="" />
          <div className="flex flex-col grow-[.25]">
            <PanelButton icon='home' label='HOME'/>
            <PanelButton icon='search' label='EXPLORE'/>
            <PanelButton icon='account_circle' label='PROFILE'/>
          </div>
        </Card>
        <Card>
          <h1 className="text-light/25 mb-2">Buzzing As</h1>
          <ProfileDisplay></ProfileDisplay>
        </Card>
      </div>
      <div className="grow">
        <Feed></Feed>
      </div>
      <div className="w-80 shrink-0">
        <Card>
          <div>
              <input type="text" name="" id="" className="w-full p-2 bg-darker outline-none my-6" placeholder="Search Buzzup"/>
          </div>
        </Card>
        <Card className>

        </Card>
      </div>
    </div>
  );
}

export default App
