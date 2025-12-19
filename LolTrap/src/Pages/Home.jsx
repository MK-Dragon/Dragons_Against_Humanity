// /src/Pages/Home.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import JokeSettingsPicker from '../components/JokeSettingsPicker';

const joke_categories = ["Programming", "Dad Jokes", "Puns", "Why Not?!"];
const black_list = ["Dogs", "Cats", "Rat", "Hell No!"];

function Home() {
  return (
    <div className="container mt-5">
      <h1>Joke Generator</h1>
      <hr />
      {/* Pass the array into the 'options' prop */}
      <JokeSettingsPicker title='Select Joke Categories' options={joke_categories} ac_id={0} />
      <JokeSettingsPicker title='Black List' options={black_list} ac_id={1} />
    </div>
  );
}

export default Home;