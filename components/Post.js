/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";


export default function Post({ post }) {
    return (
        <div className="w-full py-6  px-10 bg-white rounded-lg shadow-md mt-6">
            <Image src={post.frontmatter.cover_image} alt="post-image" width={600} height={420} className="mb-4 rounded"></Image>
            <div className="flex justify-between items-center">
                <span className="font-light text-gray-600">{post.frontmatter.date}</span>
                <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
            </div>
            <div className="mt-2">
                <Link href={`/blog/${post.slug}`}><a className="text-2xl text-gray-700 font-bold hover:underline">{post.frontmatter.title}</a></Link>
                <p className="mt-2 text-gray-600">
                    {post.frontmatter.excerpt}
                </p>
            </div>
            <div className="flex justify-between mt-4">
                <Link href={`/blog/${post.slug}`}><a className="font-light hover:text-blue-600">Read More</a></Link>
                <img src={post.frontmatter.author_image} alt="post-author" className="mx-4 rounded-full w-10 h-10 object-cover hidden sm:block" />
            </div>
        </div>
    );
}
