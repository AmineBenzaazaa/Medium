import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import {sanityClient, urlFor} from '../sanity'
import {Post} from '../typings'

interface Props {
  posts: [Post];
}

export default function Home({posts}: Props){
  console.log(posts)
  return (
    <div className="">
      
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='flex justify-between items-center bg-yellow-400 border-y-black py-10'>
        <div className='px-10 space-y-5'>
            <h1 className='text-6xl max-w-xl font-serif'>
              <span className='underline decoration-black'>Medium</span> is a place to write, readm and connect.
            </h1>
            <h2>
              it's easy and free to post your thinking on any topic and connect 
              with millions of readers.
            </h2>
        </div>
        <div className='hidden md:inline-flex h-32 lg:h-full' >
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png" alt=''/>
        </div>
      </div>
      {/* Posts */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6'>
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div>
              <img src={urlFor(post.mainImage).url()!} alt="" />
              <div>
                <p>{post.title}</p>
                <p>{post.description} 
                </p>
              </div>

              {/* <img src={urlFor(post.author.image).url()!} alt="" /> */}
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `
    *[_type == "post"] {
    _id,
    title,
    description,
    mainImage,
    slug
  }`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts
    }
  }
}
