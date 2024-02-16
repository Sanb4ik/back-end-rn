import express from 'express';
import cors from 'cors';
import router from './route/index.js';
import { JSONFilePreset } from 'lowdb/node'

const app = express();

app.use(express.json());
app.use('/api', router);
app.use(cors({ credentials: true, origin: '*' }));

const PORT = 3001;
app.listen(PORT, async() => {
  const defaultData = { users: [{
      "id": 0,
      "email": "admin@gmail.com",
      "password": "1234",
      "firstName": "sasha",
      "lastName": "kuznetsov",
      "imageURI": "https://scontent.cdninstagram.com/v/t51.2885-19/231974468_332380615245972_2720874867558552354_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=NKh1a1TIQHMAX-YujZN&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCWJ4wpXfqyBGVCLQdquHHambrMtzqTbGT34bn6_Zf7VA&oe=65D536F9&_nc_sid=10d13b",
      "phoneNumber": "+375299999999"
  }]}
  await JSONFilePreset('db.json', defaultData)
  console.log(`Server is running on http://localhost:${PORT}`);
});
