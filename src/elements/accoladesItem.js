import React from 'react';


const AccoladesItem = (props) => {

    const { 
        desktopLogoImage,
        mobileLogoImage,
        logoAlt,
        headline,
        description
    } = props;

    
    return(
        <>
            <section>
                <div class="m-panes-product-placement-item">
                    <div>
                        {
                            desktopLogoImage &&
                                <picture class="high-contrast-svg-white metacriticLogo">
                                    <source srcset={desktopLogoImage} media="(min-width:1400px)" />
                                    <source srcset={mobileLogoImage} media="(min-width:0)" />
                                    <img srcset={desktopLogoImage} src={desktopLogoImage} alt={logoAlt} />
                                </picture>
                        }
                        
                        <p class="c-heading white-c zpt">{headline}</p>
                        <p class="c-paragraph white-c">{description}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AccoladesItem;