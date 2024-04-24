const getUsersWithFriend = (users, friendName) => {
    if (!Array.isArray(users)) {
        throw new Error("Array of users is expected");
    }

    if (typeof friendName !== "string") {
        throw new Error("Name of friend is expected");
    }

    const normalizedFriendName = friendName.toLowerCase();
    return users.filter((user) =>
        user.friends.some(
            (friend) => friend.toLowerCase() === normalizedFriendName
        )
    );
};

const allUsers = [
    {
        name: "Moore Hensley",
        friends: ["Sharron Pace"]
    },
    {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"]
    },
    {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"]
    }
];

console.log("OUTPUTS FOR TASK 2: \n");

console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

console.log("");
