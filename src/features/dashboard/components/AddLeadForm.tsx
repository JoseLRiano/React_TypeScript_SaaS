import { useState } from 'react';
import type { NewLeadInput } from "../types";

type AddLeadFormProps = {
    onAddLead: (input: NewLeadInput) => void;
};

export function AddLeadForm({ onAddLead }: AddLeadFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit() {
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();

        if(!trimmedName || !trimmedEmail) {
            return;
        }

        onAddLead({
            name: trimmedName,
            email: trimmedEmail,
        });

        setName('');
        setEmail('');
    }

    return (
        <form 
            onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}
        >
            <label htmlFor="lead-name">Name</label>
            <input
                id="lead-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />
            <label htmlFor="lead-email">Email</label>
            <input
                id="lead-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            <button type="submit">Add Lead</button>
        </form>
    );
}