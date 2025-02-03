"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, firstname, lastname, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.users.create({
            data: {
                username: username,
                firstname: firstname,
                lastname: lastname,
                password: password
            },
            select: {
                username: true,
                firstname: true,
                lastname: true,
            }
        });
        console.log(res);
    });
}
insertUser('HoneySingh123', 'Honey', 'Singh', 'honeysingh2002$');
//you have created database scheme schema.prisma
//you have migrated your database
//then you have genrated a client by using command;
