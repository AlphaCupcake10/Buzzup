import AudioVisualizer from './AudioVisualizer';
import logoNavbar from '../../../assets/Logo/LogoNavbar.png';
import phone from '../../../assets/Phone.png';
import buzzImage from '../../../assets/Buzz.png';
import { Link } from 'react-router-dom';
import Button from '../../Common/Button';
import Cursor from './Cursor';
import LandingPageCard from './LandingPageCard';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useAnimation from '../../../Hooks/useAnimation';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage()
{
    useAnimation(".animate","shown");

    return (
        <>
            <div className='fixed w-screen backdrop-blur-[200px] -z-40 h-screen'/>
            <Cursor/>
            <header className="sticky top-0 w-full z-40 flex md:flex backdrop-blur-lg bg-dark/50 justify-between items-center border-b-2 border-white/10">
                <div className={`p-8 text-sm hidden md:block`}><img className='h-8' src={logoNavbar} alt="" /></div>
                <div className="flex gap-4">
                    {/* <div className={`text-sm opacity-70 hidden md:block`}>HOME</div>
                    <div className={`text-sm opacity-70 hidden md:block`}>ABOUT US</div> */}
                </div>
                    <div className="flex items-center gap-4 p-4 md:p-8">
                    <Link to='/soon'><Button outline>GO TO APP</Button></Link>
                </div>
            </header>
            <main className="overflow-x-hidden text-light/95 grow">
                <section className={`flex flex-wrap justify-center gap-16 py-20 px-12 md:px-40`}>
                    <img src={phone} className='z-10 w-56 md:w-80' alt="" />
                    <div className="grow lg:grow-0 lg:w-1/2 flex flex-col justify-center">
                        <h1 className='animate left font-black text-6xl md:text-8xl leading-tight'>BUZZUP<span className='accent-gradient background-clip-text'>.</span></h1>
                        <h1 className='animate left delay-1 font-extrabold text-2xl md:text-5xl leading-tight'>It's an <span className='accent-gradient background-clip-text'>Audio Thing.</span></h1>
                        <p className='animate left delay-2 font-light opacity-70 text-sm md:text-base mt-2'>Combine images and audio for a vibrant, new social experience!</p>
                    </div>
                </section>
                <section className={`flex flex-wrap justify-center gap-16 py-20 px-12 md:px-40`}>
                    <div className="grow lg:grow-0 lg:w-1/2 flex flex-col justify-center">
                        <h1 className='animate left font-black lg:pr-32 text-3xl md:text-5xl leading-tight'>Our Platform is Based on <span className='accent-gradient background-clip-text'>Audio.</span></h1>
                        <p className='animate left delay-1 font-light opacity-70 text-sm md:text-base mt-4'>Images worth more than a thousand words, sounds that evoke a thousand feelings – welcome to BuzzUp, where sharing transcends the ordinary.</p>
                    </div>
                    <div className="animate right delay-3 grow p-0 md:p-8 flex justify-center items-center">
                        <AudioVisualizer hueRotateFactor={0} randomFactor={150} timePeriodFactor={100} count={20}/>
                    </div>
                </section>
                <section className={`flex flex-wrap justify-center gap-16 py-20 px-12 md:px-40`}>
                    <h1 className='animate left font-black text-4xl md:text-5xl leading-tight'>Our <span className='accent-gradient background-clip-text'>Features</span></h1>
                    <div className="mt-0 flex justify-center items-center w-full flex-wrap gap-x-4">
                        <LandingPageCard className='animate left delay-1'/>
                        <LandingPageCard className='animate left delay-2'/>
                        <LandingPageCard className='animate left delay-3'/>
                        <LandingPageCard className='animate left delay-4'/>
                    </div>
                </section>
                <section className={`flex flex-wrap md:flex-nowrap gap-8 py-32 items-center justify-center px-12 md:px-40 accent-gradient`}>
                    <div className="grow lg:grow-0 lg:w-1/2 flex flex-col justify-center">
                        <h1 className='animate left font-black text-4xl md:text-5xl leading-tight drop-shadow-md'>Link Up and Tune In!</h1>
                        <p className='animate left delay-1 font-normal opacity-70 text-sm md:text-base mt-4 drop-shadow-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odio nesciunt. Molestias corporis odit rerum ex dolore vitae? </p>
                    </div>
                    <img className='animate right delay-3 w-72 sm:w-96 md:w-3/6 max-w-[42rem] drop-shadow-lg' src={buzzImage} alt="" />
                </section>
                <section className={`flex flex-wrap justify-center gap-16 py-96 h-screen px-12 md:px-40`}>
                    <div className="grow lg:grow-0 lg:w-1/2 flex flex-col justify-center">
                        {/* <h1 className='font-black text-4xl md:text-5xl leading-tight'>Let's get <span className='accent-gradient background-clip-text'>Started</span></h1> */}
                        <h1 className='animate left font-black text-3xl md:text-5xl leading-tight'>Share <span className='accent-gradient background-clip-text'>Your Voice.</span></h1>
                        <h1 className='animate left delay-1 font-black text-3xl md:text-5xl leading-tight'>And <span className='accent-gradient background-clip-text'>Your Memories.</span></h1>
                        <p className='animate left delay-2 opacity-70 text-sm md:text-base mt-4'>Unleash your creativity visually, amplify it audibly – on BuzzUp, where every post becomes a multimedia masterpiece.</p>
                    </div>
                    <div className='grow flex flex-col justify-center gap-4'>
                        <Link to="/soon"><Button big className='animate left delay-3 w-full'>SIGN UP</Button></Link>
                        <Link to="/soon"><Button big outline className='animate left delay-4 w-full'>SIGN IN</Button></Link>
                    </div>
                </section>
                <footer className='flex justify-center p-4 border-t-2 border-white/10 text-light/50 '>BUZZUP © 2023</footer>
            </main>
        </>
    )
}