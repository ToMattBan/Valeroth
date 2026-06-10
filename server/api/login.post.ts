export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.userName === 'erro') {
    throw Error('User not found');
  } else if (body.userName === 'not') {
    return { haveChar: false };
  }

  return { haveChar: true };
});
