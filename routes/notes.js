var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加　※この行、次の行は追加したコード
require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI; //この行と次の行を変更した。
const client = new MongoClient(uri);

// corsミドルウェアを使用 ※追加したコード
router.use(cors());

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');
// idが１のドキュメントを取得
const query = { id: 1 };
const note = await notes.findOne(query);
res.json(note);
})
module.exports = router;
