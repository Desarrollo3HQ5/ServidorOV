const mysqlDB = {
        host: process.env.MYSQL_HOST || '201.184.98.75',
        user: process.env.MYSQL_USER || 'desarrollo3',
        password: process.env.MYSQL_PASSWORD || "5cTmZk25f",
        database : process.env.MYSQL_DB || 'hoja_de_vida',
        port:3306,
//         host: '201.184.98.75',
//         user: 'desarrollo3',
//         password: "5cTmZk25f",
//         database : 'hoja_de_vida',
//         port:3306,
}
const jwt={
        secret:process.env.JET_SECRET || 'hq5sas'
       }

export {mysqlDB,jwt}