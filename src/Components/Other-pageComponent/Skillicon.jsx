
const Skillicon = (props) => {
    return (
        <div className="flex flex-col justify-between bg-[#454242] text-center shadow-gray-700 shadow-md">
            <img src={props.which} className="p-4" alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default Skillicon
