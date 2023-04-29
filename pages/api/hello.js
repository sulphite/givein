// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const url = `https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&q=deaths&language=en`
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      res.status(200).json({ data })
    })
}
