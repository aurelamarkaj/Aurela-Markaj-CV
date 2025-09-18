export default function Contact(){
    return(
        <section className="mb-12">
            <h2 className="section-title">Contact</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm max-w-xl">
                <p className="text-sm text-slate-600 mb-3">Interested in working together? Send an email or use the contact form below.</p>
                <form action="mailto:aurelamarkaj2004@gmail.com" method="get" encType="text/plain" className="space-y-3">
                    <input name="name" placeholder="Your name" aria-label="Your name" className="w-full border px-3 py-2 rounded"/>
                    <input name="email" placeholder="Email" aria-label="Email" className="w-full border px-3 py-2 rounded"/>
                    <textarea name="message" rows="4" placeholder="Message" aria-label="Message" className="w-full border px-3 py-2 rounded"></textarea>
                    <div className="flex gap-3">
                        <button type="submit" className="px-4 py-2 bg-accent text-white rounded">Send</button>
                        <a href="mailto:aurelamarkaj2004@gmail.com" className="px-4 py-2 border rounded">Email</a>
                    </div>
                </form>
            </div>
        </section>
    )
}