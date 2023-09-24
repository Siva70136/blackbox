import { useEffect } from "react";

const Home = (props) => {
    const { manager, emp } = props
    console.log(manager, emp)

    useEffect(() => {
        const getInfo = async () => {
            const rseponse = await fetch("http://localhost:3001");
            const data = await rseponse.json();
            console.log(data);
        }
        getInfo();
    })
    return (
        <div className='main-container'>
            {manager ? <h1>Manager</h1> : <h1>Emp</h1>}
        </div>
    )
};

export default Home;






