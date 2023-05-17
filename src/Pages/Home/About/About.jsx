import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="card lg:card-side bg-base-100 h-[550px] my-32">
            <div className='w-[50%] relative '>

                <img src={person} alt="Album" className='h-[85%] w-[90%]' />
                <img src={parts} alt="Album" className="h-[45%] absolute right-0 bottom-0 border-8 border-white" />
            </div>

            <div className="w-[50%] px-14 space-y-5 relative">
                <h2 className="font-extrabold text-2xl text-[#FF3811]">About Us</h2>
                <h1 className='font-bold text-6xl  '>We are qualified <br />
                    & of experience <br /> in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. .</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                <Link className='btn bg-[#FF3811] text-white border-none bottom-0  absolute'>Get More Info</Link>

            </div>
        </div>
    );
};

export default About;