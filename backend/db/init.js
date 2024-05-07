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
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error))

// // Sync database
// db.sync()
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

const desayunoType = new Type({
    id: 7,
    name: "Desayuno",
})
await desayunoType.save();
