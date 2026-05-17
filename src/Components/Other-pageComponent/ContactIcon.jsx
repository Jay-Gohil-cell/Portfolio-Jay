const ContactIcon = (props) => {
    return (
        <div className="flex px-3 items-center gap-4 md:gap-6 lg:gap-3 md:px-20 lg:px-5 h-20 bg-[gray]/20 hover:bg-[gray]/40 transition-all duration-400 rounded-xl">

            <div className="w-[30%] flex justify-center">
                <img className="w-10 h-10" src={props.iconn} />
            </div>

            <div className="flex flex-col justify-center items-start w-full text-sm md:text-xl lg:text-sm">
                <p className="font-semibold">{props.name}</p>

                <p className="break-all text-[11px]">
                    {props.details}
                </p>
            </div>

        </div>
    )
}

export default ContactIcon