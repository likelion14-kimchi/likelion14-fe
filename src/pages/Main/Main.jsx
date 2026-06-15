import TopSection from "../../components/topSection/TopSection";

import buttonImage from "../../assets/images/buttonImage.svg";
import wheelImage from "../../assets/images/wheelImage.svg";

export default function Main() {
  return (
    <TopSection
      smallText="월요일에 만나는"
      highlightText="프론트엔드"
      normalText="한 스푼."
      images={[
        {
          src: buttonImage,
          width: 420,
          x: -40,
          y: -80,
        },
        {
          src: wheelImage,
          width: 140,
          x: 300,
          y: 0,
        },
      ]}
    />
  );
}
