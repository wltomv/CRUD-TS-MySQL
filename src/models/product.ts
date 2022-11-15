import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Product = db.define('product', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.NUMBER
    },
    discountPercentage: {
        type: DataTypes.NUMBER
    },
    rating: {
        type: DataTypes.NUMBER
    },
    stock: {
        type: DataTypes.NUMBER
    },
    thumbnail: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'product'
})

export default Product;