const experiences=[
    {
       id: 'instant-al',
        role: 'WordPress Developer',
        company: 'Instant.al',
        date: 'Sept 2025 - Present',
        desc: 'Designed, developed, and maintained responsive WordPress websites using Elementor and WPBakery. Improved SEO and performance.' 
    },
    {
        id: 'lavie',
        role: 'Full-stack (Project)',
        company: 'La Vie (fashion e-commerce)',
        date: '2024',
        desc: 'Built full-stack e-commerce for dresses with filtering, cart, and admin inventory.'
    }
]
export default function Experience(){
    return(
        <section className="mb-12">
            <h2 className="section-title">Experience</h2>
            <div className="space-y-4">
                {experiences.map(x=>(
                    <div key={x.id} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="font-semibold">{x.role}-{x.company}</div>
                                <div className="text-sm text-slate-500">{x.date}</div>
                            </div>
                        </div>
                        <p className="mt-3 text-slate-600">{x.desc}</p>
                        </div>
                ))}
            </div>
        </section>
    )
}