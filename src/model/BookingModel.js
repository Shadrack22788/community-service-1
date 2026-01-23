import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service"
    },
    date: {
        type: Date,
        required: [true, "Please specify date you want your service"],

    },
    time: {
        type: String,
        required: [true, "Please specify time you want your service"],
    }, 
    status:{
        type:Date,
        enum: [true, "pending","accepted","cancelled"],
        default: "pending"
    },
    notes:{
        type:String,
        required:false
    },
    createdAt:{
        type:Date,
        default:new Date(Date.now())
    }
})

bookingSchema.pre(/^find/,function(next){
    this.populate([
        {path: "client",select: "names email"},
        {path: "service",select: "title"}
    ])
})

const BookingService = mongoose.model("BookingService",bookingSchema)
export default BookingService

