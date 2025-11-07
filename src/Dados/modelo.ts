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
