import './BlackHole.css'

function BlackHole({ className }) {
    return (
        <div className={`${className}`}>
            <div className="blur-[100px] absolute flex items-center justify-center w-full h-full">
                <div className="blackhole-glow w-[100px] aspect-square bg-gradient-to-r from-indigo-300 to-[#FFE97F]  
                    rounded-full animate-slow-spin bg-[#FFE97F]"></div>
            </div>
            <div className="w-full h-full absolute grid place-content-center">
                {/* <svg className={`blackhole-svg w-[300px] md:w-[400px] aspect-square  z-10`}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                    <ellipse rx="71.951271" ry="71.951271" transform="matrix(.994517 0 0 0.994517 150.287344 150)" fill="#ffe97f" strokeWidth="0" />
                    <ellipse rx="71.951271" ry="71.951271" transform="matrix(.781818 0 0 0.781818 150.287344 149.509975)" fill="#18181B" strokeWidth="0" />
                    <ellipse 
                        className="blackhole-inner-spin"
                        rx="71.951271" ry="71.951271" transform="matrix(.65 0 0 0.65 150.287344 149.509975)" fill="rgba(41,41,41,0)" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="bevel" strokeDashoffset="9.866667" strokeDasharray="40,200" />
                    <ellipse rx="78.33269" ry="6.78595" transform="matrix(1.470719 0 0 0.914821 150 149.509975)" fill="#ffe97f" stroke="rgba(255,233,127,0)" />
                    <path d="M86.923521,143.33462c0,0-40.222686.536688-48.303581.536688c8.719232-1.240378,34.645454-3.072894,41.8173-26.927984-9.016456,22.449136,6.486281,26.391296,6.486281,26.391296Z" transform="translate(6.602306 5.638667)" fill="#ffe97f" stroke="#ffe97f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M86.923521,143.33462c0,0-40.222686.536688-48.303581.536688c8.719232-1.240378,34.645454-3.072894,41.8173-26.927984-9.016456,22.449136,6.486281,26.391296,6.486281,26.391296Z" transform="matrix(-1 0 0 1 294.236599 5.638667)" fill="#ffe97f" stroke="#ffe97f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg> */}

                
                <svg
                    className="blackhole-svg w-[300px] md:w-[400px] aspect-square  z-10"
                    xmlns="http://www.w3.org/2000/svg"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    viewBox="0 0 300 300"
                    >
                    <ellipse
                        fill="#fff"
                        strokeWidth="0"
                        rx="71.951"
                        ry="71.951"
                        transform="matrix(.8562 0 0 .8562 143.335 143.825)"
                    ></ellipse>
                    <ellipse
                        fill="#292929"
                        strokeWidth="0"
                        rx="71.951"
                        ry="71.951"
                        transform="matrix(.78182 0 0 .78182 143.335 143.335)"
                    ></ellipse>
                    <ellipse
                        className='blackhole-inner-spin'
                        fill="rgba(41,41,41,0)"
                        stroke="#fff"
                        strokeDasharray="40,200"
                        strokeDashoffset="9.867"
                        strokeLinecap="round"
                        strokeLinejoin="bevel"
                        strokeWidth="2"
                        rx="71.951"
                        ry="71.951"
                        transform="matrix(.711 0 0 .711 143.335 143.335)"
                    ></ellipse>
                    <ellipse
                        fill="#fff"
                        stroke="rgba(255,233,127,0)"
                        rx="78.333"
                        ry="6.786"
                        transform="matrix(1.09924 0 0 .26029 143.047 143.335)"
                    ></ellipse>
                    <path
                        fill="#fff"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M86.924 143.335s-18.982-.49-27.062-.49c8.719-1.24 20.096 3.42 27.268-20.435-9.016 22.449-.206 20.925-.206 20.925z"
                        transform="translate(-.651 .49)"
                    ></path>
                    <path
                        fill="#fff"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M86.924 143.335s-18.982-.49-27.062-.49c8.719-1.24 20.365 4.417 27.537-19.438-9.017 22.449-.475 19.928-.475 19.928z"
                        transform="matrix(-1 0 0 1 287.586 .49)"
                    ></path>
                </svg>
            </div>
        </div>
    )
}

export default BlackHole