const express = require('express');

const CompanyController = require('./controllers/CompanyController');
const CourseController = require('./controllers/CourseController');
const WorkshopController = require('./controllers/WorkshopController');
const OrderController = require('./controllers/OrderController');
const SchoolController = require('./controllers/SchoolController');
const ScheduleController = require('./controllers/ScheduleController');
const AvailableController = require('./controllers/AvailableController');

const routes = express.Router();

// Company routes
routes.post('/companies', CompanyController.store);
routes.get('/companies', CompanyController.index);

// Course routes
routes.post('/courses', CourseController.store);
routes.get('/courses', CourseController.index);
routes.get('/courses/:id', CourseController.show);

// Workshop routes
routes.post('/workshops', WorkshopController.store);
routes.get('/workshops', WorkshopController.index);
routes.get('/workshops/:id', WorkshopController.show);

// Order routes
routes.post('/orders', OrderController.store);

// School routes
routes.post('/schools', SchoolController.store);
routes.get('/schools', SchoolController.index);
routes.get('/schools/:id', SchoolController.show);
routes.get('/schools/:id/available', AvailableController.index);

// Schedule routes
routes.post('/schedules', ScheduleController.store);
routes.get('/schedules', ScheduleController.index);

module.exports = routes;