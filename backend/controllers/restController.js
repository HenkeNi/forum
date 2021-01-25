const Encrypt = require("../Encrypt");
const sqlite3 = require('better-sqlite3');
const db = sqlite3('../database/database.db');


// GET
const getAllSubforums = async (req, res) => {
  console.log("FETCHING SUBFORUMS");
  let statement = db.prepare(/*sql*/ `
    SELECT * FROM subforums`);
  res.json(statement.all());
}

const getAllSubforumThreads = async (req, res) => {
  let statement = db.prepare(/*sql*/ `
    SELECT * FROM threads 
    WHERE subforumId = $subforumId 
    ORDER BY published_time ASC
  `);
  res.json(statement.all(req.params)); // TODO: CHECK::::
}

const getThreadPosts = async (req, res) => {
  console.log("FETCHIN POSTS");
  let statement = db.prepare(/*sql*/`
    SELECT * FROM posts 
    WHERE threadId = $threadId 
    ORDER BY published_time ASC
  `);
  res.json(statement.all(req.params));
}

const getUserById = async (req, res) => {
  let statement = db.prepare(/*sql*/`
    SELECT * FROM users 
    WHERE id = $id
  `);

  let user = statement.get(req.params) || null;
  if (user) {
    delete user.password;
    res.json(user);
  } else {
    res.status(404).json({ error: "No user with that id!" });
  }
};



// PUT
const createThread = async (req, res) => {
  console.log("POSTING NEW THREAD");
  let statement = db.prepare(/*sql*/`
    INSERT INTO threads (title, userId, published_time, subforumId, active) 
    VALUES ($title, $userId, $published_time, $subforumId, $active)
    `);
    
    //WHERE NOT (user.isActive = 0 (SELECT * FROM users WHERE id = userId))
  res.json(statement.run(req.body));
} 


const createPost = async (req, res) => {
  console.log("POSTING NEW POST");
  let statement = db.prepare(/*sql*/`
    INSERT into posts (message, userId, threadId, published_time, warning)
    VALUES ($message, $userId, $threadId, $published_time, $warning)
  `);
  res.json(statement.run(req.body));
}



const closeThread = async (req, res) => {
  console.log("CLOSING THREAD");
  let statement = db.prepare(/*sql*/`
    UPDATE threads 
    SET active = 0
    WHERE id = $threadId
  `);

  res.json(statement.run({ threadId: req.params.threadId }));
}


const deletePost = async (req, res) => {
  let statement = db.prepare(/*sql*/`
    DELETE FROM posts 
    WHERE id = $id
  `);
  res.json(statement.run({ id: req.params.id }));
}

const deleteAllUserThreads = async (req, res) => {
  let statement = db.prepare(/*sql*/`
    DELETE FROM threads
    where userId == $id
  `);
  res.json(statement.run({ id: req.params.id }));
}

const deleteAllUserPosts = async (req, res) => {
  let statement = db.prepare(/*sql*/`
    DELETE FROM posts
    where userId == $id
  `);
  res.json(statement.run({ id: req.params.id }));
}

const deleteUser = async (req, res) => {
  console.log("DELETING USER");
  let statement = db.prepare(/*sql*/`
    DELETE FROM users
    WHERE id = $id 
  `);
  res.json(statement.run({ id: req.params.id }));
}



//const makeUserModerator 

const updateUser = async (req, res) => {
  console.log("UPDATING USER");

  if (req.body.password) {
    req.body.password = Encrypt.multiEncrypt(req.body.password);
  }

  req.body.id = req.params.id;

  let statement = db.prepare(/*sql*/`
    UPDATE users
    SET ${Object.keys(req.body).map(x => x + ' = $' + x)}   
    WHERE id = $id
  `);
  res.json(statement.run(req.body));
}








// const getForumThreads = async (req, res) => {
//   let statement = db.prepare(/*sql*/`SELECT * FROM threads WHERE thread.subforumId = subforums.id`);
//   res.json(statement.all({ subjectId: req.params.subjectId }));
// }

// const getThreads = async (req, res) => {
//   let statement = db.prepare(/*sql*/`SELECT * FROM subforums`);
//   res.json(statement.all({ subjectId: req.params.subjectId })); // TODO: FIX
// } 

// const getPosts = async (req, res) => {
//   let statement = db.prepare(/*sql*/ `
//     SELECT * FROM posts.* FROM posts, threads WHERE posts.threadId = $threadId AND threads.id = $threadId
//     `);
// }

// const createThread = async (req, res) => {
//   let statement = db.prepare(/*sql*/`
//   INSERT into ForumThreads (thread_info, created, created_by, thread_title, category) VALUES ($thread_info, $created, $created_by, $thread_title, $category)`);

//   res.json(statement.run({thread_info: req.body.thread_info, created: req-body.created, created_by: req.body.created_by, thread_title: req.body,thread_title, category: req.body.category}))
// }

// createPost = async (req, res) => {

// }


module.exports = {
  getAllSubforums,
  //getAllThreads,
  getAllSubforumThreads,
  getUserById,
  getThreadPosts,


  createThread,
  createPost,

  closeThread,
  deletePost,
  deleteUser,

  updateUser,

  // getAllThreads,
  // getThreadById,
  // getThreadPosts,
  // getAllUsers,

 deleteAllUserThreads,
 deleteAllUserPosts





  //getPosts,
  //createThread,
  //createPost,
}