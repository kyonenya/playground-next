import Link from "next/link";
import fetch from "node-fetch";

export default function Entry({ text }) {
  return <h1>{text}</h1>;
}

export function getStaticProps() {
  return {
    props: {
      text: "本文",
    },
  };
}

export function getStaticPaths() {
  //  const limit = 100;
  //  const url = `https://manuscripts.herokuapp.com/api/entries?limit=${limit}`;
  //  const entries = await fetch(url).then(response => response.json());
  //  const paths = entries.map(entry => ({
  //    params: { id: entry.uuid }
  //  }));
  //  return {
  //    paths,
  //    fallback: false,
  //  };
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
}

// 'C2E65E4910424922A29B160BE869B57B'
