import React from 'react';

const Hero = (props) => {
    const {
        title,
        availableDate, 
        xgpHeadline, 
        xgpCTA, 
        copyCardClass, 
        opacity, 
        theme, 
        heroType, 
        desktopImage, 
        mobileImage, 
        heroImageAlt, 
        mainCTA, 
        mainCTALink, 
        mainCTAria
    } = props
    
    return(
        <React.Fragment>
            <section id="hero-10" className={`m-hero-item glp-hero ${heroType} ${theme} f-transparent f-precise-click ${copyCardClass}`} data-opacity={`${opacity}`} data-theme={`${theme}`} data-index="10" data-name="Right - Dark" itemscope>
                <picture>
                    <source srcset={desktopImage} media="(min-width:1084px)" />
                    <source srcset={mobileImage} media="(min-width:0)" />
                    <img srcset="" src={desktopImage} alt={heroImageAlt} />
                </picture>
                <div>
                        <div className="high-contrast opacity75">
                            <h1 className="c-heading-2 heroPad48 heroTitle high-contrast">{title}</h1>
                            <div className="heroPad48 heroAvailableDate">
                                <p className="c-heading-4">{availableDate}</p>
                            </div>
                            <div className="heroPad48 heroCTA">
                                <a href={mainCTALink} className="c-call-to-action c-glyph" aria-label={mainCTAria}>
                                    <span>{mainCTA}</span>
                                </a>
                                
                            </div>
                
                            <div className="heroPad48 heroXGP" id="heroGamePassSection">
                                <div className="heroLogos">
                                <picture className="xboxGamePassLogo">
                                    <source srcset="https://compass-ssl.xbox.com/assets/e7/b4/e7b4e2b6-ba22-4d3a-9b63-a43fef58bb80.svg?n=XGP-Cross-sell_Page-Hero_logo_279x48.svg" media="(min-width:0)" />
                                    <img className="c-image high-contrast-svg-white" src="https://compass-ssl.xbox.com/assets/e7/b4/e7b4e2b6-ba22-4d3a-9b63-a43fef58bb80.svg?n=XGP-Cross-sell_Page-Hero_logo_279x48.svg" alt="Xbox Game Pass logo" />
                                </picture> 
                            </div>
                                <p className="c-heading-4 high-contrast">{xgpHeadline}</p>
                                <a href="https://www.xbox.com/xbox-game-pass#join" className="c-call-to-action c-glyph f-lightweight lime-green-c" data-cta="learn" aria-label="Join now, learn more about joining xbox game pass">
                                    <span>{xgpCTA}</span>
                                </a>
                            </div>
                        
                        
                            <div className="heroPad48 heroLogos">
                                <a href="#optimized" className="" data-cta="learn" aria-label="">
                                    <img className="c-image high-contrast-svg-black xboxOneXBadgeLogo" src="https://compass-ssl.xbox.com/assets/66/00/66003bf9-05c2-41e7-946f-885180e4d85c.svg?n=GLP-2020_Feature-0_X-Badge_205x97.svg" alt="Optimized for Series X|S logo, Jump to the optimized for Xbox Series X|S section" />
                                </a>
                            </div>
                            <div className="pad48"></div>
                        </div>
                    </div>
            </section>
        </React.Fragment>
    )
}

export default Hero;