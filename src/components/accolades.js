
import React from 'react';
import AccoladeItem from '../elements/accoladesItem';

const Accolades = () => {


    const renderAccolades = () => {
        return(
            <React.Fragment>
                <AccoladeItem 
                    containsLogo
                    headline="98/100“…an exhilarating, emotional masterpiece”"
                    description="— GAMESBEAT"
                    
                />
                <AccoladeItem 
                    containsLogo
                    headline="90"
                    description="— Metacritic"
                    desktopLogoImage='https://compass-ssl.xbox.com/assets/92/9b/929b7be4-c4b7-46e6-9c93-1f9f4410a47d.jpg?n=OWotW_Panes-3-up-1400_Metacritic-Must-Play_570x121.jpg'
                    mobileLogoImage='https://compass-ssl.xbox.com/assets/0a/42/0a42c3e2-df12-4fa3-9549-7abef84a3629.jpg?n=OWotW_Panes-3-Up-0_Metacritic-Must-Play_347x121.jpg'
                    logoAlt='Metacritic logo: Must-play'
                />
                <AccoladeItem 
                    containsLogo
                    headline="9.5/10 “The story is fantastic, the world is breathtaking…”"
                    description="— GAMEINFORMER"
                   
                />
            </React.Fragment>
        )
    }


    return(
        <>
            <section data-grid="container">
                <div class="m-panes" data-grid="col-12" role="region" aria-label="Accolades">
                    {renderAccolades()}
                </div>
            </section>
            <div class="pad48"></div>
            <div class="static48"></div>
        </>
    )
}

export default Accolades;