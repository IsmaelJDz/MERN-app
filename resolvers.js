class Cliente {
  constructor(id, { nombre, apellido, empresa, emails, edad, tipo, pedidos }) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.empresa = empresa;
    this.emails = emails;
    this.edad = edad;
    this.tipo = tipo;
    this.pedidos = pedidos;
  }
}

const clienteDB = {};

// Resolver
const resolvers = {
  getCliente: ({ id }) => {
    return new Cliente(id, clienteDB[id]);
  },
  crearCliente: ({ input }) => {
    const id = require("crypto")
      .randomBytes(10)
      .toString("hex");
    clienteDB[id] = input;
    return new Cliente(id, input);
  }
};

export default resolvers;