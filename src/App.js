import React from 'react';

//imported components
import Hero from './components/hero';
import Platforms from './components/platforms';
import Accolades from './components/accolades';
import Banner from './components/banner';
import GameFeature from './components/gameFeature'

// imported css
import './App.css'

const App = () => {
  return(
    <>
    {/* HERO COMPONENT */}
      <Hero 
        heroType ='f-x-right f-y-center'
        copyCardClass='mobile-440'
        opacity='opacity75'
        theme='theme-black'
        desktopImage='https://compass-ssl.xbox.com/assets/16/71/1671d5e9-1d59-4bd1-a8b9-42e6a228433d.jpg?n=GLP-2020_Hero-1084_Doom-Eternal_1920x1080.jpg'
        mobileImage='https://compass-ssl.xbox.com/assets/9b/6a/9b6acc97-58ea-4a6c-b217-a02bf43849e8.jpg?n=GLP-2020_Hero-0_Doom-Eternal_1083x609.jpg'
        heroImageAlt="this is a damn fine alt tag"
        title='DOOM Eternal'
        availableDate='Available March 20, 2020'
        mainCTA = 'GET IT NOW'
        mainCTALink ='#purchaseoptions'
        mainCTAria='Pre-order now, jump to purchase section'
        xgpHeadline="Coming day one to Xbox Game Pass"
        xgpCTA = 'JOIN NOW'
      />
     

      {/* PLATFORMS COMPONENT */}
      <Platforms 
        theme='theme-black'
        title="Platforms:"
      />
     

      {/* ACCOLADES COMPONENT */}
      <Accolades />

       {/* BANNER COMPONENT */}
       <Banner 
          title='RAZE HELL'
          description='Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.'
          theme='theme-black'

       />

       {/* GAME FEATURE COMPONENT */}
       <GameFeature 
          title='Game features'
          featureType='f-align-left'
          imgSrc='https://compass-ssl.xbox.com/assets/9b/41/9b4109cf-e23b-40da-9a33-99340a22d1a6.jpg?n=GLP-2020_Feature-Full-Width-0_Doom-Eternal-1_1248x702.jpg'
          imgAlt="alt description"
          headline='Slayer threat level at maximum'
          description='Gain access to the latest demon-killing tech with the DOOM Slayer’s advanced Praetor Suit, including a shoulder-mounted flamethrower and the retractable wrist-mounted DOOM Blade.'
       />

       <GameFeature 
          featureType='f-align-right'
          imgSrc='https://compass-ssl.xbox.com/assets/9b/41/9b4109cf-e23b-40da-9a33-99340a22d1a6.jpg?n=GLP-2020_Feature-Full-Width-0_Doom-Eternal-1_1248x702.jpg'
          imgAlt="alt description"
          headline='Slayer threat level at maximum'
          description='Gain access to the latest demon-killing tech with the DOOM Slayer’s advanced Praetor Suit, including a shoulder-mounted flamethrower and the retractable wrist-mounted DOOM Blade.'
       />
       <GameFeature 
          featureType='f-align-left'
          imgSrc='https://compass-ssl.xbox.com/assets/9b/41/9b4109cf-e23b-40da-9a33-99340a22d1a6.jpg?n=GLP-2020_Feature-Full-Width-0_Doom-Eternal-1_1248x702.jpg'
          imgAlt="alt description"
          headline='Slayer threat level at maximum'
          description='Gain access to the latest demon-killing tech with the DOOM Slayer’s advanced Praetor Suit, including a shoulder-mounted flamethrower and the retractable wrist-mounted DOOM Blade.'
       />
       <GameFeature 
          featureType='f-align-right'
          imgSrc='https://compass-ssl.xbox.com/assets/9b/41/9b4109cf-e23b-40da-9a33-99340a22d1a6.jpg?n=GLP-2020_Feature-Full-Width-0_Doom-Eternal-1_1248x702.jpg'
          imgAlt="alt description"
          headline='Slayer threat level at maximum'
          description='Gain access to the latest demon-killing tech with the DOOM Slayer’s advanced Praetor Suit, including a shoulder-mounted flamethrower and the retractable wrist-mounted DOOM Blade.'
       />
     
    </>
  )
}

export default App;
