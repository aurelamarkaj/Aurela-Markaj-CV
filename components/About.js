export default function About(){
    return(
        <section className="mb-12">
            <h2 className="section-title">About</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <p className="mb-4">I’m a Back-End Developer and WordPress Developer from Albania, passionate about data management and building scalable systems. As an Informatics graduate, I enjoy turning complex problems into clean, functional solutions.</p>
                    <p>Strong skills in algorithms, data structures, PHP, SQL and database design. I also have experience building responsive front-ends and WordPress websites using Elementor.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="mb-2"><strong>Education</strong></div>
                    <div className="text-sm text-slate-600">Bachelor in Computer Science — University of Tirana (Oct 2022 - Jul 2025)</div>
                </div>
            </div>
        </section>
    )
}