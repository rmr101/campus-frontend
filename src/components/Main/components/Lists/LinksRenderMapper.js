

export const LinksRepo = [
         {
           LinkId: 0,
           name: "List Id 0",
           content: [
             { type: "Lists", range: "Half", linkIDArray: [0, 1, 2] },
             { type: "Context", range: "Half", context: "Hello world" },
           ],
         },
         {
           LinkId: 1,
           name: "List Id 1",
           content: [
             { type: "Lists", range: "Half", linkIDArray: [0] },
             { type: "Context", range: "Half", context: "Hello world" },
           ],
         },
         {
           LinkId: 2,
           name: "List Id 2",
           content: [{ type: "Context", range: "Full" }],
         },
         {
          LinkId: 3,
          name: "Student page",
          content: [{ type: "student", range: "Full" }],
        },
       ];