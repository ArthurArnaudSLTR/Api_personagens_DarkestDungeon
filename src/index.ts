import express from "express";
const swaggerUi = require("swagger-ui-express");


const app = express();
const port = 3005;

app.use(express.json());

const personagens = [
    {
        nome: "Cruzado",
        descricao: "Combatente experiente e leal, o Cruzado já lutou na frente de batalha de centenas de guerras santas. Ele ataca seus inimigos diretamente com fúria justiceira ou desempenha um papel de suporte corporal usando seus bônus de defesa e curas secundárias.",
        
        habilidade1: {
            nome: "Punir",
            tipo: "Corpo a corpo",
            precisao_base: 85,
            bonus: "+15% de DANO vs Profanos"
        },
        habilidade2: {
            nome: "Acusação Zelosa",
            tipo: "A distância",
            precisao_base: 85,
            mod_dano: "-40%",
            mod_critico: "-4%"
        },
        habilidade3: {
            nome: "Golpe Atordoante", 
            tipo: "Corpo a corpo",
            precisao_base: 90,
            mod_dano: "-50%",
            efeito: "Atordoamento (100% base)"
        },
        habilidade4: {
            nome: "Escudo da Fé",
            efeito: "Tocha +24",
            alvo: "Em si: marcar",
            bonus: "20% de proteção para si mesmo"
        },
        habilidade5: {
            nome: "Cura de Batalha",
            efeito: "Cura 2-3"
        },
        habilidade6: {
            nome: "Lança Sagrada",
            tipo: "Corpo a corpo",
            movimento: "Para frente 1",
            precisao_base: 85,
            mod_critico: "6.5%",
            bonus: "+15% de DANO vs Profanos"
        },
        habilidade7: {
            nome: "Grito Inspirador",
            efeito: "Cura 1-1, tocha +5",
            estresse: "-5",
             
        }
    }
];



const swaggerDocument = {
    openapi: '3.0.0',
    info: {
        title: 'API de Personagens de Darkest Dungeon',
        version: '1.0.0',
        description: 'Uma API CRUD simples para gerenciar dados de personagens e suas habilidades.',
    },
    servers: [
        { url: `http://localhost:${port}` },
    ],
    paths: {
        '/personagens': {
            get: {
                summary: 'Lista todos os personagens',
                responses: {
                    '200': {
                        description: 'Array de personagens retornado com sucesso.',
                        content: {
                            'application/json': {
                                example: personagens,
                            },
                        },
                    },
                },
            },
            post: {
                summary: 'Cria um novo personagem',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    nome: { type: 'string' },
                                    descricao: { type: 'string' },
                                    habilidade1: { type: 'object' },
                                    // ... demais habilidades (simplificado)
                                },
                            },
                            example: {
                                nome: "Plague Doctor",
                                descricao: "Mestre em venenos",
                                habilidade1: { nome: "Inocular", efeito: "Cura pequena" }
                            }
                        },
                    },
                },
                responses: {
                    '201': { description: 'Personagem criado com sucesso.' },
                    '400': { description: 'Dados de entrada inválidos.' },
                },
            },
        },
        '/personagens/{nome}': {
            parameters: [
                {
                    name: 'nome',
                    in: 'path',
                    required: true,
                    schema: { type: 'string' },
                    description: 'Nome do personagem a ser manipulado (Ex: Cruzado).',
                },
            ],
            put: {
                summary: 'Atualiza um personagem existente',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            example: {
                                descricao: "Nova descrição do personagem.",
                                habilidade1: { nome: "Punir (Aprimorado)", tipo: "Corpo a corpo" }
                            },
                        },
                    },
                },
                responses: {
                    '200': { description: 'Personagem atualizado com sucesso.' },
                    '404': { description: 'Personagem não encontrado.' },
                },
            },
            delete: {
                summary: 'Exclui um personagem',
                responses: {
                    '200': { description: 'Personagem excluído com sucesso.' },
                    '404': { description: 'Personagem não encontrado.' },
                },
            },
        },
    },
};

// --- ROTAS DO SWAGGER ---

// Rota 5: /api-docs (Abre a interface do Swagger UI)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/personagens", (req, res) => {
    res.json(personagens);
});

app.post("/personagens", (req, res) => {
    const novoPersonagem = req.body;
    personagens.push(novoPersonagem);
    res.status(201).json(personagens);  // Retorna o status 201 (Created) e o array atualizado
});

app.put("/personagens/:nome", (req, res) => {
    // 1. Converte o nome da URL para minúsculas para comparação
    const nomeBusca = req.params.nome.toLowerCase();
     // 2. Encontra o índice do personagem no array
    const index = personagens.findIndex(p => p.nome.toLowerCase() === nomeBusca);

    if (index === -1) {
        // Se não encontrar, retorna 404 Not Found
        return res.status(404).json({ mensagem: "Personagem não encontrado." });
    }
    // 3. Pega os dados de atualização do corpo da requisição
    const dadosAtualizados = req.body;

    // 4. Atualiza o personagem. Usamos o spread operator ({...}) para 
    // garantir que campos não enviados no PUT permaneçam (comportamento de PATCH).
    personagens[index] = { ...personagens[index], ...dadosAtualizados };

    // 5. Retorna o personagem atualizado
    res.json(personagens[index]);
});

app.delete("/personagens/:nome", (req, res) => {
    const nomeBusca = req.params.nome.toLowerCase();

    // 1. Encontra o índice do personagem no array
    const index = personagens.findIndex(p => p.nome.toLowerCase() === nomeBusca);

    if (index === -1) {
        // Se não encontrar, retorna 404 Not Found
        return res.status(404).json({ mensagem: "Personagem não encontrado." });
    }

    // 2. Remove o personagem do array usando splice
    personagens.splice(index, 1);

    // 3. Retorna 200 OK com uma mensagem de sucesso (ou 204 No Content, que é outra opção comum)
    res.status(200).json({ mensagem: `Personagem '${req.params.nome}' excluído com sucesso.` });
});

app.listen(port, () => {
    console.log(`A API subiu na porta ${port}`)
});