var express = require('express');
var router = express.Router();
const multer = require('multer');
const { get } = require('../Database/mongodb');
const d = new Date();
const path = require('path');
let time = d.getTime();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = file.mimetype.startsWith('image/') || file.mimetype.startsWith('audio/');
    if (isValid) {
      const folder = file.mimetype.startsWith('image/') ? 'images' : 'audio';
      cb(null, path.join('uploads/', folder));
 
    } else {
      cb(new Error('Invalid file type'));
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}${time}${Math.random()}.${file.originalname.split('.').pop()}`);
  }
});

const upload = multer({ storage });

router.post('/', upload.fields([{ name: 'image' }, { name: 'audio' }]),function(req, res, next) {
 console.log(req.files.audio);
 console.log(req.body);
 let total={
   audiofilepath:req.files.audio[0].path,
   audiofilename:req.files.audio[0].filename,
     imagefilepath:req.files.image[0].path,
   imagefilename:req.files.image[0].filename,
    name:req.body.audioname,
    auther:req.body.auther,
    discription:req.body.discription,
    adminapproved:false

  }
  get().collection('audiodata').insertOne(total).then((response)=>{
 res.status(200).send('success')
  })
});

router.get('/getall',async(req,res,next)=>{
  console.log('working');
 let values = await get().collection('audiodata').find({}).toArray()
 console.log(values);
 res.status(200).json(values)
})

router.post('/update',async(req,res,next)=>{
  const filename = req.query.filename; // Access the query parameter
  console.log('Received filename:', filename);
  let a= await get().collection('audiodata').updateOne({audiofilename:filename},{ $set: { adminapproved: true } })
  res.status(200).json('success')
})

router.get('/addaudio',async(req,res,next)=>{
 let values = await get().collection('audiodata').find({}).toArray()
 console.log(values);
 res.status(200).json(values)
})

router.get('/searchedaudio',async(req,res,next)=>{
  const filename = req.query.filename; // Access the query parameter
  console.log('Received filename:', filename);
  let values = await get().collection('audiodata').findOne({name:filename})
  console.log(values);
  res.status(200).json(values)
 })

module.exports = router;
