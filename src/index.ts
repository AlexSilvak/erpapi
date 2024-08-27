import express from 'express'; // Exemplo de configuração do servidor
import dotenv from 'dotenv';


dotenv.config(); // Carregar variáveis de ambiente do arquivo .env

const port=process.env.port || 3000 // Agora você pode acessar as variáveis de ambiente usando process.env

const dbURL=process.env.dbURL || ''

console.log(`Servidor rodando na porta ${port}`);
console.log(`Conectando ao banco de dados em ${dbURL}`);

const app=express();

app.get('/', (req, res) => {
    res.status(200).json({"message":"Hello, Word!"})
  });

app.get('/products',(req,res)=>{
    
     res.status(200).json({"message":"Produtos!"})
})



app.listen(port,()=>{
    console.log(`Servidor Rodando em http://localhost:${port}` );
})

export default app;