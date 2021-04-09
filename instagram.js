const { Usuario, Post, Comentarios, sequelize } = require('./models');

Usuario.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

Post.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

Comentarios.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

