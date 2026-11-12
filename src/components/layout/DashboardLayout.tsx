import type { ReactNode } from 'react';
import  { Sidebar } from './Sidebar';
import { Header } from './Header';

type DashboardLayoutProps = {
    children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="dashboard-layout">
            <Sidebar />

            <div className="dashboard-main">
                <Header />
                <main>{children}</main>
            </div>
        </div>
    );
}