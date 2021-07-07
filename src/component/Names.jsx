const Names = () => {

    const students = ['ali','kumail','hassan','saad']



    return(
        <div>
           {students.map((v,i) => {
              return(
                  <h1 key={i} >{v}</h1>
              );
           })}
        </div>
    );
}

export default Names;