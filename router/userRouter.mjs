import express from 'express';
import bodyParser from "body-parser";
import uniqid from 'uniqid';
const router = express.Router();
router.use(bodyParser.json());

import User from './../models/userModel';

router.get('/test', (req, res) => {
    res.json({
        msg: "test hit"
    })
})

router.get('/getusers/:page', (req, res) => {
    const page = req.params.page;
    User.find({}, 'id fname lname', {skip: (page-1)*25, limit: 25}).then(resp => {
        console.log(resp)
        User.count({}).then(resp2 => {
            console.log(resp2)
            res.status(200).json({
                data: resp, 
                count: resp2
            });
        })
    }).catch(err => {
        res.status(400).json({
            err
        })
    })
})

router.get('/videonum/:id', (req, res) => {
    User.findOne({id: req.params.id}, 'number').then(resp => {
        console.log(resp)
        res.status(200).json(resp)
    }).catch(err => {
        res.status(400).json({
            err
        })
    })
})

router.get('/adduser', (req, res) => {
    User.create([
        {
            id: uniqid(),
            fname: "nas",
            lname: "eef",
            number: 4
        },
        {
            id: uniqid(),
            fname: "eef",
            lname: "nas",
            number: 7
        },
        {
            id: uniqid(),
            fname: "jay",
            lname: "desh",
            number: 12
        },
        {
            id: uniqid(),
            fname: "beeku",
            lname: "dash",
            number: 4
        },
        {
            id: uniqid(),
            fname: "john",
            lname: "wik",
            number: 1
        },
        {
            id: uniqid(),
            fname: "supun",
            lname: "sup",
            number: 34
        },
        {
            id: uniqid(),
            fname: "nith",
            lname: "ish",
            number: 12
        },
        {
            id: uniqid(),
            fname: "udi",
            lname: "it",
            number: 23
        }
    ]).then(resp => {
        console.log(resp)
        res.status(200).json(resp)
    }).catch(err => {
        console.log(err)
        res.status(400).json({
            err
        })
    })
})

export default router;