import api from "../../services/api";
import Posts from "../../components/Posts";
import { useState,useEffect } from "react";
const Main = () => {
    
    //Estilos diferentes de requisição
    /* Async Await
    async function handleAxios(){
        const response = await api.get('/posts');
        console.log(response);
        
    }
    */

    const [post, setPost] = useState([]);
    //Método Then
    
    useEffect(() => {
        api.get('/posts')
        .then((response)=> {
            setPost(response.data)
        })
    },[])

    

    



    //Requisição com Try Catch 
        /*
        async function handleAxios(){
            try {
                const response = await api.get('/posts');
                setPost(response.data);

            } catch (error) {
                console.log(error);
            }
        }
        */

    
    return(
        <>
            <section className="container">
                <h2 className="mt-3">Articles</h2>

                <div className="container-posts mt-5">
                    {
                        post.map(post =>{
                            return(
                                <>
                                
                                    <Posts 
                                     key={post.id} 
                                     subtitle={post.category} 
                                     title={post.title} 
                                     author ={post.author} 
                                     date ={post.date}
                                     children={post.description}>
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