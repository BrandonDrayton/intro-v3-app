const getData = async (): Promise<{ data: number[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: [1, 2, 3] })
    }, 2000)
  })
}

export default async function Home() {
  const data = await getData()
  console.log(data) // { data: [1, 2, 3] }
  return <div>Home</div>
}
