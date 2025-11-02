import express from "express";
const swaggerUi = require("swagger-ui-express"); 
import { personagens, createSwaggerDocument } from "./swagger"; 


const app = express();
const port = 3005;

const swaggerDocument = createSwaggerDocument(port); 


app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// GET /personagens
app.get("/personagens", (req, res) => {
    res.json(personagens); 
});

// POST /personagens
app.post("/personagens", (req, res) => {
    const novoPersonagem = req.body;
    personagens.push(novoPersonagem);
    res.status(201).json(personagens); 
});

// PUT /personagens/:nome
app.put("/personagens/:nome", (req, res) => {
    const nomeBusca = req.params.nome.toLowerCase();
    const index = personagens.findIndex(p => p.nome.toLowerCase() === nomeBusca);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Personagem não encontrado." });
    }
    const dadosAtualizados = req.body;
    
    personagens[index] = { ...personagens[index], ...dadosAtualizados };

    res.json(personagens[index]);
});

// DELETE /personagens/:nome
app.delete("/personagens/:nome", (req, res) => {
    const nomeBusca = req.params.nome.toLowerCase();

    const index = personagens.findIndex(p => p.nome.toLowerCase() === nomeBusca);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Personagem não encontrado." });
    }

    // Remove o personagem do array
    personagens.splice(index, 1);

    res.status(200).json({ mensagem: `Personagem '${req.params.nome}' excluído com sucesso.` });
});

// Inicialização do Servidor
app.listen(port, () => {
    console.log(`A API subiu na porta ${port}`)
});