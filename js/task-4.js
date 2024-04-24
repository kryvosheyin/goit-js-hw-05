const getTotalBalanceByGender = (users, gender) => {
    if (!Array.isArray(users)) {
        throw new Error("Array of users is expected");
    }

    if (typeof gender !== "string") {
        throw new Error("Gender is expected");
    }

    normalizedGender = gender.toLowerCase();
    return users
        .filter((user) => user.gender === normalizedGender && "balance" in user)
        .reduce((acc, user) => acc + user.balance, 0);
};

const clients = [
    {
        name: "Moore Hensley",
        gender: "male",
        balance: 2811
    },
    {
        name: "Sharlene Bush",
        gender: "female",
        balance: 3821
    },
    {
        name: "Ross Vazquez",
        gender: "male",
        balance: 3793
    },
    {
        name: "Elma Head",
        gender: "female",
        balance: 2278
    },
    {
        name: "Carey Barr",
        gender: "male",
        balance: 3951
    },
    {
        name: "Blackburn Dotson",
        gender: "male",
        balance: 1498
    },
    {
        name: "Sheree Anthony",
        gender: "female",
        balance: 2764
    }
];
console.log("OUTPUTS FOR TASK 4: \n");
console.log(getTotalBalanceByGender(clients, "Male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
