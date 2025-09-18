import { links } from "express/lib/response";
import Link from next/links
export default function Hero(){
    return(
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
            <div className="md:col-span-2">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Aurela Markaj</h1>
                <p className="text-xl text-slate-700 mb-4">Back-End Developer & WordPress Developer — passionate about data management and building scalable systems.</p>
                <p className="max-w-xl text-slate-600">I turn complex problems into clean, functional solutions. Experienced in PHP, SQL, PostgreSQL, Java, and WordPress with a strong eye for maintainable server-side code.</p>
                <div className="mt-6 flex gab-3">
                    <Link href="/projects" className="inline-block px-4 py-2 bg-accent text-white rounded-lg">View Projects</Link>
                    <Link href="/contact" className="inline-block px-4 py-2 border rounded-lg">Contact</Link>
                </div>
            </div>
            <div className="mx-auto md:mx-0 flex justify-center md:justify-end">
                <div className="w-44 h-44 rounded-xl overflow-hidden shadow-lg">
                    <img src="/avatar.png" alt="Aurela portrait" className="w-full h-full object-cover"/>
                </div>
            </div>
        </section>
    )
}