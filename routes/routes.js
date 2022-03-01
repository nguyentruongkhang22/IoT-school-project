const express = require('express');
const Device = require('../model/deviceModel');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});
router.get('/add-new-device', (req, res) => {
    res.render('addNewDevice.ejs');
});

router.get('/devices-list', controller.getDevicesList);
router.route('/api/v1/devices').get(controller.getAllDevices).post(controller.addNewDevice);
router.route('/api/v1/device/:id').delete(controller.removeDevice);

module.exports = router;
