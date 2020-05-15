const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Message = require('../../models/Message');
const User = require('../../models/User');

// Create Message
// POST api/messages
router.post('/',[auth,[
    check('text','Text is required').not().isEmpty()
]],
async (req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() })
    } 
    try {
        const user = await User.findById(req.user.id).select('-password');
        const newMessage = new Message({
            text : req.body.text,
            user : req.user.id
        });
        const message = await newMessage.save();
        res.json(message);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Server Error');
    }
});
// Get all Messages
// GET api/messages
router.get('/', auth, async (req, res) => {
    try {
      const messages = await Message.find().sort({ date: -1 });
      res.json(messages);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});
// Get message by ID
// GET api/messages/:id

router.get('/:id', auth, async (req, res) => {
    try {

      const message = await Message.findById(req.params.id);
      res.json(message);  
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
// Get message by ID
// GET api/messages/:id

router.get('/:id', auth, async (req, res) => {
    try {

      const message = await Message.findById(req.params.id);
      res.json(message);  
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Delete message
// DELETE api/messages/:id
router.delete('/:id', auth, async (req, res) => {
    try {
      const message = await Message.findById(req.params.id);
  
      if (message.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      await message.remove();
  
      res.json({ msg: 'Message removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });

// Add Reply
// POST api/messages/reply/:id

router.post('/reply/:id',[auth,[
    check('text','Text is required').not().isEmpty()
]],
async (req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() })
    } 
    try {
        const user = await User.findById(req.user.id).select('-password');
        const message = await Message.findById(req.params.id);

        const newReply = {
            text : req.body.text,
            user : req.user.id
        };
        message.replies.unshift(newReply);
        await message.save();
        res.json(message);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Server Error');
    }
});
  
module.exports = router;
