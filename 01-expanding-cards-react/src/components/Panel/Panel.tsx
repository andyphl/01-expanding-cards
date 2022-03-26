import StyledPanel from "./Panel.styled";

type PanelProps = {
  id: number;
  url: string;
  title: string;
  active: boolean;
  handleClick: (id: number) => void;
};

export const Panel: React.FC<PanelProps> = ({
  id,
  url,
  title,
  active,
  handleClick,
}) => {
  return (
    <StyledPanel
      active={active}
      onClick={() => handleClick(id)}
      style={{
        backgroundImage: `url("${url}")`,
      }}
    >
      <h3>{title}</h3>
    </StyledPanel>
  );
};
