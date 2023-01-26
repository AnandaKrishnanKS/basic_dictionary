


function result() {
    words = inputwrd.value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`).then(data => data.json()).then(data => answer(data))
}

function answer(value) {
    word = value[0].word
    phonetic = value[0].phonetic
    partofSpeach = value[0].meanings[0].partOfSpeech
    definition = value[0].meanings[0].definitions[0].definition

    displayResult.innerHTML = `

            <div class="mainbox1 text-white">
                <div class="sec1">
                    <p class="word">${word}</p>
                    <p class="pro"><img class="voic" src="./images/icons8-voice-90.png" alt="..."> ${phonetic}</p>
                </div>
                <div class="sec2">
                    <p class="typ"> <strong>${partofSpeach}</strong></p>
                    <div>
                        <p class="meaning">${definition}</p>
                    </div>
                </div>
            </div>

    `


}



// -----------------
// sample of ulr
// -----------------

// [
//     {"word":"horror",
//     "phonetic":"/ˈhɔɹɚ/",
//     "phonetics":[{"text":"/ˈhɔɹɚ/","audio":""},{"text":"/ˈhɒɹə/","audio":""},{"text":"/ˈhɑɹɚ/","audio":"https://api.dictionaryapi.dev/media/pronunciations/en/horror-us.mp3","sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=1684639","license":{"name":"BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"}}],
//     "meanings":[
//                 {"partOfSpeech":"noun",
//                 "definitions":
//                    [
//                       {"definition":"An intense distressing emotion of fear or repugnance.",
//                           "synonyms":[],"antonyms":[]},
//                       {"definition":"Something horrible; that which excites horror.",
//                           "synonyms":[],"antonyms":[],"example":"I saw many horrors during the war."},
//                       {"definition":"Intense dislike or aversion; an abhorrence.",
//                           "synonyms":[],"antonyms":[]},
//                       {"definition":"A genre of fiction designed to evoke a feeling of fear and suspense.",
//                           "synonyms":[],"antonyms":[]},
//                       {"definition":"An individual work in this genre.",
//                           "synonyms":[],"antonyms":[]},
//                       {"definition":"A nasty or ill-behaved person; a rascal or terror.",
//                           "synonyms":[],"antonyms":[],"example":"The neighbour's kids are a pack of little horrors!"},
//                       {"definition":"An intense anxiety or a nervous depression; often the horrors.",
//                           "synonyms":[],"antonyms":[]},
//                       {"definition":"(plural) Delirium tremens.",
//                           "synonyms":[],"antonyms":[]}
//                   ],
//                       "synonyms":["nightmare"],"antonyms":[]
//                  }
//                ],
//         "license":{"name":"CC BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"},
//         "sourceUrls":["https://en.wiktionary.org/wiki/horror"]
//     }
// ]