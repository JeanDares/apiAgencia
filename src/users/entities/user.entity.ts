import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  pessoaID: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  sobrenome: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 20 })
  telefoneCelular: string;

  @Column({ type: 'date', nullable: true })
  dataNascimento: Date | null;

  @Column({ length: 20, nullable: true })
  estadoCivil: string | null;

  @Column({ length: 100, nullable: true })
  naturalidade: string | null;

  @Column({ length: 14 })
  cpf: string;

  @Column({ length: 20, nullable: true })
  rg: string | null;

  @Column({ length: 100, nullable: true })
  profissao: string | null;

  @Column({ length: 100, nullable: true })
  nomeConjuge: string | null;

  @Column({ length: 14, nullable: true })
  cpfConjuge: string | null;

  @Column({ length: 200 })
  enderecoResidencial: string;

  @Column({ length: 100 })
  bairro: string;

  @Column({ length: 100 })
  municipio: string;

  @Column({ length: 10 })
  cep: string;

  @Column({ length: 244, nullable: true })
  observacao: string | null;

  @Column({ type: 'date', nullable: true })
  dataCompra: Date | null;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
