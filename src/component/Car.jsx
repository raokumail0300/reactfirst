const Car = ({name,model,company}) => {
    return(
        <div>
            <h1>My car name is {name}</h1>
            <h1>My car model is {model}</h1>
            {company&& <h1> My car company is {company}</h1> }
        </div>
    )
}


export default Car;