import { useEffect, useState } from "react"
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import { clearAdminData } from "../../signals/AdminSignal";

export default function Admin() {
    const [adminUserName, setAdminUserName] = useState("")
    const [categoryName, setCategoryName] = useState("")
    const [categoryDescription, setCategoryDescription] = useState("")

    const navigate = useNavigate();

    /**
     * Submits new category
     */
    const submitCategory = async (event) => {
        event.preventDefault()

        if (categoryName === "" && categoryDescription === "") {
            alert("Lisää kategorian nimi ja kuvaus!");
            return;
        }

        try {
            const body = { categoryName: categoryName, description: categoryDescription };
            await axios.post("http://localhost:3001/addCategory", body);
            alert("Kategoria " + categoryName + " lisätty.");
        } catch (error) {
            if (error.response.data.error.includes("Duplicate entry")) {
                alert("Kategoria on jo olemassa: " + categoryName);
            }
            console.error(error);
        }

        setCategoryName("");
        setCategoryDescription("");
    };

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
            
            if(adminData && adminData.adminLoggedIn){
                console.log("Admin has logged in!");
                setAdminUserName(adminData.userName);
            }
            else{
                const msg = "Access fordbidden";
                console.log(msg);
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
                <Button variant="warning" onClick={adminLogout} >Logout</Button>
                <hr></hr>
            </div>
            <h3>Add new category</h3>
            <Form>
                <Form.Group className="mb-3" id="categoryNameContainer">
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control size="lg" type="text" id="categoryNameText" value={categoryName} placeholder="category name here" onChange={(e) => setCategoryName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" id="categoryDescriptionContainer">
                    <Form.Label>Category Description</Form.Label>
                    <Form.Control as="textarea" value={categoryDescription} placeholder="category description here" onChange={(e) => setCategoryDescription(e.target.value)} />
                    <Button variant="success" id="submitButton" type="submit" onClick={(event) => submitCategory(event)}>Submit form</Button>
                </Form.Group>

            </Form>
            <hr></hr>
            <h3>Add new product</h3>
            <h2>TBD</h2>
        </div>
    );
}