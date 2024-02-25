-- CreateTable
CREATE TABLE "pessoaFisica" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefoneCelular" TEXT NOT NULL,
    "dataNascimento" DATETIME,
    "estadoCivil" TEXT,
    "naturalidade" TEXT,
    "cpf" TEXT NOT NULL,
    "rg" TEXT,
    "profissao" TEXT,
    "nomeConjuge" TEXT,
    "cpfConjuge" TEXT,
    "enderecoResidencial" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "observacao" TEXT,
    "dataCompra" DATETIME
);
