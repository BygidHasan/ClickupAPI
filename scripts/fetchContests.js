const { makeApiCall } = require('../utils/apiHelper');
const { codeforcesUrl } = require('../utils/urls');

async function fetchCodeforcesContests() {
  try {
    const response = await makeApiCall(codeforcesUrl);
    const filteredContests = response?.result.filter(contest => {
      return (
        contest.phase === 'BEFORE' &&
        (contest.name.includes('(Div. 3)') ||
        contest.name.includes('(Div. 4)') ||
        contest.name.includes('(Unrated)'))
      );
    }) || [];

    return filteredContests;
  } catch (error) {
    console.error('Error fetching Codeforces contests:', error);
    return [];
  }
}

module.exports = {
  fetchCodeforcesContests,
};