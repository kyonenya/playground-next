import fetch from 'node-fetch';

export default function Manuscript({ entry }) {
  console.log(entry);
  return (
    <>
      <p>{entry.created_at}</p>
      <p>{entry.text}</p>
    </>
  );
}

export async function getStaticProps() {
  const uuid = 'C2E65E4910424922A29B160BE869B57B';
  const url = `https://manuscripts.herokuapp.com/api/entries/${uuid}`;
  const entry = await fetch(url).then(response => response.json());
  return { props: { entry } };
}
