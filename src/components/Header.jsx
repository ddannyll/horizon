export default function Header({children}) {
  return <div className="p-6 border text-center rounded-lg">
    <h1 className="text-lg md:text-xl">
      {children}
    </h1>
  </div>
}
