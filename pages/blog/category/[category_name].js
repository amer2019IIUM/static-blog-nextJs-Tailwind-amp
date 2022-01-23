import Layout from "../../../components/Layout";
import fs from "fs"
import path from "path"
import matter from 'gray-matter';
import Link from "next/link";
import Post from "../../../components/Post";
import sortByDate from '../../../utils'


export default function Home({ posts }) {
    return (
        <Layout>
            <h1 className='text-5xl border-b-4 p-5 font-bold'>Latest Posts</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {posts.map((post, index) => <Post key={index} post={post}></Post>)}
            </div>

        </Layout>
    )
}


export async function getStaticProps({ params: { category_name } }) {
    console.log(category_name);
    const files = fs.readdirSync(path.join("posts"));
    const posts = files.map(fileName => {
        const slug = fileName.replace(".md", "")
        const markdownWithMeta = fs.readFileSync(path.join("posts", fileName), 'utf-8')
        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter
        }
    })
    const categoriedPosts = posts.filter((post) => post.frontmatter.category.toLowerCase() === category_name)
    console.log(posts);
    return {
        props: {
            posts: categoriedPosts.sort(sortByDate)
        }
    };
}

export async function getStaticPaths() {

    const files = fs.readdirSync(path.join("posts"));
    const categories = files.map(fileName => {
        const markdownWithMeta = fs.readFileSync(path.join("posts", fileName), 'utf-8')
        const { data: frontmatter } = matter(markdownWithMeta)
        return frontmatter.category.toLowerCase()
    }
    )
    const paths = categories.map(category => ({
        params: { category_name: category }
    }
    ))
    return {
        paths,
        fallback: false
    };

}

