const projects = [
{
id: 'lavie-ecom',
title: 'La Vie — E-commerce',
desc: 'Full-stack fashion e-commerce for dresses with custom product filters, cart, and admin panel.'
},
{
id: 'qhht-site',
title: 'QHHT informational site',
desc: 'Informational site with booking functionality and calm, clean design.'
}
]
export default function Projects(){
    return(
        <section className="mb-12">
            <h2 className="section title">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map(p=>(
                    <div key={p.id} className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold">{p.title}</h3>
                        <p className="text-sm text-slate-600">{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}