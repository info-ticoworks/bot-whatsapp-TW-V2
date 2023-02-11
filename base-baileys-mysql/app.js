const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MySQLAdapter = require('@bot-whatsapp/database/mysql')
const { createBotDialog } = require('@bot-whatsapp/contexts/dialogflow')

/**
 * Declaramos las conexiones de MySQL
 */
const MYSQL_DB_HOST = '51.222.14.197'
const MYSQL_DB_USER = 'root'
const MYSQL_DB_PASSWORD = 'MutWbqvj9nlYCXZHb8uj'
const MYSQL_DB_NAME = 'twbot'
const main = async () => {
    const adapterDB = new MySQLAdapter({
        host: MYSQL_DB_HOST,
        user: MYSQL_DB_USER,
        database: MYSQL_DB_NAME,
        password: MYSQL_DB_PASSWORD,
    })
    const adapterProvider = createProvider(BaileysProvider)

    createBotDialog({
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
