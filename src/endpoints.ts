import { app } from './index';
import { prisma} from './lib/Prisma';

// GET /personagens
app.get("/personagens", async (req, res) => {
    const personagens = await prisma.personagem.findMany({
        include: { habilidades: true }
    });
    res.json(personagens);
});

// POST /personagens
app.post("/personagens", async (req, res) => {
    const { nome, descricao } = req.body;
    const novoPersonagem = await prisma.personagem.create({
        data: { nome, descricao }
    });
    res.status(201).json(novoPersonagem);
});

// PUT /personagens/:nome
app.put("/personagens/:nome", async (req, res) => {
    const nomeBusca = req.params.nome;
    const dadosAtualizados = req.body;

    try {
        const personagem = await prisma.personagem.update({
            where: { nome: nomeBusca },
            data: dadosAtualizados
        });
        res.json(personagem);
    } catch (error) {
        res.status(404).json({ mensagem: "Personagem não encontrado." });
    }
});

// DELETE /personagens/:nome
app.delete("/personagens/:nome", async (req, res) => {
    const nomeBusca = req.params.nome;

    try {
        await prisma.personagem.delete({
            where: { nome: nomeBusca }
        });
        res.status(200).json({ mensagem: `Personagem '${nomeBusca}' excluído com sucesso.` });
    } catch (error) {
        res.status(404).json({ mensagem: "Personagem não encontrado." });
    }
});