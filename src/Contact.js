import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Contact = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [headCount, setHeadCount] = useState(1);
    const [timing, setTiming] = useState('1200-1300');
    const [seat, setSeat] = useState('Anywhere');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('25-01-2022');
    const [waiting, setWaiting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const reservations = { name, phone, email, headCount, timing, seat };

        setWaiting(true);

        fetch('http://localhost:3001/reservations', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reservations)
        }).then(() => {
            console.log("New reservation added");
            setWaiting(false);
            navigate("/");
        })

    };

    return (
        <div>
            <div className="container contact">
                <div className="background-image-contact"></div>
                <h2>Enter your Booking Details:</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label>Name</label>
                    <input type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Phone Number</label>
                    <input type="phone"
                        required
                        value={phone}
                        type="tel"
                        pattern="[0-9]{10}"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <label>Number of seats</label>
                    <input type="number"
                        required
                        value={headCount}
                        min="1"
                        max="15"
                        step="1"
                        onChange={(e) => setHeadCount(e.target.value)}
                    />
                    <label>Date:</label>
                    <input type="date"
                        required
                        value={date}
                        min="2022-01-25"
                        max="2022-12-31"
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <label>Timing</label>
                    <select
                        value={timing}
                        onChange={(e) => setTiming(e.target.value)}
                    >
                        <option value="1200-1300">1200-1300</option>
                        <option value="1300-1400">1300-1400</option>
                        <option value="1400-1500">1400-1500</option>
                        <option value="1800-1900">1800-1900</option>
                        <option value="1900-2000">1900-2000</option>
                        <option value="2000-2100">2000-2100</option>
                    </select>
                    <label>Email Address</label>
                    <input type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Type of Seat</label>
                    <select
                        value={seat}
                        onChange={(e) => setSeat(e.target.value)}
                    >
                        <option value="Window">Window</option>
                        <option value="Center">Center</option>
                        <option value="Corner">Corner</option>
                        <option value="Anywhere">Anywhere</option>
                    </select>
                    {!waiting && <button>Submit</button>}
                    {waiting && <button>Submitting...</button>}
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;