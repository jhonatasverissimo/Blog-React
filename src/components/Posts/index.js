const Posts = ({title, subtitle, children, author, date}) =>{
    //Outra maneira é colocar o nome props (ou qualquer outro)
    //e chamar no elemento o props.propriedade
     
    return(
        <div className="post mx-2">
            <div className="img-post"></div>
            <h5>{subtitle}</h5>
            <h3>{title}</h3>
            <p className="mt-1">
            {children}
            </p>
            <div className="flex pt-2">
                <div className="img-profile"></div>
                <div className="desc-profile ml-2 ">
                    <h6 className="color-blue">{author}</h6>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
}
export default Posts; 