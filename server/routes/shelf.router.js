const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req,res) => {
    const queryString = `SELECT * FROM "item";`;
    pool.query(queryString)
    .then((result)=>{
        res.send(result.rows);
    }).catch(error=>{
        console.log(error);
        res.sendStatus(500);
    });
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in shelf router post', req.user);
    let queryText = 
        `INSERT INTO "item" ("description", "image_url", "person_id")
        VALUES ($1, $2, $3);`;
    pool.query(queryText, [req.body.description, req.body.imageUrl, req.user.id])
    .then(result => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error in add item post:', error);
        res.sendStatus(500);
    })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    queryString = `DELETE FROM "item" WHERE "id" = $1;`;
    let id= req.params.id
    pool.query(queryString, [id])
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('error in delete item:', error);
            res.sendStatus(500);
        })
    
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
    queryString = `SELECT "person".username, COUNT("item".person_id) FROM "person"
    JOIN "item" ON "person".id = "item".person_id GROUP BY "person".username;`
    pool.query(queryString).then(results =>{
      res.send(results.rows)
    }).catch(error =>{
      res.sendStatus(500)
      console.log('error in get count' , error);
      
    })
});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;