const Room = require('../models/room');

const getRooms = async (req, res) => {
    try {
        const data = await Room.find();

        return res.status(200).json({
            message: "Successfully fetched list of rooms",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const createRoom = async (req, res) => {
    try {
        const body = req.body;

        const room = new Room(body);

        const data = await room.save();

        return res.status(200).json({
            message: "Successfully room created",
            data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

module.exports = {
    getRooms,
    createRoom
};