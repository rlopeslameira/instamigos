import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'

export default function Home() {
  return (
    <div className="bg-grey-50 h-screen overflow-y-scroll">
      <Head>
        <title>Instamigos 1.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  )
}
