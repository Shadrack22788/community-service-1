import mongoose, { Types } from "mongoose"

const ServiceSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Title is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!']
    },
    categorys: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    },
    price: {
        type: Number,
        required: [true, "Price is required!"]
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",

    },
    createdAt: {
        type: Date,
        default: (Date.now())
    }
    

})

ServiceSchema.pre(/^find/, function (next){
    this.populate({
        path: "categorys",
        select: "categoryName"
    });
});
const service = mongoose.model( "Service", ServiceSchema);
export default service;