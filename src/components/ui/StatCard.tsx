type StatCardProps = {
    title: string;
    value: number;
};

export function StatCard({ title, value }: StatCardProps) {
    return (
        <article className="stat-card">
            <h2>{title}</h2>
            <p>{value}</p>
        </article>
    );
}