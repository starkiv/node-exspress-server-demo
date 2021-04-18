export default function home(req, res) {
  res.status(200).json({
    name: 'Yurii',
    age: '26',
    id: '1234',
  });
}
