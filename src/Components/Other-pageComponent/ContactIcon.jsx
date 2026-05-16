

const ContactIcon = (props) => {
    return (
        <div className="flex px-3 items-center md:px-20 lg:px-5 h-20 bg-[gray]/20 hover:bg-[gray]/40 transition-all duration-400 rounded-xl">
            <div className="w-[30%] lg:w-20"><img className="w-10 h-10" src={`${props.iconn}`}/></div>
            <div className="flex flex-col justify-center text-sm md:text-lg lg:text-sm items-start">
                <p className="font-semibold">{props.name}</p>
                <p>{props.details}</p>
            </div>
        </div>
    )
}

export default ContactIcon
