/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
   address: "localhost",    // Address to listen on, can be:
                     // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                     // - another specific IPv4/6 to listen on a specific interface
                     // - "0.0.0.0", "::" to listen on any interface
                     // Default, when address config is left out or empty, is "localhost"
   port: 8080,
   basePath: "/",    // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
               // you must set the sub path here. basePath must end with a /
   ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],    // Set [] to allow all IP addresses
                                             // or add a specific IPv4 of 192.168.1.5 :
                                             // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                             // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                             // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

   useHttps: false,       // Support HTTPS or not, default "false" will use HTTP
   httpsPrivateKey: "",    // HTTPS private key path, only require when useHttps is true
   httpsCertificate: "",    // HTTPS Certificate path, only require when useHttps is true

   
        language: "ko",
   logLevel: ["INFO", "LOG", "WARN", "ERROR"],
   timeFormat: 24,
   units: "metric",
   // serverOnly:  true/false/"local" ,
   // local for armv6l processors, default
   //   starts serveronly and then starts chrome browser
   // false, default for all NON-armv6l devices
   // true, force serveronly mode, because you want to.. no UI on this device

   modules: [
    {
      module: "alert",
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "top_left",
      config: {
        dateFormat: "LL dddd",
      }
    },

    {
       module: 'calendar_monthly',
       position: 'top_left',
       config: {
               }
     },
   /*
    {
      module: "calendar",
      position: "top_left",
      config: {
        urgency: 21,
        fetchInterval: 3600000,
        calendars: [{
          url: 'https://calendar.google.com/calendar/ical/ko.south_korea%23holiday%40group.v.calendar.google.com/public/basic.ics',
          symbol: '대한민국 공휴일',
        }]
      }
    },
     */
  
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "Cheonan, KR", //https://openweathermap.org/ 에서 지역을 찾으세요.
        locationID: "",
        appid: "8b639f9aa93b80c4d661f1bd7d931c3e" //openweathermap.org의 API key를 입력하세요.
      }
    },

    {
      module: "weatherforecast",
      position: "top_right",
      config: {
        location: "Cheonan, KR", //https://openweathermap.org/ 에서 지역을 찾으세요.
        locationID: "",
        appid: "8b639f9aa93b80c4d661f1bd7d931c3e" //openweathermap.org의 API key를 입력하세요.
      }
    },

{
  module: "MMM-Face-Recognition-SMAI",
  position: "top_center",
  config: {
  prompt: "Put in your own text"
  }
},

/*
    {
      module: "compliments",
      position: "lower_third",
      config: {
        compliments: {
          anytime: [ //아무때나
            "오늘도 좋은 하루!"
          ],
          morning: [ //아침
            "좋은 아침!",
            "힘찬 아침!",
            "잘 잤나요?"
          ],
          afternoon: [ //오후
            "안녕하세요!",
            "멋져요!",
            "잘 지내고 있나요!"
          ],
          evening: [ //저녁
            "와우! 잘 지냈나요?",
            "멋져보이네요!",
            "반가워요!"
          ],
          day_sunny: [//맑은 낮

          ],
          day_cloudy: [//흐린 낮

          ],
          cloudy: [//흐림

          ],
          cloudy_windy: [//흐리고 바람

          ],
          showers: [//소나기

          ],
          rain: [//비

          ],
          thunderstorm: [//천둥번개

          ],
          snow: [//눈

          ],
          fog: [//안개

          ],
          night_clear: [//맑은 밤

          ],
          night_cloudy: [//흐린 밤

          ],
          night_showers: [//소나기

          ],
          night_rain: [//비오는 밤

          ],
          night_thunderstorm: [//천둥번개 밤

          ],
          night_snow: [//눈오는 밤

          ],
          night_alt_cloudy_windy: [//흐리고 바람부는 밤

          ],
        }
      }
    },
    */    
               {
         module: "newsfeed",
         position: "bottom_bar",
         config: {
            feeds: [
               {
                  title: "JTBC 속보",
                  url: "http://fs.jtbc.joins.com//RSS/newsflash.xml"
               }
            ],
            showSourceTitle: true,
            showPublishDate: true,
            broadcastNewsFeeds: true,
            broadcastNewsUpdates: true
         }
      },
                 
               
       {
                  module: 'MMM-SmartTouch',
    position: 'bottom_center',    // This can be any of the regions.(bottom-center Recommended)
    config: {
        // The config property is optional.
         }
       }, 
       
  

