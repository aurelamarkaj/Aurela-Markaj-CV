import Link from 'next/link'
export default function Header(){
    return(
        <header className="bg-white shadow-sm sticky top-0 z-30">
            <div className="site-container flex items-center justify-between py-3">
                <Link href="/">
                <span className="text-xl font-bold curdor-pointer">Aurela Markaj</span>
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex gap-6 text-sm">
                        <li><Link href="/about" className="hover:text-accent">About</Link></li>
                        <li><Link href="/skills" className="hover:text-accent">Skills</Link></li>
                        <li><Link href="/experience" className="hover:text-accent">Experience</Link></li>
                        <li><Link href="/projects"</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}