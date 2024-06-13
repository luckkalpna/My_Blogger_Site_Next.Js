const {username, password} = process.env

export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.efimjfh.mongodb.net/restroDB?retryWrites=true&w=majority&appName=Cluster0"