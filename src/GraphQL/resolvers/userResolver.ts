const userResolver = {
    Query: {
      user: () => {
        // Your logic for fetching user here
        return'kismat'
      },
    },
  };

export default userResolver
