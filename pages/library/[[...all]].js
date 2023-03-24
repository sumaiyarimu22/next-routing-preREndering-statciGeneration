import { useRouter } from "next/router";

const Documention = () => {
  const {
    query: { all = [] },
  } = useRouter();

  if (all.length === 4) {
    return (
      <h1>
        Documentation for topic: {all[0]} - lesson: {all[1]} -example:{all[2]}
        -line:{all[3]}
      </h1>
    );
  }
  if (all.length === 3) {
    return (
      <h1>
        Documentation for topic: {all[0]} - lesson: {all[1]} -example:{all[2]}
      </h1>
    );
  }
  if (all.length === 2) {
    return (
      <h1>
        Documentation for topic: {all[0]} - lesson: {all[1]}
      </h1>
    );
  }
  if (all.length === 1) {
    return <h1>Documentation for topic: {all[0]}</h1>;
  }
  return <div>Documention</div>;
};

export default Documention;
