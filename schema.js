import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Cliente {
    id: ID
    nombre: String
    apellido: String
    empresa: String
    emails: [Email]
    edad: Int
    tipo: TipoCliente
    pedidos: [Pedido]  
  }
  type Email {
    email: String
  }
  type Pedido{
    producto: String
    precio: Int
  }
  type Query {
    getCliente(id: ID) : Cliente
  }
  """ Asigna la categoria del cliente """
  enum TipoCliente{
    BASICO
    PREMIUM
  }

  input PedidoInput {
    producto: String
    precio: Int
  }
  input EmailIput {
    email: String
  }
  """ Campos para los clientes nuevos """
  input ClienteInput {
    id: ID
    nombre: String!
    apellido: String!
    empresa: String!
    emails: [EmailIput]
    edad: Int!
    tipo: TipoCliente!
    pedidos: [PedidoInput]
  }
  """ Mutaciones para crear clientes """
  type Mutation {
    #Nombre del Resolver, Input con Datos y valor que retorna
    """ Te permite crear nuevos clientes """
    crearCliente(input: ClienteInput) : Cliente
  }
`);

export default schema;