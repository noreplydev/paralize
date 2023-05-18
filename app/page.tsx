export default function Home() {
  return (
    <main className="h-screen w-screen bg-neutral-950 flex flex-col items-center justify-center
      bg-grid bg-cover bg-no-repeat bg-center will-change-contents">
      <h1 className="font-medium text-[#FFB23E] text-5xl mb-6 z-10 animate-scale-down
        opacity-0"
      >Paralize</h1> 
      <h1 className="font-light text-white text-2xl mb-10 z-10 text-center
        px-6 animate-scale-down-md opacity-0"
      >Live demo of Next.js 13 parallel routes</h1> 
      <div className="absolute top-1/3 h-48 w-64 bg-[#ffb23e21] blur-3xl z-0"></div>
      <p className="text-[#d9d9d9] px-5 py-2 rounded-md border-solid border 
        border-[#ffb23e] bg-[#ffb23e21] cursor-pointer z-10 animate-scale-down-lg opacity-0"
      >Go to 
        <span className="text-[#ffb23e] font-light px-2 "
        >/start
        </span> 
      to see parallel routes</p>
    </main>
  )
}
