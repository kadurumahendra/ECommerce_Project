import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
    {
        name:{type:String, required: true, trim: true},
        description:{type:String, required: true, trim: true},
        price:{type:Number, min:1, max:100000, required: true},
        category:{type:String, required: true, trim: true},
        quantity:{type:Number, min:1, max: 10000, required: true},
        published:{type:Boolean, default: false }
    }, 
    {
        timestamps: true
    }
)
const Product = mongoose.model('product', productSchema);
export default Product;