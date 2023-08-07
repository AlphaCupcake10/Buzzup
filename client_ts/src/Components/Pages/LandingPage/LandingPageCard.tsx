export default function LandingPageCard() 
{
    return (
        <div className="relative mt-10 flex w-64 flex-col rounded-xl card bg-clip-border shadow-md">
            <div className="relative -mx-2 -mt-10 h-40 rounded-xl accent-gradient" />
            <div className='mt-4'>
                <h1 className='text-lg font-bold'>Card Title</h1>
                <h1 className='text-sm opacity-70'>Card Subtitle</h1>
                <p className='mt-4 opacity-70 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ullam.</p>
            </div>
        </div>
    );
}