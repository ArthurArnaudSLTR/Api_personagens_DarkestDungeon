//reformulação para ter um padrão com ts

export interface Habilidade {
    nome: string;
    tipo: string;
    precisao_base: number | "N/A";
    mod_dano: string ;
    mod_critico: string ;
    efeitos: string;
    efeito_proprio: string;
}

export interface Personagem {
    nome: string;
    descricao: string;
    habilidades: Habilidade[];
}
