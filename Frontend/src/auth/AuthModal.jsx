import { useState } from "react";
import axios from "axios";
import'../auth/AuthModal.css';

const AuthModal = ({ onClose }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState(""); // Added email state
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isRegister ? "/api/auth/register" : "/api/auth/login";

        try {
            const payload = isRegister
                ? { username, email, password }
                : { username, password };

            const { data } = await axios.post(endpoint, payload);
            alert(isRegister ? "Registered successfully!" : `Welcome, ${username}`);
            onClose();
        } catch (error) {
            alert("Error: " + (error.response?.data?.message || "Something went wrong"));
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{isRegister ? "Register" : "Login"}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    {isRegister && (
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    )}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">{isRegister ? "Register" : "Login"}</button>
                </form>
                <p onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? "Already have an account? Login" : "No account? Register"}
                </p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AuthModal;
