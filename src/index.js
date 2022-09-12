const express = require('express')
const typeorm = require('typeorm')
const Wilder = require('./models/Wilder')

const app = express()

const dataSource = new typeorm.DataSource({
    type: 'sqlite',
    database: 'db.sqlite',
    synchronize: true, // utile pour debug et dev, le jour ou l'app est en prod ne plus faire ca puisque que c'est la destruction, ce qui nous evite a devoir ecrire des fichiers de migration
    entities: [require('./models/Wilder')]
})

app.get('/', function (req, res) {
    res.send("Hello Wild!")
})

const PORT = 4000

const start = async () => {
    await dataSource.initialize() //attend que la data soit bien initialize avant de listen (.then)
    dataSource.getRepository(Wilder).save({name: 'First Wilder'})
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    })
}

start()

//SQLite système BDD relationnelle, pas un serveur qui tourne, rien à installer, votre app automatiquement créer un fichier qui contiendra la base, aller lire dedans écrire dedans pour modifier les données, solution légere, fichier autonome. Mettre dans le .gitignore. Pas bcp utilisé en prod, mais pour petit projet très bien. => POSTgreSQL pour des projets plus volumineux (voir plus tard). `npm install sqlite3`

//TYPEORM permet de com avec la bdd mais en utilisant une surcouche orienté objet, nos classes => nos entités relationnels, un tableau par entité. il propose des interface typé pour typescript, tout va être typé entierement. `npm install typeorm`