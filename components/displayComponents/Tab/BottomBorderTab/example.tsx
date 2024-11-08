import BottomBorderTab from ".";

export function BottomBorderTabExample() {
  return (
    <BottomBorderTab
      tabs={[
        {
          id: "1",
          title: "Web Development",
          content: <p>Web development</p>,
        },
        {
          id: "2",
          title: "Android Development",
          content: <p>Android development</p>,
        },
        {
          id: "3",
          title: "AI/ML",
          content: <p>AI/ML</p>,
        },
      ]}
    />
  );
}
