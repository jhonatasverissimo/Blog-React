import api from "../../services/api";
import Posts from "../../components/Posts";
import { useState } from "react";
const Main = () => {
    
    //Estilos diferentes de requisição
    /* Async Await
    async function handleAxios(){
        const response = await api.get('/posts');
        console.log(response);
        
    }
    */

    /*
    Método Then
    function handleAxios(){
        const response =  api.get('/posts')
        .then((response) =>{
            console.log(response);
        })
    }
    */

    const [post, setPost] = useState([]);



    //Requisição com Try Catch 
        async function handleAxios(){
            try {
                const response = await api.get('/posts');
                setPost(response.data);

            } catch (error) {
                console.log(error);
            }
        }

    
    return(
        <>
            <section className="container">
                <h1>Main.JS</h1>
                <button onClick={handleAxios}>Fazer requisição</button>

                <div className="container-posts mt-5">
                    {
                        post.map(post =>{
                            return(
                                <>
                                
                                    <Posts key={post.id} subtitle={post.category} title={post.title} >
                                        {post.description}
                                    </Posts>
                                    
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Main;