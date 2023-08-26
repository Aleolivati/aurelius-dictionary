import { useState } from 'react'
import Header from 'components/Header'
import Result from 'components/Result'
import Search from 'components/Search'
import Head from 'next/head'

const Home = () => {
  const initialResult: PropsApi[] = [
    {
      word: 'Welcome to the Aurelius Dictionary!',
      meanings: [
        {
          partOfSpeech: 'Start writing a word in the search box',
          definitions: [
            {
              definition:
                'Than click on the search button (the one with the magnifying glass icon)'
            },
            {
              definition:
                'And you will see the meanings, synonyms and classifications of the written word!'
            }
          ],
          synonyms: ['']
        }
      ]
    }
  ]
  const [word, setWord] = useState('')
  const [result, setResult] = useState<PropsApi[]>(initialResult)

  const responseApi = async (word: string) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      )
      const data: PropsApi[] = await response.json()
      if (data[0].word === 'Welcome to the Aurelius Dictionary!') {
        alert(`I couldn't find that word. =(
          Sorry!
          It may be that this word IS NOT ENGLISH, or that THERE IS NO WORD!
          Could you write another word?
          Thanks!!!`)
      }
      setResult(data)
    } catch (error) {
      alert(
        `I couldn't find that word. =(
Sorry!
It may be that this word IS NOT ENGLISH, or that THERE IS NO WORD!
Could you write another word?
Thanks!!!`
      )
    }
  }

  const clickOnHome = () => {
    setWord('')
    setResult(initialResult)
  }

  return (
    <>
      <Head>
        <title>Aurelius - Your Friend&apos;s Dictionary</title>
      </Head>
      <Header onClick={() => clickOnHome()} />
      <Search
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onClick={() => responseApi(word)}
      />
      <Result data={result} />
    </>
  )
}

export default Home
