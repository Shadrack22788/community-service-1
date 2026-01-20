import mongoose  from "mongoose";

const CategorySchema = new mongoose.Schema({
   categoryName: {
        type: String,
        required: [true, 'Category name is required'],
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const Category = mongoose.model('Category', CategorySchema);
export default Category;