import { Schema, model } from "mongoose";

const DoctorSchema = Schema({
    id: {
        type: Number,
        default: -1,
    },
	name: {
		type: String,
		required: true,
	},
    practising_from : {
        type: Date,
        required: false
    },
    
});

const DoctorModel = model("doctor", DoctorSchema);
export default DoctorModel;