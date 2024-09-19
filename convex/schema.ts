// import { v } from "convex/values"
// import { authTables } from "@convex-dev/auth/server";
// import { defineSchema, defineTable } from "convex/server";

// const schema = defineSchema({
//     tasks: defineTable({
//         completed: v.boolean(),
//     }),
// });
   
// export default schema;

import { defineSchema } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
 
const schema = defineSchema({
  ...authTables,
  // Your other tables...
});
 
export default schema;