
import React from 'react';

const Platforms = (props) => {
    const { theme, title } = props;
    return(
        <React.Fragment>
            <div className={theme} data-grid="container"></div>
                <div data-grid="col-12" className="m-banner theme-black">
                    <div className="heroPlatforms">
                        <p className="c-subheading-4"><strong>{title}</strong></p>
                        <p className="c-heading-4 zpt">Xbox&nbsp;Series&nbsp;X|S <span className="platformCircle"> ● </span>Xbox&nbsp;One<br className="hideBreak desktop-show" /><span className="platformCircle"> ● </span>Windows&nbsp;10&nbsp;PCs</p>
                    </div>
                </div>
            <div className="static48"></div>
        </React.Fragment>
    )
}

export default Platforms;