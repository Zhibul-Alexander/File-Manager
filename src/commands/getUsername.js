export const getUsername = () => {
  const username = process.argv.slice(2).reduce((acc, argv) => {
    if (argv.startsWith("--username")) {
      const receiveUsername = argv.split("=")[1];
      const firstLetter = receiveUsername[0].toUpperCase();
      const correctUsername = firstLetter + receiveUsername.slice(1);

      acc.push(correctUsername);
    }

    return acc;
  }, []);
  return username.join("");
};
