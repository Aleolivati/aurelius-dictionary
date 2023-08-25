import Header from 'components/Header'
import Result from 'components/Result'
import Search from 'components/Search'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Aurelius - Your Friend&apos;s Dictionary</title>
      </Head>
      <Header />
      <Search />
      <Result />
    </>
  )
}

export default Home
