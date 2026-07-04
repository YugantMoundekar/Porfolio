import { services } from '../data'
const Services = () => {

    return (

        <div id='services' className='text-center  flex flex-col justify-center items-center tracking-wider py-36 '>
            <div><h1 className='uppercase text-white font-bold text-3xl '>My Services</h1></div>
            <div className='grid grid-cols-2   gap-16 mt-32 text-primary text-center font-semibold text-xl' >
                {services.map((service, index) => (
                    <div className='' key={index}>
                        <h2>{service.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services