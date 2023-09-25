import { useEffect, useState } from "react";
import { auth } from '../.././firebase/firebase';
import './index.css'


const Home = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { manager } = props
    console.log(manager)
    

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can submit the formData to your server here
        console.log(formData);
        try {
            const response = await fetch('https://blackbox-guis-git-main-siva70136.vercel.app/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log("HI");
            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful:', data);

            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }


    };

    useEffect(() => {
        const getInfo = async () => {
            setIsLoading(true);
             console.log("start");
            const rseponse = await fetch("https://blackbox-ryvn-git-main-siva70136.vercel.app/users");
            const data = await rseponse.json();
            console.log(data);
            setIsLoading(false);
            setData(data);

        }
        getInfo();
    })

    const logout = () => {
        auth.signOut();
    };



    return (
        <div className='main-container'>
            {manager ?
                <div className="app-container">

                    <form onSubmit={handleSubmit} className="form">
                        <h2 className="textHead">Register Form</h2>

                        <p className="left">Name:</p>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input"
                        />


                        <p className="left">Category:</p>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="input"
                        />


                        <p className="left">Price:</p>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="input"
                        />

                        <p className="left">Quantity:</p>
                        <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="input"
                        />


                        <p className="left">Description:</p>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="input"
                        />

                        <div className="button-container">
                            <button type="submit" className="button btn">Submit</button>
                            <button onClick={logout} className="button btn">Logout</button>
                        </div>
                    </form>
                </div> :
                <div className="">
                    <div className="table-container">
                        <h3 className="textHead">Product Information</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th><h3 className="texthead">Name</h3></th>
                                    <th><h3 className="texthead">Category</h3></th>
                                    <th><h3 className="texthead">Price</h3></th>
                                    <th><h3 className="texthead">Quantity</h3></th>
                                    <th><h3 className="texthead">Description</h3></th>
                                </tr>
                            </thead>
                            
                        </table>
                    </div>
        <button onClick={logout} className="button btn">Logout</button>
                </div>}
        </div>
    )
};

export default Home;
