import Head from 'next/head'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Featured from '@/components/Featured'
import Works from '@/components/Works'
import client from "@/sanityClient"
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'

// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import { Inter } from 'next/font/google'

import { Barlow_Condensed, Gloria_Hallelujah, Itim } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

const barlow = Barlow_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--barlow-font'
})

const gloria = Gloria_Hallelujah({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--gloria-font'
})


const itim = Itim({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--itim-font'
})

export async function getStaticProps() {

  const featuredSection = await client.fetch(`*[_type=="featuredSection"][0]{featuredParagraph}`);
  const gallery = await client.fetch(`*[_type=="gallery"]`);
  const pricing = await client.fetch(`*[_type=="pricing"]`);

  return {
    props: {
      featuredSection,
      gallery,
      pricing
    }
  };
}

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Props = UnwrapPromise<ReturnType<typeof getStaticProps>>['props'];


export default function Home({ featuredSection, gallery, pricing }: Props) {
  return (
    <>
      <Head>
        {/* <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={`${barlow.variable} ${gloria.variable} ${itim.variable} overflow-hidden`}>
        {/* home nav */}
        <span id="home" className="absolute top-0"></span>
        <Nav></Nav>
        <Hero></Hero>
        <Featured featuredSection={featuredSection}></Featured>
        <Works gallery={gallery}></Works>
        <Pricing pricing={pricing}></Pricing>
        <Contact></Contact>
      </main>
    </>
  )
}

