import express from 'express';
import journalController from '../controllers/journalController'; 

router.post('/journal', journalController.createJournalEntry);
router.get('/journal', journalController.getAllJournalEntries);
router.get('/journal/:id', journalController.getJournalEntryById);
router.patch('/journal/:id', journalController.updateJournalEntry);
router.delete('/journal/:id', journalController.deleteJournalEntry);

export default router;