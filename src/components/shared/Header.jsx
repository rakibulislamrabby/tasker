export default function Header() {
    return (
        <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
            <div className="px-28 mx-auto flex items-center justify-between gap-x-6">
                <a href="/">
                   <h1 className="text-2xl font-bold text-white">Tasker</h1>
                </a>
            </div>
        </nav>
    );
}