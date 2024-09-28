const mongoose = require('mongoose');


const taskManagerSchema = mongoose.Schema(

    {
        taskTitle : {
            type: String,
            required: [true, "Please add a title"],
            maxlenght: [20, "Title must not be more than 20 characters"],
        },

        description: {
            type: String,
            required: [true, "Please add a description"],
            maxlenght: [50, "Description must not be more than 50 characters"],
        },

        tags : {
            type: String,
            enum: ["Urgent", "Important"],
            default: "Urgent"
        }
    }
)

module.exports  = mongoose.model("task-manager", taskManagerSchema);