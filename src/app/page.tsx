export default function Home() {
  const handleClickButton = async () => {
    const response = await fetch("/api/profile")
      .then((res) => res.json)
      .then((res) => console.log(res))
  }
  return <button onClick={handleClickButton}>click me</button>
}
