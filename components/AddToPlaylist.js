import { useState } from 'react'
import SearchBar from './Searchbar';
import { youtube, KEY } from '../apis/youtube';
import YouTubeVideoItem from './YouTubeVideoItem';

const AddToPlaylist = () => {

  const [videos, setVideos] = useState([
    {
      "kind": "youtube#searchResult",
      "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/sSow2uIECGvBpRozbPdBujeZnw4\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "tcAYpAZ1JT8"
      },
      "snippet": {
        "publishedAt": "2015-03-23T00:00:00.000Z",
        "channelId": "UCyocfo5Ew-bCZLrqb90EV2w",
        "title": "Frameworks - Tides",
        "description": "Download & Stream: http://kud.li/fw131 Subscribe: http://sb.kud.li/UCyocfo5Ew-bCZLrqb90EV2w Official stream from First Word Records. Distributed by Kudos ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/tcAYpAZ1JT8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/tcAYpAZ1JT8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/tcAYpAZ1JT8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FRAMEWORKS",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/C7EvTeRKfPmjVpoFZqT2H2d8__w\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "zebZkOZjC9o"
      },
      "snippet": {
        "publishedAt": "2015-03-23T00:00:00.000Z",
        "channelId": "UCyocfo5Ew-bCZLrqb90EV2w",
        "title": "Frameworks - Dawn (feat. Ríoghnach Connolly)",
        "description": "Download & Stream: http://kud.li/fw131 Subscribe: http://sb.kud.li/UCyocfo5Ew-bCZLrqb90EV2w Official stream from First Word Records. Distributed by Kudos ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/zebZkOZjC9o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/zebZkOZjC9o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/zebZkOZjC9o/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FRAMEWORKS",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/_FhO62S6lT2dT0BUomP5IVcAkNM\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "0kIw9QgbFxw"
      },
      "snippet": {
        "publishedAt": "2015-10-17T17:30:38.000Z",
        "channelId": "UCOMeX36wYDMzQJ3NfOK4QfQ",
        "title": "Frameworks  - Carry On (2015)",
        "description": "Its a great year for fans, thanks to awesome releases from Loci Records! Downtempo producer from UK Matthew \"Frameworks\" Brewer's of \"Tides\" fame is set to ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/0kIw9QgbFxw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/0kIw9QgbFxw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/0kIw9QgbFxw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Sachin Baliga",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/c8DVTS-dtildbolm34RvoElMGx8\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "7FJxSpQzOAY"
      },
      "snippet": {
        "publishedAt": "2015-03-16T17:44:36.000Z",
        "channelId": "UCHJCZ2QUD-WAJTGikMs9B4Q",
        "title": "Frameworks - A New Sun (Official Video)",
        "description": "Coming Soon ; Tides (23 March 2015) https://frameworksuk.bandcamp.com/album/tides Frameworks : https://www.facebook.com/Frameworksmusicuk FIrst Word ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/7FJxSpQzOAY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/7FJxSpQzOAY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/7FJxSpQzOAY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "DLoaw",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/lqRbRitQtmJ7bsRGvPSI_U_GxkM\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "lwQwLFWQbE4"
      },
      "snippet": {
        "publishedAt": "2019-08-28T16:30:02.000Z",
        "channelId": "UCZ9P6qKZRbBOSaKYPjokp0Q",
        "title": "Frameworks • Live Set • Le Mellotron",
        "description": "Follow our 24/7 live stream here: https://www.youtube.com/c/Lemellotron/live ➫ Support us, subscribe for more › http://bit.ly/2kX0Jo1 Oldies but goodies! Voici un ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/lwQwLFWQbE4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/lwQwLFWQbE4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/lwQwLFWQbE4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Le Mellotron",
        "liveBroadcastContent": "none"
      }
    }
  ]);

  const searchVideoHandler = async (searchInput) => {

  const res = await youtube.get('/search', {
      params: {
        type: 'video',
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        q: searchInput
      }
    })

    const videoList = res.data.items;

    setVideos(videoList);
    console.log(videos)
  }


  return (
    <section id="addToPlaylist">
      <div id="header">
        <h2>Add To Playlist</h2>
        <SearchBar placeholder='Search for music' mode="video" submitHandler={searchVideoHandler}/>
      </div>

      {videos.map(video => {
        return (
          <YouTubeVideoItem video={video} key={video.id.videoId}/>
        )
      })}

  <style jsx>{`

    section {
      margin-top: 3rem;
      padding: 3rem;
      border: 1px solid white;
      border-radius: 10px; 
    }
  
    #header {
      display: flex;
      margin: 2rem 0;
    }
  
  `}</style>



    </section>
  )
}

export default AddToPlaylist;