{
  module: "MMM-Assistant2Display",
  position: "top_left",
  config: {
    debug:false,
    useYoutube: true,
    links: {
      useLinks: false,
      displayDelay: 60 * 1000,
      scrollStep: 25,
      scrollInterval: 1000,
      scrollStart: 5000,
      scrollActivate: false,
      verbose: false
    },
    photos: {
      usePhotos: false,
      displayDelay: 10 * 1000
    },
    volume: {
      useVolume: false,
      volumePreset: "ALSA",
      myScript: null
    },
    briefToday: {
      useBriefToday: false,
      welcome: "brief Today"
    },
    screen: {
      useScreen: true,
      delay: 10 * 60 * 1000,
      turnOffDisplay: true,
      mode: 1,
      ecoMode: true,
      displayCounter: true,
      displayBar: false,
      displayStyle: "Text",
      text: "Auto Turn Off Screen:",
      detectorSleeping: false,
      governorSleeping: false,
      displayLastPresence: true,
      LastPresenceText: "Last Presence:",
    },
    pir: {
      usePir: false,
      gpio: 21,
      reverseValue: false
    },
    governor: {
      useGovernor: false,
      sleeping: "powersave",
      working: "ondemand"
    },
    internet: {
      useInternet: false,
      displayPing: false,
      delay: 2* 60 * 1000,
      scan: "google.fr",
      command: "pm2 restart 0",
      showAlert: true
    },
    cast: {
      useCast: false,
      castName: "MagicMirror_A2D",
      port: 8569
    },
    spotify: {
      useSpotify: true,
      useIntegred: true,
      useLibrespot: true,
      connectTo: null,
      playDelay: 3000,
      minVolume: 10,
      maxVolume: 100,
      updateInterval: 1000,
      idleInterval: 10000,
      username: "mulinyuvirus@gmail.com",
      password: "kant@0329ss",
      CLIENT_ID: "",
      CLIENT_SECRET: "",
      deviceDisplay: "Listening on",
      usePause: true,
      typeArtist: "artist",
      typePlaylist: "playlist",
      typeAlbum: "album",
      typeTrack: "track"
    },
    NPMCheck: {
      useChecker: false,
      delay: 10 * 60 * 1000,
      useAlert: true
    }
  }
},

{      
  module: "MMM-GoogleAssistant",
  position: "fullscreen_above",
  config: {
    debug: false,
    assistantConfig: {
      lang: "ko-KR",
      projectId: "", // Required to use gaction.
      modelId: "", // (OPTIONAL for gaction)
      instanceId: "", // (OPTIONAL for gaction)
      latitude: 51.508530,
      longitude: -0.076132,
    },
    responseConfig: {
      useScreenOutput: true,
      screenOutputCSS: "screen_output.css",
      screenOutputTimer: 5000,
      screenRotate: false,
      activateDelay: 250,
      useAudioOutput: true,
      useChime: true,
      newChime: false,
      useNative: false,
      playProgram: "mpg321"
    },
    micConfig: { // put there configuration generated by auto-installer
      recorder: "arecord",
      device: "plughw:2",
    },
    customActionConfig: {
      autoMakeAction: false,
      autoUpdateAction: false, // in RPI, gaction CLI might have some trouble.(current version should be 2.2.4, but for linux-arm, Google haven't updated) so leave this as false in RPI. I don't know it is solved or not.
      actionLocale: "en-US", // At this moment, multi-languages are not supported, sorry. Someday I'll work.
    },
    snowboy: {
      usePMDL: false,
      audioGain: 2.0,
      Frontend: true,
      Model: "jarvis",
      Sensitivity: null
    },
    A2DServer: {
      useA2D: true,
      stopCommand: "stop",
      useYouTube: false,
      displayResponse: true
    },
    recipes: [ "with-MMM-TelegramBot.js" ],
    NPMCheck: {
      useChecker: true,
      delay: 10 * 60 * 1000,
      useAlert: true
    }
  }
},

       /*  {
         module: 'MMM-Screencast',
         position: 'middle_third', // This position is for a hidden <div /> and not the screencast window
         config: {
            position: 'middleThird',
            height: 600,
            width: 1000,
         }
        },*/
{
         disabled: false,
         module: "MMM-covid19",
         position: "lower_third",
        config: {
        updateInterval: 1 * 60 * 60 *1000, // 1 hour
        countryCodes: ["KR", "JP", "US"],
        live: true,
        world: false
    }
}

   ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}