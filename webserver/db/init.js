import dotenv from "dotenv";
import db from "../models/index.js";
import { User } from "../models/User.js";
import { Group } from "../models/Group.js";
import { Organization } from "../models/Organization.js";
import { Meal } from "../models/Meal.js";
import { Type } from "../models/Type.js";

// Env variables
dotenv.config();

// Database conection
await db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error))

// // Sync database
// await db.sync()
//     .then(() => console.log('Base de datos reconfigurada'))
//     .catch(error => console.log(error))

// const adminGroup = new Group({
//     name: "admin",
//     description: "The administrator group"
// });
// await adminGroup.save();

// const publicGroup = new Group({
//     name: "public",
//     description: "The public group"
// });
// await publicGroup.save();

// const publicOrganization = new Organization({
//     name: "public",
//     description: "Public organization"
// });
// await publicOrganization.save();

// const adminUser = new User({
//     name: "Administrador",
//     email: process.env.ADMIN_EMAIL,
//     password: process.env.ADMIN_PASSWORD,
//     token: null,
//     confirmed: true,
//     groupId: 1,
// });
// await adminUser.save();

// const desayuno = new Meal({
//     name: "Desayuno"
// });
// await desayuno.save();

// const almuerzo = new Meal({
//     name: "Almuerzo"
// });
// await almuerzo.save();

// const cena = new Meal({
//     name: "Cena"
// });
// await cena.save();

// const t1 = new Type({
//     id: 7,
//     name: "Desayuno",
// })
// await t1.save();

const t2 = new Type({
    id: 2,
    name: "Entrada",
})
await t2.save();

const t3 = new Type({
    id: 3,
    name: "P. Fondo",
})
await t3.save();

const t4 = new Type({
    id: 4,
    name: "Bebida",
})
await t4.save();

const t5 = new Type({
    id: 5,
    name: "Postre",
})
await t5.save();

const t6 = new Type({
    id: 8,
    name: "Cena",
})
await t6.save();
