import {Client} from 'pg';

async function getUser(email:string){
    const client = new Client({
        connectionString: 'postgresql://neondb_owner:npg_x7AfSdoE8KGN@ep-withered-block-a5jegj4q-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require'
    }) 
    await client.connect();
    const query = 'select * from user where email=';
    const result = await client.query(query,[email])

    if(result.rows.length>0){
        console.log('user found',result.rows[0]);
        return result.rows[0];
    }else{
        console.log('no user found');
        return null;
    }
}
getUser('sahilkirti26660@gmail.com').catch(console.error);
