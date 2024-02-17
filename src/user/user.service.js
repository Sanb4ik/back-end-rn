import { JSONFilePreset } from 'lowdb/node'
const db = await JSONFilePreset('db.json', { users: [] })

class UserService {
    findUserById(id) {
        return db.data.users.filter(user => user.id === id)
    }
    getUser(id, res) {
        const user =  this.findUserById(id);
        res.json(...user)
    }

    getUsers(res) {
        res.json(db.data.users)
    }

    async updateUser (id, data, res) {
        const user =  this.findUserById(id)[0];
        const updatedUser = Object.assign(user, data)
       
        const users = db.data.users.map(u => u.id !== id ? u : updatedUser);
        await db.write(users)
        res.json(this.findUserById(id)[0])
    }
}

export default new UserService();