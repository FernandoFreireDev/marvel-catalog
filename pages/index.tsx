import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="hm-container">
      <div className="hm-content">
        <span className="hm-logo">
          <Image src="/marvel-logo.png" alt="Marvel" width={400} height={160} />
        </span>
        <h1>Marvel Comics Catalog</h1>
        <Link href="/catalog">Access catalog</Link>
      </div>
    </div>
  )
}