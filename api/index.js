import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
      obj[contest.id] = contest;
      return obj;
    }, {});

router.get('/contests', (req, res) => {
  res.send({ 
    contests: contests 
  });
});

router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.description = 'Sit nisi Lorem minim do aliqua ipsum mollit incididunt incididunt nulla. Dolore cupidatat laborum ex fugiat nostrud pariatur do aliqua sint aute dolore magna adipisicing. Nulla commodo non dolor reprehenderit cillum sint nisi fugiat ea sunt cupidatat. Velit deserunt aliqua officia eiusmod ad officia enim.';
  res.send(contest);
});

export default router;
