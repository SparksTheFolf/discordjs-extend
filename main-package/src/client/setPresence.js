module.exports = (client, status, activityType, activityName) => {
    client.user.setPresence({
        activities: [{ name: activityName, type: ActivityType.Watching }],
        status: status,
      });

    console.log(`Presence set to ${status} ${activityType} ${activityName}`);
  }