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

                
                <svg className={`blackhole-svg w-[300px] md:w-[400px] aspect-square  z-10`} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="eyxV0fk5wBN1" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                    <ellipse rx="71.9513" ry="71.9513" transform="matrix(.856194 0 0 0.856194 143.335 143.825)" fill="#ffe97f" stroke-width="0" />
                    <ellipse rx="71.9513" ry="71.9513" transform="matrix(.781818 0 0 0.781818 143.335 143.335)" fill="#292929" stroke-width="0" />
                    <ellipse 
                        className="blackhole-inner-spin"
                        rx="71.9513" ry="71.9513" transform="matrix(.711008 0 0 0.711008 143.335 143.335)" fill="rgba(41,41,41,0)" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" stroke-dashoffset="9.86667" stroke-dasharray="40,200" />
                    <ellipse rx="78.3327" ry="6.78595" transform="matrix(1.099243 0 0 0.260289 143.047 143.335)" fill="#ffe97f" stroke="rgba(255,233,127,0)" />
                    <path d="M86.923521,143.33462c0,0-18.981106-.49-27.062001-.49c8.719232-1.240378,20.096839,3.42028,27.268685-20.43481-9.016456,22.449136-.206684,20.92481-.206684,20.92481Z" transform="translate(-.651404 0.490375)" fill="#ffe97f" stroke="#ffe97f" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M86.923521,143.33462c0,0-18.981106-.49-27.062001-.49c8.719232-1.240378,20.365529,4.417354,27.537375-19.437736-9.016456,22.449136-.475374,19.927736-.475374,19.927736Z" transform="matrix(-1 0 0 1 287.586213 0.49038)" fill="#ffe97f" stroke="#ffe97f" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="" fill="none" stroke="#3f5787" stroke-width="0.6" />
                </svg>
            </div>
        </div>
    )
}

export default BlackHole