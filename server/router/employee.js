const {Router} = require('express');
const router = Router();

const EmployeeController = require('../controller/EmployeeController.js')

router.get('/',EmployeeController.getEmployee);
router.post('/',EmployeeController.createEmployee);
router.get('/:id',EmployeeController.getOneEmployee);
router.delete('/:id',EmployeeController.deleteEmployee);
router.put('/:id',EmployeeController.updateEmployee);






module.exports = router