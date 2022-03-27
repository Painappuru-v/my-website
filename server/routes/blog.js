var express = require('express');
var router = express.Router();
const query = require('../DB/mysql')


router.get('/', async (req, res, next) => {
  const sql = 'SELECT * FROM blog;';
  const result = await query(sql, []);
  // console.log(result);

  res.send({
    data:result,
    status: 200,
    msg: '查询成功'
  });
});

module.exports = router;
