import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail.js'
import ApprovalCard from './ApprovalCard.js'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={Faker.internet.userName()}
          text={Faker.lorem.sentence()}
          date="Today at 9:00PM"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={Faker.internet.userName()}
          text={Faker.lorem.sentence()}
          date="Today at 9:00PM"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={Faker.internet.userName()}
          text={Faker.lorem.sentence()}
          date="Today at 9:00PM"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetail
        author={Faker.internet.userName()}
        text={Faker.lorem.sentence()}
        date="Today at 9:00PM"
        avatar={Faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
