const categories=[
    {title: 'Backend', items: ['PHP', 'Java', 'C++', 'APIs']},
    {title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React']},
    {title: 'Database', items: ['SQL', 'PostgreSQL', 'Data Modeling']},
    {title: 'Other', items: ['SEO', 'WordPress', 'Teamwork']}
]
export default function Skills(){
    return(
        <section className="mb-12">
            <h2 className="section-title">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map(cat=>(
                    <div key={cat.title} className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold mb-2">{cat.title}</h3>
                        <ul className="text-sm text-slate-600 space-y-1">
                            {cat.items.map(i=><li key={i}>{i}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}