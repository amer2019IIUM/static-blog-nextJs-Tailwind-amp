import Link from 'next/link'

export default function CategoryLabel({ children }) {
    const colorKey = {
        JavaScript: 'yellow',
        CSS: 'blue',
        Python: 'green',
        PHP: 'purple',
        Ruby: 'red',
    }

    return (
        <div
            className={`bg-purple-600 px-2 py-1 text-gray-100 font-bold rounded`}
        >
            <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
        </div>
    )
}
