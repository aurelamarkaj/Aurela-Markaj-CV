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
                        <li><Link href="/projects" className="hover:text-accent">Projects</Link></li>
                        <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
                    </ul>
                </nav>
                <div className="md:hidden">
                    <details>
                        <summary className="cursor-pointer">Menu</summary>
                        <div className="flex flex-com mt-2">
                            <Link href="/about" className="py-1">About</Link>
                            <Link href="/skills" className="py-1">Skills</Link>
                            <Link href="/experience" className="py-1">Experience</Link>
                            <Link href="/projects" className="py-1">Projects</Link>
                            <Link href="/contact" className="py-1">Contact</Link>
                        </div>
                    </details>
                </div>
            </div>
        </header>
    )
}