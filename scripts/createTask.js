const { makeApiCall } = require('../utils/apiHelper');
const moment = require('moment');

exports.createClickupTask = async (contest) => {
  const taskName = contest.name;
  const startTime = moment.unix(contest.startTimeSeconds).format('YYYY-MM-DD HH:mm:ss');
  const duration = moment.duration(contest.durationSeconds, 'seconds').humanize();
  const description = `Contest starts at ${startTime} and lasts for ${duration}.`;

    const taskData = {
        name: taskName,
        description: description,
        due_date: contest.startTimeSeconds * 1000,
        notify_all: true,
    };

    const url = `https://api.clickup.com/api/v2/list/${process.env.CLICKUP_LIST_ID}/task`;
    await makeApiCall(url, 'post', taskData);
    console.log(`Task created for contest: ${taskName}`);
}