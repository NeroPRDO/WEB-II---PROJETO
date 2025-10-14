export class Cliente {
  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public ativo: boolean
  ) {}

  getNomeCompleto(): string {
    return this.nome.toUpperCase();
  }
}
//exemplo de model, futuramente usaremos para instaciar com dados da api, ou para tipar dados