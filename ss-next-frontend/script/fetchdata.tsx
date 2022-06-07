import fsPromises from 'fs/promises';
import path from 'path'

export default async function getStaticProps() {
  console.log('hello')
  const filePath = path.join(process.cwd(), './products.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return {
    props: objectData
  }
}
