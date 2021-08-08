const Preloader = () => {
    return (
        <div id="preloader">
            <div className="outer">
                <div className="infinityChrome">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="infinity">
                    <div>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo-outer">
                    <defs>
                        <filter id="goo">
                            <fegaussianblur in="SourceGraphic" stddeviation="6" result="blur"></fegaussianblur>
                            <fecolormatrix
                                in="blur"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                result="goo"
                            ></fecolormatrix>
                            <feblend in="SourceGraphic" in2="goo"></feblend>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default Preloader;
