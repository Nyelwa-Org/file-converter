import nc from "next-connect";

const handler = nc().get(async (req, res) => {
  const response = await fetch(`${process.env.CLOUD_CONVERT_URL}`);
  const data = await response.json();
  res.status(200).json(data);
});

export default handler;
