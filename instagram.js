const { Usuario, Post, Comentarios, sequelize, Sequelize } = require('./models');

// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Comentarios.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

//Buscar todos os usuarios que tem a letra A no nome
const op = Sequelize.Op;
Usuario.findAll({
    where:{
        nome:{[op.like ]: 'a%'}
    }
})
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
});

//Buscar todos os usuarios que não tem a letra A no nome
const op2 = Sequelize.Op;
Usuario.findAll({
    where:{
        nome:{[op2.notLike]: 'a%'}
    }
})
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
});

//Buscar todos os comentários e exibir 2 por vez
Comentarios.findAll({
    limit: 2
})
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
});


