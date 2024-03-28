import React, { useState } from 'react'
import axios from 'axios'
import './Productform.css'

export default function Modal({ closeModal }) {
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [category, setCategory] = useState('')
    const [salePrice, setSalePrice] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3001/menu/add-items', {
                name :productName,
                description,
                imageUrl,
                category,
                salePrice
            })
            console.log(response.data)
            // You can handle success (e.g., show a success message, close the modal)
            closeModal(false)
        } catch (error) {
            console.error('Error adding product:', error)
            // You can handle error (e.g., show an error message)
        }
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titlecloseBtn justify-end">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h1>Add New Product</h1> <hr />
                    <br />
                </div>
                <div className="body">
                    <form onSubmit={handleSubmit}>
                        <label>Product Name:</label>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder="Product Name"
                            className="p-2 border rounded-md"
                            required
                        />
                        <br />
                        <label>Product Description:</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                            className="p-2 border rounded-md mt-3"
                            required
                        />
                        <br />
                        <label>Product Image:</label>
                        <input
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            placeholder="Image URL"
                            className="p-2 border rounded-md mt-4"
                            required
                        />
                        <br />
                        <label>Category:</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Category"
                            className="p-2 border rounded-md mt-3"
                            required
                        >
                            <option value="appetizer" >Appetizer</option>
                            <option value="main course">Main course</option>
                            <option value="dessert">Dessert</option>
                        </select>
                        <br />

                        <label>Sale Price:</label>
                        <input
                            type="number"
                            value={salePrice}
                            onChange={(e) => setSalePrice(e.target.value)}
                            placeholder="Sale Price"
                            className="col-span-full p-2 border rounded-md mt-3"
                            required
                        />
                        <br />
                        <button type="submit">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
