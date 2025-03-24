const { fetchCodeforcesContests } = require('./scripts/fetchContests');
const { createClickupTask } = require('./scripts/createTask');

async function main() {
    const contests = await fetchCodeforcesContests();
    for (const contest of contests) {
      await createClickupTask(contest);
    }
}

main();