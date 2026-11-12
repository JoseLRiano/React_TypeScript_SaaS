import { StatCard } from '../../components/ui/StatCard';
import { LeadsTable } from './components/LeadsTable';
import { mockLeads } from './data/mockLeads';
import { useState } from 'react';
import { AddLeadForm } from './components/AddLeadForm';
import type { Lead, LeadStatus, NewLeadInput } from './types';


type StatusFilter = 'all' | LeadStatus;

export function DashboardPage() {

    const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const [leads, setLeads] = useState<Lead[]>(mockLeads);

    const filteredLeads = leads.filter((lead) => {
        const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;

        const matchesSearch = lead.name.toLowerCase().includes(normalizedQuery) || lead.email.toLowerCase().includes(normalizedQuery);

        return matchesStatus && matchesSearch;
    });

    const newLeadsCount = leads.filter(lead => lead.status === 'new').length;


    function handleAddLead(input: NewLeadInput) {
        const newLead: Lead = {
            id: crypto.randomUUID(),
            name: input.name,
            email: input.email,
            status: 'new',
        };

        setLeads((previousLeads) => [...previousLeads, newLead]);
    }

    return (
        <section aria-labelledby="dashboard-title">
            <h1 id="dashboard-title">Dashboard Overview</h1>
            <div className="stats-grid">
                <StatCard title="Total leads" value={leads.length}></StatCard>
                <StatCard title="New Leads" value={newLeadsCount}></StatCard>
                <StatCard title="Appointments" value={3}></StatCard>
            </div>
            <AddLeadForm onAddLead={handleAddLead} />
            <div>
                <label htmlFor="lead-search">Search leads</label>
                <input 
                    id="lead-search"
                    type="search"
                    placeholder="Search by name or email"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
            </div>

            <div role="group" aria-label="filter leads by status">
                <button
                    type="button"
                    aria-pressed={statusFilter === 'all'}
                    onClick={() => setStatusFilter('all')}
                >All</button>
                <button 
                    type="button"
                    aria-pressed={statusFilter === 'new'}
                    onClick={() => setStatusFilter('new')}
                >New</button>
                <button 
                    type="button"
                    aria-pressed={statusFilter === 'contacted'}
                    onClick={() => setStatusFilter('contacted')}
                >Contacted</button>
                <button
                    type="button"
                    aria-pressed={statusFilter === 'qualified'}
                    onClick={() => setStatusFilter('qualified')}
                >Qualified</button>

            </div>
            <button
                type="button"
                onClick={() => {setStatusFilter('all'); setSearchQuery('');}}
                >Clear filters</button>
            <LeadsTable leads={filteredLeads} />
        </section>
    );
}