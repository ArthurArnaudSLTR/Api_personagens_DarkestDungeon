//reformulação para ter um padrão com ts

export interface Habilidade {
    id?: number;
    nome: string;
    tipo: string;
    precisao_base: number | "N/A";
    mod_dano: string ;
    mod_critico: string ;
    efeitos: string;
    efeito_proprio: string;
    personagemId?: number;
}

export interface Personagem {
    id?: number;
    imagemUrl?: string | null;
    nome: string;
    descricao: string;
    habilidades: Habilidade[];
}
