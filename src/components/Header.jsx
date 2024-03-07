import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <div>
      
        <nav className="flex justify-between items-center bg-lightbg p-4">
        <Link href="/">
        <Image
        src="/images/blazedWideLogo.png"
        alt="Blazed Logo"
        width={230}
        height={60} 
        />
        </Link>
      </nav>
      
    </div>
  );
}

export default Header;
