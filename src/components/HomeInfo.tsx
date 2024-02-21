type Props = { currentStage: number | null };

const renderContent: {
  [key in NonNullable<Props["currentStage"]>]: JSX.Element;
} = {
  1: <h1>1</h1>,
  2: <h1>2</h1>,
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

const HomeInfo = ({ currentStage }: Props) => {
  if (currentStage !== null) {
    return renderContent[currentStage] || null;
  } else {
    return null;
  }
};

export default HomeInfo;
