import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
    const { LoggedInUser } = useContext(UserContext);

    return (
        <div className="text-center my-10 p-4">
            <h1 className="font-bold text-4xl p-2 my-4 text-blue-700">Hello {LoggedInUser}!!</h1>
            <div className="shadow-lg rounded-lg p-6 bg-white w-fit mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome To Cheap Thrills</h2>
                <p className="text-gray-600 mb-6">Order what you like at the cheapest prices</p>
                <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-medium text-gray-900">My name is Nithin Kumar</h3>
                    <h3 className="text-xl font-medium text-gray-900">A Passionate React Developer</h3>
                </div>
            </div>
        </div>
    );
}

export default About;
