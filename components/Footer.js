export default function Footer(){
    return(
        <footer className="bg-white border-t">
            <div className="site-container py-6 text-sm text-slate-600 text-center">© {new Date().getFullYear()} Aurela Markaj. Built with Next.js and Tailwind.</div>
        </footer>
    )
}