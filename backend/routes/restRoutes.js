const express = require('express');
const router = express.Router();
const restController = require('../controllers/restController');


//**************TEST
router.post('/conversations', restController.createConversation);
router.post('/conversationsXusers', restController.addUserToConversation);
router.get('/conversationsXusers/:id', restController.getUsersInConversation);
router.post('/messages', restController.createMessage);
router.get('/messages/:id', restController.getMessagesInConversation);
router.get('/conversations/:id', restController.getConversations);
router.get('/messages/all/:id', restController.getTotalNumberOfNewMessages);
router.delete('/conversationsXusers', restController.deleteConversationXusers);
router.delete('/messages/:id', restController.deleteMessage);

// Get 
router.get('/subforums', restController.getAllSubforums);
router.get('/users', restController.getAllUsers);
router.get('/threads/:subforumId', restController.getAllSubforumThreads);
router.get('/users/:id', restController.getUserById);
router.get('/posts/:threadId', restController.getThreadPosts);
router.get('/quotes/:id', restController.getQuoteForPost);

// POST
router.post("/threads", restController.createThread);
router.post("/posts", restController.createPost);
router.post("/quotes", restController.createQuote);
//router.post('/threads/:subforumId', restController.createThread);


// PUT
router.put("/threads/:threadId", restController.closeThread);
router.put("/users/:id", restController.updateUser);
router.put("/posts/:id", restController.updatePost);
router.put("/messages/:id", restController.updateMessage);

// DELETE
router.delete("/posts/:id", restController.deletePost);
router.delete("/users/:id", restController.deleteUser);
router.delete("/threads/:id", restController.deleteThreadById);

// GET Count
router.get("/threads/count/:subforumId", restController.getNumberOfThreadsInSubforum);
router.get("/posts/count/:threadId", restController.getNumberOfPostsInThread);
router.get("/messages/count/:id", restController.getNumberOfUnreadMessages);
router.get('/posts/user/count/:userId', restController.getNumberOfPostsByUser);


// Get search
router.get("/users/search/:name", restController.searchForUser);


module.exports = router;