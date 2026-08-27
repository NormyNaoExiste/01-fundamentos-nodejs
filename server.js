import { fastify } from 'fastify';

const server = fastify();

server.get('/', (req, res)=>{
return 'Home - Cadastro de usuarios';
});

server.get('/users', (req, res)=>{
return 'Listagem de usuarios';
});

server.get('/users/produtos', (req, res)=>{
    const {nome, email, telefone} = req.query;
    return `Filtro de categoria: ${nome}, ${email}, ${telefone}`
})

server.post('/users', (req, res)=>{
return 'Cadastro de usuarios';
});

server.put('/users/:id', (req, res)=>{
    const id = req.params.id
    return `Usuario de id:${id} atualizado com sucesso`
});

server.delete('/users/:id', (req, res)=>{
    const id = req.params.id
    return `usuario de id:${id} deletado com sucesso`
});

server.get('/users/:userId/pedido/:pedidoId', (req, res)=>{
    const userId = req.params.userId;
    const pedidoId = req.params.pedidoId;
    return `pedido:${pedidoId}, do usuario de id:${userId}`
});

server.listen({port: 3000}, (err, address) => {
if (err) {
console.error(err);
}
console.log( `Servidor rodando em ${address} ` );
});