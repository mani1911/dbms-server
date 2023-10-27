import { Hospital } from "../models/index.js"

const hospitalDetails = [
    {
        hospital_name : "Kannan Hospital",
        address : "No.1, Kannan Street, Chennai"
    },
    {
        hospital_name : "Kumaran Hospital",
        address : "No.2, Kumaran Street, Chennai"
    },
    {
        hospital_name : "Chinna Hospital",
        address : "No.3, Chinna Street, Chennai"
    },
]

const hospitalSeeder = async () => {
    try {
        const hospitals = await Hospital.insertMany(hospitalDetails)
        console.log('Seed Hospitals Successful...')
    }
    catch (e){
        console.log(e)
    }
}

export default hospitalSeeder