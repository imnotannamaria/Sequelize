const { Usuario, Post, Comentarios, sequelize, Sequelize } = require('./models');

//Buscar todos os usuarios que tem a letra A no nome
// const op = Sequelize.Op;
// Usuario.findAll({
//     where:{
//         nome:{[op.like ]: 'a%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });

//Buscar todos os usuarios que não tem a letra A no nome
// const op2 = Sequelize.Op;
// Usuario.findAll({
//     where:{
//         nome:{[op2.notLike]: 'a%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });

//Buscar todos os comentários e exibir 2 por vez
// Comentarios.findAll({
//     limit: 2
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });


//CRIAR USUARIOS
// Usuario.create({
//     nome: 'Leda',
//     email: 'Leda@outlook.com',
//     senha: '9761'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });;

//ATUALIZAR USUARIOS
// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

//DELETAR USUARIO
// Usuario.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

//CRIAR POST
// Post.create({
//     texto: 'A besteira é a base da sabedoria',
//     img:'Avatar',
//     usuarios_id: 6,
//     n_likes: 100
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });;

//DELETAR POST
// Post.destroy({
//     where: {
//         id: 4
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

//LISTAR
// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

//MANEIRA 1
// Usuario.findByPk(1, {
//     include: [
//         { association: 'posts' }
//     ]
// }).then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()));
// });

//MANEIRA 2
// Usuario.findByPk(1, {include:['posts']}).then(
//     usuario => {
//         console.log(usuario.toJSON());
//         sequelize.close();
//     }
// )

Post.findByPk(1, {include:['comentarios']}).then(
    post => {
        console.log(post.toJSON());
        sequelize.close();
    }
)