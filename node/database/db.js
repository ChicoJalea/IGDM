import {Sequelize} from 'sequelize'

const db = new Sequelize('dependencias_entre_guias','ChicoJalea','7878sql78',{
    host:'localhost',
    dialect:'postgres'
})

export default db 