import Image from 'next/image';

export default function Footer() {
    return (
<footer className="bg-darkbg text-lighttext px-4 pt-6">
<div className="flex flex-row justify-between">
    <div>
        <a href="/">
            <Image
            src="/images/blazedWideLogo.png"
            alt="Blazed Logo"
            width={200}
            height={55} 
            />
        </a>
    </div>

<div className="flex flex-row justify-between">
        <div className="mt-4 p-4 text-sm">
          <p>© 2024 <a href="http://www.azaleacd.ca" className="hover:text-blazedpink">Azalea Cyber Development</a></p>
        </div>
</div>
</div>
</footer>
    );
  }