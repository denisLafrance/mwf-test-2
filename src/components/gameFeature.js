import React from 'react';

const GameFeature = (props) => {

    const {title, featureType, imgSrc, imgAlt, headline, description} = props

    return(
        <>
            {
                title &&
                <div id="featuresections" class="" data-grid="container">
                    <h2 class="c-heading-3 white-c x-type-center">{title}</h2>
                </div>
            }
            
            <section class={`m-feature ${featureType} f-image-priority full-width t-margin48`}>
                <picture>
                    <source srcset={imgSrc} media="(min-width:0)" />
                    <img srcset="" src={imgSrc} alt={imgAlt} />
                </picture>
                <div class="textscoot">
                    <h3 class="c-heading-3">{headline}</h3>
                    <p class="c-paragraph-1">{description}</p>
                </div>
            </section>
        </>
    )
}

export default GameFeature;