import { personagens } from "../Dados/dados_personagens";


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