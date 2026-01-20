
import Category from "../model/Category.js"

class CategoryController {
    static createCategory= async (req, res)=>{
        
        const category = await Category.create(req.body)
        if (!category) {
            return res.status(404).json({ message: "Category not created" })
        } else {
            return res.status(201).json({ message: "Category created successfully", category })
        }
    }
}

export default CategoryController;