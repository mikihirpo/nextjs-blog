import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p class="mt-1 mb-4 text-center text-[#878787]">Explore the best experience now</p>
      
      <form>
                  <div class="mb-6">
                     <input
                        type="text"
                        placeholder="Email"
                        class="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#ececec]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  <div class="mb-6">
                     <input
                        type="password"
                        placeholder="Password"
                        class="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#ececec]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  <div class="mb-18">
                     <input
                        type="submit"
                        value="Sign In"
                        class="
                        w-full
                        rounded-md
                        border
                        border-primary
                        mt-10
                        py-3
                        px-5
                        bg-[#0070f3]
                        text-base text-white
                        cursor-pointer
                        hover:bg-opacity-90
                        transition
                        "
                        />
                  </div>
               </form>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p class="mt-8 text-center text-[#878787]">Don't have an account? <a> Register</a></p>
        {/* <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul> */}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
