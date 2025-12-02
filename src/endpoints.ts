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
    // CORREÇÃO: Incluindo imagemUrl
    const { nome, descricao, imagemUrl } = req.body;
    
    try {
        const novoPersonagem = await prisma.personagem.create({
            data: { nome, descricao, imagemUrl }
        });
        res.status(201).json(novoPersonagem);
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar personagem. Nome pode já existir." });
    }
});

// PUT /personagens/:nome
app.put("/personagens/:nome", async (req, res) => {
    const nomeBusca = req.params.nome;
    const dadosAtualizados = req.body;

    try {
        const personagem = await prisma.personagem.update({
            where: { nome: nomeBusca },
            data: dadosAtualizados,
            include: { habilidades: true } 
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

//  crud das habilidades
app.post("/personagens/:nome/habilidades", async (req, res) => {
    const nomeBusca = req.params.nome;
    const novaHabilidade = req.body; // Dados da habilidade

    try {
        // 1. Encontra o Personagem para obter o ID
        const personagem = await prisma.personagem.findUnique({
            where: { nome: nomeBusca },
            select: { id: true }
        });

        if (!personagem) {
            return res.status(404).json({ mensagem: "Personagem não encontrado." });
        }
        
        // 2. Cria a nova habilidade ligada ao Personagem
        const habilidadeCriada = await prisma.habilidade.create({
            data: {
                ...novaHabilidade,
                personagemId: personagem.id,
            }
        });

        res.status(201).json(habilidadeCriada);
    } catch (error) {
        // Captura o erro, que provavelmente será uma violação de unicidade (nome da habilidade duplicado)
        res.status(400).json({ mensagem: "Erro ao adicionar habilidade. Verifique se o nome já existe." });
    }
});

app.put("/habilidades/:nome", async (req, res) => {
    const nomeBusca = req.params.nome;
    const dadosAtualizados = req.body;

    delete dadosAtualizados.id;
    delete dadosAtualizados.personagemId;

    try {
        const habilidade = await prisma.habilidade.update({
            where: { nome: nomeBusca },
            data: dadosAtualizados
        });
        res.json(habilidade);
    } catch (error) {
        res.status(404).json({ mensagem: "Habilidade não encontrada." });
    }
});


app.delete("/habilidades/:nome", async (req, res) => {
    const nomeBusca = req.params.nome;

    try {
        await prisma.habilidade.delete({
            where: { nome: nomeBusca }
        });

        res.status(200).json({ 
            mensagem: `Habilidade '${nomeBusca}' excluída com sucesso.` 
        });
    } catch (error) {
        res.status(404).json({ mensagem: "Habilidade não encontrada." });
    }
});
