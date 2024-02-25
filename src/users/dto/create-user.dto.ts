export class CreateUserDto {
  nome: string;
  sobrenome: string;
  email: string;
  telefoneCelular: string;
  dataNascimento: Date | null;
  estadoCivil: string | null;
  naturalidade: string | null;
  cpf: string;
  rg: string | null;
  profissao: string | null;
  nomeConjuge: string | null;
  cpfConjuge: string | null;
  enderecoResidencial: string;
  bairro: string;
  municipio: string;
  cep: string;
  observacao: string | null;
  dataCompra: Date | null;

  constructor(partial: Partial<CreateUserDto>) {
    Object.assign(this, partial);
  }
}
