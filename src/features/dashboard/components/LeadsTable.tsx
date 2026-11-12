import type { Lead } from '../types';


type LeadsTableProps = {
    leads: Lead[];
};

export function LeadsTable({ leads }: LeadsTableProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>

            <tbody>
                {leads.length === 0 ? (
                    <tr>
                        <td colSpan={3}>No leads found</td>
                    </tr>) : (
                    leads.map((lead) => (
                        <tr key={lead.id}>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.status}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}