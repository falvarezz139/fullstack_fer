const Part1 = ({ name, exercises }) => {
  return (
    <p>
      {name}: {exercises} exercises
    </p>
  );
};
const Part2 = ({ name, exercises }) => {
  return (
    <p>
      {name}: {exercises} exercises
    </p>
  );
};

const Part3 = ({ name, exercises }) => {
  return (
    <p>
      {name}: {exercises} exercises
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <h1>{course}</h1>
      <Part1 name={part1.name} exercises={part1.exercises} />
      <Part2 name={part2.name} exercises={part2.exercises} />
      <Part3 name={part3.name} exercises={part3.exercises} />
    </div>
  );
};

export default App;
