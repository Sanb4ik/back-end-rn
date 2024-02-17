import UserService from "./user.service.js";

class UserController {
    getUser(req, res) {
        const id  = parseInt(req.params.id)
        UserService.getUser(id, res)
    }

    getUsers(req, res) {
        UserService.getUsers(res)
    }
    
    updateUser(req, res) {
        const id  = parseInt(req.params.id)
        UserService.updateUser(id, req.body, res)
    }
}

export default new UserController();