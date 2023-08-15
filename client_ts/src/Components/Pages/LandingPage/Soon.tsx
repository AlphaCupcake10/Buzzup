import AudioVisualizer from './AudioVisualizer';
import logoNavbar from '../../../assets/Logo/LogoNavbar.png';
import { Link } from 'react-router-dom';
import Button from '../../Common/Button';
import Cursor from './Cursor';

export default function Soon() {
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
                    <Link to='/'><Button outline>HOME</Button></Link>
                </div>
            </header>
            <main className="overflow-y-auto text-light/85 grow">
            <section className={`flex flex-wrap justify-center py-20 px-12 md:px-40`}>
                    <div className="grow lg:grow-0 lg:w-1/2 flex flex-col justify-center">
                        <h1 className='font-black text-3xl md:text-5xl leading-tight'>Coming <span className='accent-gradient background-clip-text'>Soon.</span></h1>
                        <p className='font-light opacity-70 text-sm md:text-base mt-4'>Our website is currently under construction.</p>
                    </div>
                    <div className="grow p-0 md:p-8 flex justify-center items-center">
                        <AudioVisualizer hueRotateFactor={0} randomFactor={150} timePeriodFactor={100} count={20}/>
                    </div>
                </section>
            </main>
        </>
    )
}