
import React from 'react';
import { AppLayout, HeaderLayout, ContentLayout, FooterLayout } from './styled';
import Header from '../Header';
import Footer from '../Footer';
import GridWords from '../GridWords';


const App = () => {
  const dailyWords = {
    "date": "26072020",
    "words": [
      {
        "word": "delft",
        "results": [
          {
            "definition": "a style of glazed earthenware; usually white with blue decoration",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": "dɛlft"
        },
        "frequency": 2.36
      },
      {
        "word": "acoustics",
        "results": [
          {
            "definition": "the study of the physical properties of sound",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": "ə'kustɪks"
        },
        "frequency": 2.73
      },
      {
        "word": "follicle",
        "results": [
          {
            "definition": "any small spherical group of cells containing a cavity",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": "'fɑləkəl"
        },
        "frequency": 2.08
      },
      {
        "word": "posit",
        "results": [
          {
            "definition": "put (something somewhere) firmly",
            "partOfSpeech": "verb",
            "examples": [
              "She posited her hand on his shoulder",
              "deposit the suitcase on the bench"
            ]
          },
          {
            "definition": "(logic) a proposition that is accepted as true in order to provide a basis for logical reasoning",
            "partOfSpeech": "noun"
          },
          {
            "definition": "take as a given; assume as a postulate or axiom",
            "partOfSpeech": "verb",
            "examples": [
              "He posited three basic laws of nature"
            ]
          },
          {
            "definition": "put before",
            "partOfSpeech": "verb"
          }
        ],
        "pronunciation": {
          "all": "'pɑzɪt"
        },
        "frequency": 2.03
      },
      {
        "word": "clomp",
        "results": [
          {
            "definition": "walk clumsily",
            "partOfSpeech": "verb"
          }
        ],
        "pronunciation": {
          "all": "klɑmp"
        },
        "frequency": 1.9
      },
      {
        "word": "gerontology",
        "results": [
          {
            "definition": "the branch of medical science that deals with diseases and problems specific to old people",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": ",dʒɛrən'tɑlədʒi"
        },
        "frequency": 1.6
      },
      {
        "word": "klamath",
        "results": [
          {
            "definition": "a river flowing southwest from Oregon through northern California to the Pacific Ocean",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": "'klæmʊθ"
        },
        "frequency": 1.97
      },
      {
        "word": "evacuate",
        "results": [
          {
            "definition": "excrete or discharge from the body",
            "partOfSpeech": "verb"
          },
          {
            "definition": "create a vacuum in (a bulb, flask, reaction vessel)",
            "partOfSpeech": "verb"
          },
          {
            "definition": "empty completely",
            "partOfSpeech": "verb",
            "examples": [
              "evacuate the bottle"
            ]
          },
          {
            "definition": "move out of an unsafe location into safety",
            "partOfSpeech": "verb",
            "examples": [
              "After the earthquake, residents were evacuated"
            ]
          },
          {
            "definition": "move people from their homes or country",
            "partOfSpeech": "verb"
          }
        ],
        "pronunciation": {
          "all": "ɪ'vækju,eɪt"
        },
        "frequency": 3.78
      },
      {
        "word": "tetherball",
        "results": [
          {
            "definition": "a game with two players who use rackets to strike a ball that is tethered to the top of a pole; the object is to wrap the string around the pole",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": "'tɛðər,bɔl"
        },
        "frequency": 1.82
      },
      {
        "word": "tsar",
        "results": [
          {
            "definition": "a male monarch or emperor (especially of Russia prior to 1917)",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": "zɑr"
        },
        "frequency": 3.33
      },
      {
        "word": "classmate",
        "results": [
          {
            "definition": "an acquaintance that you go to school with",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": "'klæs,meɪt"
        },
        "frequency": 3.65
      },
      {
        "word": "kyphosis",
        "results": [
          {
            "definition": "an abnormal backward curve to the vertebral column",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": "kaɪ'foʊsɪs"
        },
        "frequency": 1.74
      },
      {
        "word": "hardback",
        "results": [
          {
            "definition": "having a hard back or cover",
            "partOfSpeech": "adjective",
            "examples": [
              "hardback books"
            ]
          },
          {
            "definition": "a book with cardboard or cloth or leather covers",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": "'hɑdbæk"
        },
        "frequency": 1.73
      },
      {
        "word": "unstring",
        "results": [
          {
            "definition": "remove the strings from",
            "partOfSpeech": "verb",
            "examples": [
              "unstring my guitar"
            ]
          }
        ],
        "pronunciation": {
          "all": "ən'strɪŋ"
        },
        "frequency": 1.74
      },
      {
        "word": "eavesdrop",
        "results": [
          {
            "definition": "listen without the speaker's knowledge",
            "partOfSpeech": "verb",
            "examples": [
              "the jealous man was eavesdropping on his wife's conversations"
            ]
          }
        ],
        "pronunciation": {
          "all": "'ivz,drɑp"
        },
        "frequency": 2.81
      },
      {
        "word": "cliff",
        "results": [
          {
            "definition": "a steep high face of rock",
            "partOfSpeech": "noun",
            "examples": [
              "he stood on a high cliff overlooking the town"
            ]
          }
        ],
        "pronunciation": {
          "all": "klɪf"
        },
        "frequency": 4.11
      },
      {
        "word": "gibberish",
        "results": [
          {
            "definition": "unintelligible talking",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": "'dʒɪbərɪʃ"
        },
        "frequency": 3.33
      },
      {
        "word": "slashing",
        "results": [
          {
            "definition": "as if striking with slashing blows",
            "partOfSpeech": "adjective",
            "examples": [
              "his slashing demon-ridden cadenza"
            ]
          }
        ],
        "pronunciation": {
          "all": "'slæʃɪŋ"
        },
        "frequency": 2.82
      },
      {
        "word": "debussy",
        "results": [
          {
            "definition": "French composer who is said to have created Impressionism in music (1862-1918)",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": ",dɛbjʊ,si"
        },
        "frequency": 2.47
      },
      {
        "word": "lewiston",
        "results": [
          {
            "definition": "a town in northwestern Idaho",
            "partOfSpeech": "noun"
          },
          {
            "definition": "a town in southwestern Maine to the north of Portland",
            "partOfSpeech": "noun"
          }
        ],
        "pronunciation": {
          "all": "'luɪstən"
        },
        "frequency": 2.77
      }
    ]
  };
  return (
    <AppLayout>
      <HeaderLayout >
        <Header nextUpdate={23433} />
      </HeaderLayout>
      <ContentLayout>
        <GridWords dailyWords={dailyWords} />
      </ContentLayout>
      <FooterLayout>
        <Footer />
      </FooterLayout>
    </AppLayout>
  );
}



export default App;
