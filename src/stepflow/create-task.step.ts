export const config = {
  name: 'CreateTask',
  type: 'api',
  path: '/task',
  method: 'POST',
  emits: ['task.created'],
};

export const handler = async (req, { emit, logger }) => {
  const taskId = Date.now().toString();

  logger.info('Task received', {
    taskId,
    payload: req.body,
  });

  await emit({
    topic: 'task.created',
    data: {
      taskId,
      payload: req.body,
    },
  });

  return {
    status: 200,
    body: {
      taskId,
      status: 'queued',
    },
  };
};

