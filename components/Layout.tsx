import Head from 'next/head'
import Link from 'next/link'
type Props = {
  children: any
  title: string
}
export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title ? title + '- Amazona' : 'Amazona'}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className=" bg-blue-500 flex h-24 items-center px-4 justify-between shadow-md">
            <Link href="/" legacyBehavior>
              <p className="text-4xl font-bold text-pink-900">Amazona</p>
            </Link>
            <div>
              <Link href="/card">
                <span className="p-4">Cart</span>
              </Link>
              <Link href="/login">
                <span className="p-4">Login</span>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-8 px-8">{children}</main>
        <footer className="flex h-12 bg-blue-500 justify-center items-center shadow-inner">
          <p>Copyright @2023 Amazona</p>
        </footer>
      </div>
    </>
  )
}
