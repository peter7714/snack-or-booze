import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import './NewItemForm.css';

function NewItemForm({addItem, setNewItem}) {
    const initialState = {
        itemType: '',
        id: '',
        name: '',
        description: '',
        recipe: '',
        serve: ''
    };

    const [formData, setFormData] = useState(initialState);
    
    const handleChange = e => {
        const {name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const gatherInput = e => {
        e.preventDefault();
        addItem(formData);
        setFormData(initialState);
        setNewItem(true);
    }
    return (
        <Card>
            <CardBody>
                <CardTitle className="font-weight-bold text-center">
                    Add A New Item!
                </CardTitle>
                <form onSubmit={gatherInput}>
                    <label htmlFor="itemType">Item:</label>
                    <select
                        name="itemType" 
                        id="itemType"
                        onChange={e => setFormData({...formData, itemType: e.target.value})}>
                        <option>Pick one</option>
                        <option value='snacks'>snacks</option>
                        <option value='drinks'>drinks</option>
                    </select>
                    <label htmlFor="id">Item ID:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="id"
                        value={formData.id}
                        id='id'
                        />
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={formData.name}
                        id='name'
                        />
                    <label htmlFor="id">Description:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="description"
                        value={formData.description}
                        id='description'
                        />
                    <label htmlFor="id">Recipe:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="recipe"
                        value={formData.recipe}
                        id='recipe'
                        />
                    <label htmlFor="id">Serve:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="serve"
                        value={formData.serve}
                        id='serve'
                        />
                    <button><Link to='/'/>Add Item!</button>
                </form>
            </CardBody>
        </Card>
    )
}

export default NewItemForm;