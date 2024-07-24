import express from 'express';
const router = express.Router();
import videosCtrl from '../controllers/videos.mjs';

// Create
router.post('/', videosCtrl.CreateVideos);

// Read
router.get('/', videosCtrl.ReadVideos);

// Update
router.put('/:id', videosCtrl.UpdateVideos);

// Delete
router.delete('/:id', videosCtrl.DeleteVideos);

export default router;
