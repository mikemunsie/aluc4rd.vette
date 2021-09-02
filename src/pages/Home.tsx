export default function Home() {
  return (
    <div>
      <a className="button mb-2" href="https://www.instagram.com/aluc4rd.vette/">Instagram</a>
      <a className="button mb-2" href="https://www.thegearheadproject.com/2021/corvette-americas-sports-car/">Interview with The Gearhead Magazine</a>
      <a className="button mb-2" href="#/parts">Parts + Mods List</a>
      <a className="button mb-1" rel="noreferrer" target="_blank" href={process.env.PUBLIC_URL + "/retrovette.jpg"}>Download Retro Vette Wallpaper</a>
        <em>^ Also great for custom cell phone skins!</em>
    </div>
  )
}