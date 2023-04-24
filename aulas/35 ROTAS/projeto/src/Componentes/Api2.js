import axios from 'axios'
import { useState,useEffect } from 'react'

const Api2 =() => {

    const [posts, setPosts] = useState([])

    //Função assincrona para resgatar os dados da api
    
    const getPosts = async()=> {

        try{
            const resp= await axios.get('https://jsonplaceholder.typicode.com/posts')
            const data =resp.data;

            setPosts(data);

        }catch(error){
          console.log(error)
         }
    }

    useEffect(()=>{

        getPosts()
    },[])
     // COM O ARRAY VAZIO O A FUNÇÃO VAI EXECUTAR UMA VEZ NO LOAD DA PÁGINA

return(

    <>
    <h1>POSTS ATUAIS</h1>
    {/* condicional ternária*/}
    {posts.length === 0 ? <p>Atualizando</p>:(
        posts.map((post)=>(
            <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
        ))           
    )}
    </>

)
}
export default Api2