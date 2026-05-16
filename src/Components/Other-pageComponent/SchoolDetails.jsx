const SchoolDetails = (props) => {
  return (
      <div className="flex flex-col tracking-wide text-center md:text-start md:gap-1 gap-2">
        <p className="md:text-xl lg:text-2xl text-lg font-semibold">
          {props.degree} ||  {props.year}
        </p>

        <p className="text-xl">
          {props.name}
        </p>

        <p className="text-xl font-semibold">
          {props.result}
        </p>
      </div>
  )
}

export default SchoolDetails