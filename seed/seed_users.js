import {BcryptHashPassword} from '../utils/bcrypt.js'
import User from '../models/user.js'

const userSeeder = async () => {
    const userDetails = [
        {
            username : "user1",
            email: "user1@user1.com",
            password: BcryptHashPassword("user1")
        },
        {
            username : "user2",
            email: "user2@user2.com",
            password: BcryptHashPassword("user2")
        },
        {
            username : "user3",
            email: "user3@user3.com",
            password: BcryptHashPassword("user3")
        },
    ]
    try {
        await User.bulkCreate(userDetails)

        console.log('Seed Users Successful...')
    }
    catch (e){
        console.log(e)
    }
}

export default userSeeder



