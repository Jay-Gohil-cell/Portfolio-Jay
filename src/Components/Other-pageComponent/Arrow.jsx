
const Arrow = (props) => {
    return (
        <div className={`md:text-8xl text-5xl py-4 md:py-7 mb-0  w-full text-center`} style={{backgroundColor : props.bgcolor , color : props.textcolor}}>
            ↓
        </div>
    )
}

export default Arrow
