import GlobalStyle from "./styles/GlobalStyle";
import { Container, Panel } from "./components";
import { useState } from "react";

interface IPanelData {
  id: number;
  title: string;
  url: string;
  active: boolean;
}

const panelData: IPanelData[] = [
  {
    id: 1,
    title: "Explore the world",
    url: "https://picsum.photos/id/870/1000/1000",
    active: false,
  },
  {
    id: 2,
    title: "Explore the world",
    url: "https://picsum.photos/id/871/1000/1000",
    active: false,
  },
  {
    id: 3,
    title: "Explore the world",
    url: "https://picsum.photos/id/872/1000/1000",
    active: false,
  },
  {
    id: 4,
    title: "Explore the world",
    url: "https://picsum.photos/id/873/1000/1000",
    active: false,
  },
  {
    id: 5,
    title: "Explore the world",
    url: "https://picsum.photos/id/874/1000/1000",
    active: false,
  },
];

const App: React.FC = () => {
  const [data, setData] = useState<IPanelData[]>(panelData);

  function handleClick(id: number): void {
    const newActive = [...data];
    newActive.map((item) =>
      item.id === id ? (item.active = !item.active) : (item.active = false)
    );
    setData(newActive);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        {data.length &&
          data.map(({ id, url, title, active }) => (
            <Panel
              key={id}
              id={id}
              url={url}
              title={title}
              active={active}
              handleClick={handleClick}
            />
          ))}
      </Container>
    </>
  );
};

export default App;
