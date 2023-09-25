import { useEffect,useState } from "react";
import { auth } from '../.././firebase/firebase';

const Home = (props) => {
    const { manager, emp } = props
    console.log(manager, emp)

    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        quantity: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can submit the formData to your server here
        console.log(formData);
    };

    useEffect(() => {
        const getInfo = async () => {
            const rseponse = await fetch("https://blackbox-ryvn-git-main-siva70136.vercel.app");
            const data = await rseponse.json();
            console.log(data);
        }
        getInfo();
    })

    const logout = () => {
        auth.signOut();
    };

    return (
        <div className='main-container'>
            {manager ?
            <div>
                <h2>Register Form</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Category:</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Quantity:</label>
                        <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div> : 
            <div className="">
                <h1>Emp</h1>
                <button className="button" type='submit' onClick={logout}>Logout</button>
            </div>}
        </div>
    )
};

export default Home;