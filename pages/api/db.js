import db from '../../db.json'

export default function(req, res) {
    res.json(db)
}