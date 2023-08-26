declare type PropsApi = {
  word: string
  meanings: [
    {
      partOfSpeech: string
      definitions: [
        {
          definition: string
        }
      ]
      synonyms: string[]
    }
  ]
}
