import Service from "../model/ServiceModel.js";
import Category from "../model/Category.js";

class serviceController {
    static createService = async (req, res) => {
        const { title, description, categorys, price, provider } = req.body;
        const category = await Category.findById(categorys);
        if (!category) {
            return res.status(404).json({ message: "Category not found!" });
        }
        try {

            const userId = req.user?._id;
            if (!userId) {
                return res.status(404).json({ message: "User not authenticated!" });
            }



            let service = await Service.create({
                title,
                description,
                categorys,
                price,
                provider: userId,
            });

            service = await service.populate([
                { path: "categorys", select: "categoryName" },
                { path: "provider", select: "names email" },
            ]);

            return res.status(201).json({
                message: "Service created successfully",
                service,
            });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
    static findServices = async (req, res) => {
        const service = await Service.find();
        if (!service) {
            return res.status(404).json({ message: "Service not found!" })
        } else {
            return res.status(200).json({ message: "Service successfully retrieved", service })
        }
    }
}

export default serviceController;