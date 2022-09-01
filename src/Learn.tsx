import { useEffect, useState } from "react";
type Props = { guest: number; onClick: () => void };
const Cup: React.FC<Props> = ({ guest, onClick }) => {
  return <h2 onClick={onClick}>Tea cup for guest #{guest}</h2>;
};

export default function TeaGathering() {
  const [cups, setCups] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  const jsCups = cups.map((item, i) => <Cup key={i} onClick={() => removeIndex(i)} guest={item} />);

  function removeIndex(i: number) {
    setCups(prev => prev.filter(c => c !== cups[i]));
  }

  return <>{jsCups}</>;
}
