import Layout from "../components/Layout";


export default function AboutPage() {
    return (
        <Layout title="About Never Stop">
            <h1 className="text-4xl font-bold border-b-4 pb-5">About</h1>

            <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
                <h3 className="text-2xl mb-5">NeverStop Blog</h3>
                <p className="mb-3">This is a never stop learning blog. It is built by using TailwindCss & NextJs</p>
            </div>
        </Layout>
    );
}
