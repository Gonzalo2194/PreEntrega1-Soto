import React, { useState } from "react";
import "../Checkoutform/checkoutform.css"


const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
    name,
    phone,
    email,
    };

    onConfirm(userData);
};

return (
    <div className="Contenedor">
    <form onSubmit={handleConfirm} className="form">
        <label className="Label">
        Nombre
        <input
            className="input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
        />
        </label>

        <label className="Label">
        Teléfono
        <input
            className="input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
        />
        </label>
        <label className="Label">
        Email
        <input
            className="input"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
        />
        </label>

        <button className="buttonconfirmar" type="submit">Confirmar compra</button>
    </form>
    </div>
    );
};

export default CheckoutForm;

