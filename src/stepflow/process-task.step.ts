export const config = {
  name: 'ProcessTask',
  type: 'event',
  subscribes: ['task.created'],
};

export const handler = async (input, { logger }) => {
  logger.info('Processing task', input);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  logger.info('Task completed', {
    taskId: input.taskId,
  });
};

