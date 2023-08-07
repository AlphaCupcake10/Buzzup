import AudioVisualizer from './AudioVisualizer';
import Shimmer from '../../Common/Shimmer';
import logoNavbar from '../../../assets/Logo/LogoNavbar.png';
import phone from '../../../assets/Phone.png';
import LandingPageCard from './LandingPageCard';
import { Link } from 'react-router-dom';
import Button from '../../Common/Button';
import { useAuth } from '../../../Contexts/AuthContext';

export default function LandingPage() {

    const auth = useAuth();

    return (
        <div className="h-screen w-screen shadow flex flex-col">
            <div className="hidden md:flex justify-between items-center bg-darker border-b-2 border-white/10">
                <div className={`p-8 text-sm`}><img className='h-8' src={logoNavbar} alt="" /></div>
                <div className="flex gap-4">
                    <div className={`text-sm opacity-70 hidden md:block`}>HOME</div>
                    <div className={`text-sm opacity-70 hidden md:block`}>ABOUT US</div>
                </div>
                {(!auth?.isAuthorized)?(
                    <div className="flex items-center gap-4 p-8">
                    <Link to='/signup'><div className='text-sm hover:opacity-100 transition-colors opacity-70 hidden md:block'>SIGN UP</div></Link>
                    <Link to='/signin'><Button outline>SIGN IN</Button></Link>
                </div>
                ):(
                    <div className="flex items-center gap-4 p-8">
                    <Link to='/'><Button outline>GO TO APP</Button></Link>
                </div>
                )}
            </div>
            <div className="overflow-y-auto grow">
                <section className={`flex justify-center gap-16 py-20 px-4 md:px-40 bg-darker`}>
                    <img src={phone} className='w-80 hidden lg:flex' alt="" />
                    <div className="grow lg:grow-0 lg:w-1/2 flex flex-col justify-center">
                        <h1 className='font-black text-4xl md:text-5xl leading-tight'>Hear The <span className='accent-gradient background-clip-text'>Buzz.</span></h1>
                        <h1 className='font-black text-4xl md:text-5xl leading-tight'>Connect on <span className='accent-gradient background-clip-text'>Buzzup.</span></h1>
                        <p className='font-light opacity-70 text-sm md:text-base mt-4'>A social media platform based on exchanging audio or something asdasdasd</p>
                    </div>
                </section>
                <section className={`flex py-40 px-4 md:px-40 bg-darker`}>
                    <div className="grow lg:grow-0 lg:w-1/2 flex flex-col justify-center">
                        <h1 className='font-black text-4xl md:text-5xl leading-tight'>Our Platform is <br/>Based on <span className='accent-gradient background-clip-text'>Audio.</span></h1>
                        <p className='font-light opacity-70 text-sm md:text-base mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odio nesciunt. Molestias corporis odit rerum ex dolore vitae? </p>
                    </div>
                    <div className="grow p-8 hidden lg:flex justify-center items-center">
                        <AudioVisualizer hueRotateFactor={0} randomFactor={150} timePeriodFactor={100} count={20}/>
                    </div>
                </section>
                <section className={`flex flex-col py-20 items-center px-4 md:px-40 bg-darker`}>
                    <h1 className='font-black text-4xl md:text-5xl leading-tight'>Section <span className='accent-gradient background-clip-text'>Title</span></h1>
                    <div className="mt-16 flex justify-center items-center w-full flex-wrap gap-x-4">
                        <LandingPageCard/>
                        <LandingPageCard/>
                        <LandingPageCard/>
                        <LandingPageCard/>
                    </div>
                </section>
                <section className={`flex py-40 px-4 md:px-40 accent-gradient`}>
                    <div className="grow p-8 hidden lg:flex justify-center items-center">
                        <Shimmer shimmerType='card' className='w-full'></Shimmer>
                    </div>
                    <div className="grow lg:grow-0 lg:w-1/2 flex flex-col justify-center">
                        <h1 className='font-black text-4xl md:text-5xl leading-tight drop-shadow-md'>Connect with others.</h1>
                        <p className='font-light opacity-70 text-sm md:text-base mt-4 drop-shadow-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odio nesciunt. Molestias corporis odit rerum ex dolore vitae? </p>
                    </div>
                </section>
                <section className={`flex py-48 px-4 md:px-40 bg-darker`}>
                    <div className="grow lg:grow-0 lg:w-1/2 flex flex-col justify-center">
                        <h1 className='font-black text-4xl md:text-5xl leading-tight'>Let's get <span className='accent-gradient background-clip-text'>Started</span></h1>
                        <h1 className='font-black text-4xl md:text-5xl leading-tight'>Some Text <span className='accent-gradient background-clip-text'>SPICE.</span></h1>
                        <p className='font-light opacity-70 text-sm md:text-base mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis repellat assumenda molestias, rerum quod consequatur non.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}