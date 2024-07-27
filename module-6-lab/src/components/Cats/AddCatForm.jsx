import { useState } from 'react';

export default function AddCatForm({ onAddCat }){
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !latinName || !image) {
            alert('Please fill in all fields.');
            return;
        }

        const newCat = {
            name: name,
            latinName: latinName,
            image: image,
        };

        onAddCat(newCat);
        setName('');
        setLatinName('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Big Cat</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Latin Name:
                <input type="text" value={latinName} onChange={(e) => setLatinName(e.target.value)} />
            </label>
            <br />
            <label>
                Image URL:
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            </label>
            <br />
            <button type="submit">Add Cat</button>
        </form>
    );
}
