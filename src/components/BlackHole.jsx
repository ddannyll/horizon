import './BlackHole.css'

function BlackHole({className}) {
    return (
        <div className={`${className}`}>
            <div className="w-sceen h-screen blur-[100px] flex items-center justify-center">
                <div className="blackhole-glow w-[150px] aspect-square bg-gradient-to-r from-indigo-300 to-[#FFE97F]  
                    rounded-full animate-slow-spin bg-[#FFE97F]"></div>
            </div>
            <svg className={`blackhole-svg w-[400px] aspect-square absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 z-10`}
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
            </svg>

        </div>
    )
}

export default BlackHole