export default function info(req, res) {
  const a = 123;
  const b = Math.random();
  const c = a + b;
  res.status(200).json('Info HERE!!!' + c);
}
