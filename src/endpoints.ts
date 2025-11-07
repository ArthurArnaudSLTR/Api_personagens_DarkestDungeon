import { personagens } from "./Dados/dados_personagens";
import { app } from './index';

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
