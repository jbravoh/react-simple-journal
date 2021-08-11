import FixedEntry from "./FixedEntry";
import JournalEntry from "./JournalEntry";

function MainContent(): JSX.Element {
  return (
    <main>
      <FixedEntry />
      <FixedEntry />
      <JournalEntry
        title={"Discovering React components"}
        tags={["react", "components", "reusability"]}
        body={
          "Today, I discovered reusable React components - I love them! It makes things so much more convenient!"
        }
        views={1}
        likes={1}
        postDate={{ month: "June", day: 13, year: 2021 }}
      />
      <JournalEntry
        title={"Dreaming of Stones"}
        tags={["dreams", "sleep", "insights"]}
        body={
          "Recently, I've been trying out a new tactic to try to help myself fall asleep: counting stones. Normally, we count sheep to fall asleep - my problem is that I think sheep are fascinating animals, so this really doesn't help me. However, I think we can all agree that stones are boring (sorry, geologists) - so I've been counting stones instead!"
        }
        views={10}
        likes={5}
        postDate={{ month: "March", day: 3, year: 2003 }}
      />
      <JournalEntry
        title={"first new Journal Entry"}
        tags={["react", "components", "reusability"]}
        body={
          "Today, I discovered reusable React components - I love them! It makes things so much more convenient!"
        }
        views={1}
        likes={1}
        postDate={{ month: "August", day: 11, year: 2021 }}
      />
      <JournalEntry
        title={"Second new Journal Entry"}
        tags={["react", "components", "reusability"]}
        body={
          "Today, I discovered reusable React components - I love them! It makes things so much more convenient!"
        }
        views={1}
        likes={1}
        postDate={{ month: "August", day: 10, year: 2020 }}
      />
    </main>
  );
}

export default MainContent;
