import hospitalSeeder from "./seed_hospitals.js";
import userSeeder from "./seed_users.js";

function seeder(){
    hospitalSeeder()
    userSeeder()
}

export default seeder