import { JSONFilePreset } from 'lowdb/node'
const db = await JSONFilePreset('db.json', { users: [] })

class AuthService {

    findUser(email, password) {
        const {users} = db.data;
      const result = users.filter((user) => user.email === email && user.password === password );

      return result;
    }
   async signup(data, res){
    const { email, password } = data;
    const user = this.findUser(email, password)
    if(user.length === 0) {
        db.data.users.push({id: db.data.users.length ,...data})
        await db.write()
        res.status(201).json();
    }
    else{
        res.status(400).json({message: "User already exists"})
    }
   }

    async signin(email, password, res){
        const user = this.findUser(email,password);
        if(user.length === 1){
        res.json(user[0].id);
    }
        else{
            res.status(400).json({message: "User not found"})
        }
    }
}

export default new AuthService();