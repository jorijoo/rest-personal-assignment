import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import { clearAdminData } from "../../signals/AdminSignal";
import '../../constants/public_env'
import { LOCALIZATION } from "../../constants/fi";
import CategoryAdmin from "./CategoryAdmin/CategoryAdmin";
import ProductAdmin from "./ProductAdmin/ProductAdmin";

export default function Admin() {
    const [adminUserName, setAdminUserName] = useState("")

    const navigate = useNavigate();

    /**
     * Log admin out and clear signal.
     */
    const adminLogout = () => {
        try {
            clearAdminData();
            navigate("/");
            console.log('Admin logged out.');
        } catch (error) {
            console.log("Error loggin admin out.")
            navigate("/");
        }
    };

    useEffect(() => {
        try {
            const adminData = JSON.parse(sessionStorage.adminData);

            if (adminData && adminData.adminLoggedIn) {
                // console.log("Admin has logged in!");
                setAdminUserName(adminData.userName);
            }
            else {
                const msg = "Access fordbidden";
                // console.log(msg);
                throw new Error(msg)
            }
        } catch (error) {
            console.log(error);
            navigate("/");
        }
    }, []);


    return (
        <div>
            <div id="adminHeader">
                <h1>Welcome {adminUserName}</h1>
                <Button variant="warning" onClick={adminLogout} >{LOCALIZATION.LOGOUT}</Button>
                <hr></hr>
            </div>
            <CategoryAdmin />
            <ProductAdmin />
        </div>
    );
}