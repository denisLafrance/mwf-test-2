import React from 'react';

const Banner = (props) => {
    const { title, description, theme } = props
    return(
        <React.Fragment className="tagLine">
            <div data-grid="col-12" class={`${theme} tagLine m-banner jumpgcontainer`}>
                <h2 class="c-heading-1 zpt"><span>{title}</span></h2>
                <span class="jump-g jumpganimate"></span>
                <p class="c-paragraph-1">{description}</p>
            </div>
        </React.Fragment>
    )
}

export default Banner;