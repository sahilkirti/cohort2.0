import { Client } from 'pg'

const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_x7AfSdoE8KGN@ep-withered-block-a5jegj4q-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require'
})  
client.connect();

async function createUserTable(){
    const result = await client.query(`
        create table users (
            id serial primary key,
            username varchar(255) not null,
            email varchar(255) not null,
            password varchar(255)not null
        )
    `)
    console.log(result);
}
createUserTable();


