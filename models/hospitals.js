import { Schema, model } from "mongoose";

const HospitalSchema = Schema({
	hospital_name: {
		type: String,
		required: true,
	},
    address : {
        type: String,
        required: true
    }
    
});

const HospitalModel = model("hospital", HospitalSchema);
export default HospitalModel;