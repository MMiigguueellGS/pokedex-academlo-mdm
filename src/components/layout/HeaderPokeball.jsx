export const HeaderPokeball = ({children}) => {
  return (
    <section>
        <header>
        <div className="h-16 bg-red-600 relative">
            <div className="absolute left-0 bottom-0 w-[210px] sm:w-[300px]">
                <img src="/images/banner.png" alt="" />
            </div>
        </div>
        <div className="h-12 bg-black relative">
            <div className="h-16 aspect-square bg-white rounded-full absolute right-0 -translate-x-1/2 -top-8 border-[8px] border-black after:block after:content-[''] after:h-8 after:aspect-square after:bg-slate-800 after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black"></div>
        </div>
        </header>
        {children}
    </section>
  )
}