-- CreateTable
CREATE TABLE "Personagem" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Personagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habilidade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "precisao_base" TEXT NOT NULL,
    "mod_dano" TEXT NOT NULL,
    "mod_critico" TEXT NOT NULL,
    "efeitos" TEXT NOT NULL,
    "efeito_proprio" TEXT NOT NULL,
    "personagemId" INTEGER NOT NULL,

    CONSTRAINT "Habilidade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Personagem_nome_key" ON "Personagem"("nome");


CREATE UNIQUE INDEX "Habilidade_nome_personagemId_key" ON "Habilidade"("nome", "personagemId");


ALTER TABLE "Habilidade" ADD CONSTRAINT "Habilidade_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
