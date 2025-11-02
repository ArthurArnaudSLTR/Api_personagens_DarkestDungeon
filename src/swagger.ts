//reformulação para ter um padrão com ts

interface Habilidade {
    nome: string;
    tipo: string;
    precisao_base: number | "N/A";
    mod_dano: string ;
    mod_critico: string ;
    efeitos: string;
    efeito_proprio: string;
}

interface Personagem {
    nome: string;
    descricao: string;
    habilidades: Habilidade[];
}

//  O Array de Dados (Personagens)
export const personagens: Personagem[] = [
    {
        nome:"Cruzado",
        descricao: "Combatente experiente e leal, o Cruzado já lutou na frente de batalha de centenas de guerras santas. Ele ataca seus inimigos diretamente com fúria justiceira ou desempenha um papel de suporte corporal usando seus bônus de defesa e curas secundárias.",

        habilidades: [
            {
                nome: "Punir",
                tipo: "Corpo a corpo",
                precisao_base: 85,
                mod_dano: "Padrão",
                mod_critico: "0%",
                efeitos: "+15% de DANO vs Profanos",
                efeito_proprio: "N/A"
            },
            {
                nome: "Acusação Zelosa",
                tipo: "A distância",
                precisao_base: 85,
                mod_dano: "-40%",
                mod_critico: "-4%",
                efeitos: "N/A",
                efeito_proprio: "N/A"
            },
            {
                nome: "Golpe Atordoante",
                tipo: "Corpo a corpo",
                precisao_base: 90,
                mod_dano: "-50%",
                mod_critico: "Padrão (0%)",
                efeitos: "Atordoamento (100% base)",
                efeito_proprio: "N/A"
            },
            {
                nome: "Escudo da Fé",
                tipo: "Suporte",
                precisao_base: "N/A",
                mod_dano: "N/A",
                mod_critico: "N/A",
                efeitos: "Tocha +24",
                efeito_proprio: "Marcar, Bônus: 20% de proteção"
            },
            {
                nome: "Cura de Batalha",
                tipo: "Suporte",
                precisao_base: "N/A",
                mod_dano: "N/A",
                mod_critico: "N/A",
                efeitos: "Cura 2-3",
                efeito_proprio: "N/A"
            },
            {
                nome: "Lança Sagrada",
                tipo: "Corpo a corpo",
                precisao_base: 85,
                mod_dano: "Padrão",
                mod_critico: "+6.5%",
                efeitos: "Para frente 1, +15% de DANO vs Profanos",
                efeito_proprio: "N/A"
            },
            {
                nome: "Grito Inspirador",
                tipo: "Suporte",
                precisao_base: "N/A",
                mod_dano: "N/A",
                mod_critico: "N/A",
                efeitos: "Cura 1-1 (Vida), Tocha +5",
                efeito_proprio: "Estresse -5"
            }
        ]
    },
    {
        nome: "Bufão",
        descricao: "O combate é uma canção com uma introdução e um grande final! Na ofensiva, o Bufão salta de um lado para outro numa dissonância sangrenta, posicionando-se para o glorioso fim nas linhas de frente! Ele também pode ficar atrás, executando melodias cruéis e refrões inquietantes que aterrorizam seus adversários e fortalecem seus aliados.",
        habilidades: [
            {
                nome: "Estocada de Adaga",
                tipo: "Corpo a corpo",
                precisao_base: 85,
                mod_dano: "Padrão (1.0x)",
                mod_critico: "5%",
                efeitos: "Ignora Guarda",
                efeito_proprio: "Final: +30% de DANO (8 rds)"
            },
            {
                nome: "Colher",
                tipo: "Corpo a corpo",
                precisao_base: 90,
                mod_dano: "-50%",
                mod_critico: "0%",
                efeitos: "Sangramento (100% base) 2 pontos/rodada por 3 rodadas",
                efeito_proprio: "Final: +30% de DANO (8 rds)"
            },
            {
                nome: "Final",
                tipo: "Corpo a corpo",
                precisao_base: 140,
                mod_dano: "+50%",
                mod_critico: "+5%",
                efeitos: "N/A",
                efeito_proprio: "Para trás 3, -25 ESQUIVA, -3 VEL, +100% Estresse (1 Batalha)"
            },
            {
                nome: "Solo",
                tipo: "À Distância",
                precisao_base: 125,
                mod_dano: "-100% (Não-Dano)",
                mod_critico: "+5%",
                efeitos: "N/A",
                efeito_proprio: "Para frente 3, Marcar a Si Mesmo (3 rodadas), +20 ESQUIVA (4 rodadas), Final: +75% DE DANO (8 rodadas), Final: +8% DE CRÍTICO (8 rodadas)"
            },
            {
                nome: "Cortar Fora",
                tipo: "Corpo a corpo",
                precisao_base: 95,
                mod_dano: "-33%",
                mod_critico: "+8%",
                efeitos: "Sangramento (100% base) 3 pontos/rodada por 3 rodadas",
                efeito_proprio: "Final: +30% de DANO (8 rds)"
            },
            {
                nome: "Balada de Batalha",
                tipo: "Suporte (Bufa)",
                precisao_base: 100,
                mod_dano: "N/A",
                mod_critico: "N/A",
                efeitos: "+5 ACC, +2% CRIT, +2 SPD (4 rds)",
                efeito_proprio: "Final: +30% de Dano (8 rodadas), Final: +8% de Crítico (8 rodadas)"
            },
            {
                nome: "Canção Inspiradora",
                tipo: "Suporte (Estresse)",
                precisao_base: 100,
                mod_dano: "N/A",
                mod_critico: "N/A",
                efeitos: "Estresse -8, -10% Estresse",
                efeito_proprio: "Final: +30% de Dano (8 rodadas), Final: +8% de Crítico (8 rodadas)"
            }
        ]
    },
    {
        nome: "Bandido",
        descricao: "Um rebelde, um criminoso e um ladrão, o Bandido aprimorou suas habilidades com arma de fogo e punhal para causar um efeito devastador. Tanto a distância quanto de perto, ele é sempre eficaz em eliminar seus inimigos. Seja com um tiro de metralha de efeito de área, ou com um sagramento contra um único alvo, as habilidades do bandido têm como objetivo causar dano de várias maneiras.",
        habilidades: [
            {
                nome: "Corte Cruel",
                tipo: "Corpo a corpo",
                precisao_base: 85,
                mod_dano: "+15%",
                mod_critico: "5%",
                efeitos: "N/A",
                efeito_proprio: "N/A"
            },
            {
                nome: "Tiro de Pistola",
                tipo: "À Distância",
                precisao_base: 85,
                mod_dano: "-15%",
                mod_critico: "7.5%",
                efeitos: "+25% de dano contra Marcado",
                efeito_proprio: "N/A"
            },
            {
                nome: "Tiro à Queima-Roupa",
                tipo: "À Distância",
                precisao_base: 95,
                mod_dano: "+50%",
                mod_critico: "+5%",
                efeitos: "Repulsão 1 (100% base)",
                efeito_proprio: "Para trás 1"
            },
            {
                nome: "Explosão de Metralha",
                tipo: "À Distância",
                precisao_base: 75,
                mod_dano: "-50%",
                mod_critico: "-9%",
                efeitos: "+4% de acertos críticos recebidos (100% base, 3 rodadas)",
                efeito_proprio: "N/A"
            },
            {
                nome: "Tiro Rastreante",
                tipo: "À Distância",
                precisao_base: 95,
                mod_dano: "-80%",
                mod_critico: "0%",
                efeitos: "Ignorar/Remover o modo furtivo",
                efeito_proprio: "+6 ACC, +4% CRIT, +12% DANO (1 Batalha)"
            },
            {
                nome: "Avanço do Duelista",
                tipo: "Corpo a corpo",
                precisao_base: 90,
                mod_dano: "-20%",
                mod_critico: "+5%",
                efeitos: "N/A",
                efeito_proprio: "Para frente 1, ativa Ripostar (3 rodadas), Ripostar: -40% de dano"
            },
            {
                nome: "Veia Aberta",
                tipo: "Corpo a corpo",
                precisao_base: 95,
                mod_dano: "-15%",
                mod_critico: "0%",
                efeitos: "Sangramento (100% base) 2 pts/rodada por 3 rodadas, -20% Resistência a Sangramento (100% base), 1 SPD (100% base) (3 rodadas)",
                efeito_proprio: "N/A"
            }
        ]
    },
    {
        nome: "Médica da Peste",
        descricao: "Uma médica, pesquisadora e alquimista que prefere Ficar nos bastidores, consumindo suas vítimas com habilidades de dano por tempo, como nuvens tóxicas e granadas pestilentas. Ela também é boa no papel de suporte, cegando e confundindo seus oponentes enquanto melhora a sobrevivência do grupo com tônicos que aumentam o dano e remédios para efeitos de sangramento e peste.",
        habilidades: [
            {
                nome: "Explosão Pestilenta",
                tipo: "À Distância (Área)",
                precisao_base: 95,
                mod_dano: "-80%",
                mod_critico: "5%",
                efeitos: "Praga (100% base) 5 pts/rodada por 3 rodadas.",
                efeito_proprio: "-5 ACC (100% base, 3 rodadas)."
            },
            {
                nome: "Granada de Praga",
                tipo: "À Distância",
                precisao_base: 95,
                mod_dano: "-90%",
                mod_critico: "0%",
                efeitos: "Praga (100% base) 4 pts/rodada por 3 rodadas.",
                efeito_proprio: "N/A"
            },
            {
                nome: "Gás Cegante",
                tipo: "À Distância",
                precisao_base: 95,
                mod_dano: "N/A (ou -100%)",
                mod_critico: "N/A",
                efeitos: "Atordoamento (100% base).",
                efeito_proprio: "N/A"
            },
            {
                nome: "Incisão",
                tipo: "Corpo a corpo",
                precisao_base: 85,
                mod_dano: "Padrão (1.0x)",
                mod_critico: "5%",
                efeitos: "Sangramento (100% base) 2 pontos/rodada por 3 rodadas.",
                efeito_proprio: "N/A"
            },
            {
                nome: "Medicina de Batalha",
                tipo: "Suporte (Cura)",
                precisao_base: "N/A",
                mod_dano: "N/A",
                mod_critico: "N/A",
                efeitos: "Cura 1-1 (Vida), Curar Praga/Sangramento (no alvo).",
                efeito_proprio: "Curar Praga/Sangramento (em si)."
            },
            {
                nome: "Vapores da Coragem",
                tipo: "Suporte (Bufa)",
                precisao_base: "N/A",
                mod_dano: "N/A",
                mod_critico: "N/A",
                efeitos: "Aumenta em +20% o DANO e +3 a VELOCIDADE (por 1 batalha).",
                efeito_proprio: "N/A"
            },
            {
                nome: "Explosão Desorientadora",
                tipo: "À Distância",
                precisao_base: 95,
                mod_dano: "N/A (ou -100%)",
                mod_critico: "N/A",
                efeitos: "Embaralhar Individual (100% base), Atordoar (100% base), Eliminar todos os Cadáveres.",
                efeito_proprio: "N/A"
            }
        ]
    }
];


export const createSwaggerDocument = (port: number) => ({
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
                                    habilidades: { 
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                        }
                                    },
                                },
                            },
                            example: {
                                nome: "Plague Doctor",
                                descricao: "Mestre em venenos",
                                habilidades: [{ nome: "Inocular", tipo: "Suporte", precisao_base: "N/A", mod_dano: "N/A", mod_critico: "N/A", efeitos: "Cura pequena", efeito_proprio: "N/A" }]
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
                                habilidades: [{ nome: "Punir (Aprimorado)", tipo: "Corpo a corpo" }]
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
});