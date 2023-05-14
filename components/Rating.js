export default function Rating({size, score, big, bigg, up, mode}) {
   console.log(up, mode)
   return (
      <div className={`flex space-x-2 ${ !up && 'items-center'}`}>
         <svg width={size} height={size} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.84818 1.13274C6.19526 0.326779 7.338 0.326778 7.68509 1.13274L8.72255 3.54183C8.86732 3.87801 9.18419 4.10823 9.54865 4.14203L12.1604 4.38427C13.0342 4.46531 13.3873 5.55212 12.7281 6.13127L10.7575 7.86241C10.4825 8.10398 10.3615 8.47648 10.4419 8.83355L11.0186 11.3924C11.2116 12.2484 10.2871 12.9201 9.53255 12.4721L7.27719 11.1329C6.96247 10.946 6.5708 10.946 6.25607 11.1329L4.00072 12.4721C3.24619 12.9201 2.32169 12.2484 2.51463 11.3924L3.09133 8.83355C3.17181 8.47648 3.05077 8.10398 2.77579 7.86241L0.805201 6.13127C0.145939 5.55212 0.499064 4.46531 1.37284 4.38427L3.98461 4.14203C4.34907 4.10823 4.66594 3.87801 4.81072 3.54183L5.84818 1.13274Z" fill="#FFB802"/>
         </svg>
         <span className={`font-bold leading-5 ${big ? 'text-2xl' : 'text-lg'} ${bigg && 'text-3xl'} ${mode == 'dark' ? 'dark:text-pq-gray' : 'text-black' } ${up ? 'leading-7' : 'leading-10'}`}>{score}</span>
      </div>
   )
}