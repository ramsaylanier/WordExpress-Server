import Config from 'config'
import {WordExpressDatabase} from 'wordexpress-schema'

const publicSettings = Config.get('public')
const privateSettings = Config.get('private')
const Database = new WordExpressDatabase({publicSettings, privateSettings})
const {connectors, models} = Database

export default Database
export {connectors, models}