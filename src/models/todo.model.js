module.exports.Todos = {
  [Date.now()]: {
    description: "studying c++",
    status: "initialized",
    updated_at: new Date(Date.now()),
    created_at: new Date(Date.now()),
  },
[Date.now() + 1]: {
    description: "learning javascript",
    status: "in progress",
    updated_at: new Date(Date.now() + 1),
    created_at: new Date(Date.now() + 1),
},
[Date.now() + 2]: {
    description: "practicing algorithms",
    status: "not started",
    updated_at: new Date(Date.now() + 2),
    created_at: new Date(Date.now() + 2),
}
};
