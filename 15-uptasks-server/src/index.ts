import colors from 'colors';
import server from './server';

const port = process.env.PORT || 4001;

server.listen(port, () => {
  console.log(colors.cyan.bold(`upTasks API listening local -> http://localhost:${port}`));
});
