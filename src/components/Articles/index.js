import Posts from '../Posts';
function Articles(){
    //Fazer requisição de API e passar os atributos

    return(
        <section className='container'>
            <h1>Articles</h1>
            <div className='container-posts mt-3'>
                <Posts subtitle="tecnologia" title="O guia definitivo do blog">
                    1) is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s
                </Posts>
                
                <Posts subtitle="Fotografia" title="Quais melhores câmeras 2022 ">
                    2) is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s
                </Posts>
                
                <Posts subtitle="Cinema" title="Os 10 filmes com maior bilheteria">
                    3) is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s
                </Posts>
            </div>
        </section>
    );
}
export default Articles; 