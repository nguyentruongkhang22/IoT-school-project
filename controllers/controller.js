const Device = require('../model/deviceModel');

exports.getAllDevices = async (req, res) => {
    try {
        const devices = await Device.find();
        res.status(200).json({
            status: 'success',
            data: devices,
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            status: 'fail',
            msg: error,
        });
    }
};

exports.addNewDevice = async (req, res) => {
    try {
        console.log(req.body);
        const devices = await Device.create(req.body);
        res.status(200).json({
            status: 'success',
            data: devices,
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            status: 'fail',
            msg: error,
        });
    }
};

exports.removeDevice = async (req, res) => {
    try {
        const devices = await Device.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: devices,
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            status: 'fail',
            msg: error,
        });
    }
};

exports.getDevicesList = async (req, res) => {
    try {
        const devices = await Device.find();
        console.log(devices);
        res.render('devicesList.ejs', {
            devices: devices,
        });
    } catch (error) {
        console.log(error);
    }
};
