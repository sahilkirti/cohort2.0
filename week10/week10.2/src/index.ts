import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, firstname: string, lastname: string, password: string){
    const res = await prisma.users.create({
        data: {
            username: username,
            firstname: firstname,
            lastname: lastname,
            password: password

        },
        select:{
            username: true,
            firstname: true,
            lastname: true,
        }
    })
    console.log(res);

}
insertUser('HoneySingh123','Honey','Singh','honeysingh2002$')

//you have created database scheme schema.prisma
//you have migrated your database
//then you have genrated a client by using command;


// import { PrismaClient} from '@prisma/client';
// const prisma = new PrismaClient();

// updateParams(
//     firstname: string,
//     lastname: string

// )
// async function updateUser(username: string, {firstname, lastname}:updateParams){
//     const res = awaitprisma.users.update({
//         where: {username:username},
//         data:{
//             firstname: firstname,
//             lastname: lastname
//         }
//     })
//     console.log(res);
// }
// updateUser('HoneySingh123',{'Honey','Singh'})

