import { Schema, model } from "mongoose";

const TestSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
});

const Test = model("test", TestSchema);
export default Test;
