var express = require('express');
var router = express.Router();
const query = require('../DB/mysql')

// 获取我的插画
router.get('/myIllustration', async (req, res, next) => {
  const sql = 'SELECT * FROM my_illustration;';
  const result = await query(sql, []);
  // console.log(result);

  res.send({
    data: result,
    status: 200,
    msg: '查询成功'
  });
});

// 获取画师列表
router.get('/artist', async (req, res, next) => {

  // console.log(req.query.artistNum);
  // 分页
  const size = 5;
  const num = (req.query.artistNum - 1) * size;

  const sql1 = 'SELECT * FROM artist LIMIT ?,?;';
  const slq2 = 'SELECT COUNT(*) FROM  artist;'
  const params = [num, size]
  const result = await query(sql1, params);
  // 总条数
  const total = await query(slq2, []);
  // console.log(total[0]['COUNT(*)']);

  res.send({
      data: result,
      total: total[0]['COUNT(*)'],
      status: 200,
      msg: '查询成功'
  });
});

// 获取专题列表
router.get('/subject', async (req, res, next) => {

  // console.log(req.query.subjectNum);
  // 分页
  const size = 5;
  const num = (req.query.subjectNum - 1) * size;

  const sql1 = 'SELECT * FROM subject LIMIT ?,?;';
  const slq2 = 'SELECT COUNT(*) FROM  subject;'
  const params = [num, size]
  const result = await query(sql1, params);
  // 总条数
  const total = await query(slq2, []);
  // console.log(total[0]['COUNT(*)']);

  res.send({
      data: result,
      total: total[0]['COUNT(*)'],
      status: 200,
      msg: '查询成功'
  });
});

module.exports = router;