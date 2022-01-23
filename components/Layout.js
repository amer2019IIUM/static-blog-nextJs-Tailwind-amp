import Head from 'next/head'
import Header from './Header';

export default function Layout({ title, keywords, description, children }) {
    return <div>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
        <Header />
        <main className='container mx-auto my-7'>{children}</main>
    </div>;
}


Layout.defaultProps = {
    title: "Welcome to Never stop learning website",
    keywords: "Programming, Development",
    description: "This is a learning project",
}