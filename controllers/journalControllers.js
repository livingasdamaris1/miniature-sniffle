import { Journal } from '../models/journalModel.js';

export const createJournalEntry = (req, res) => {
    try {
        const { title, content, date } = req.body;
        const newEntry = new Journal({ title, content, date });
        newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(400).json({ message: "could not create journal entry" });
    }
};

export const getAllJournalEntries = async (req, res) => {
    try {
        const entries = await Journal.find();
        res.status(200).json(entries);
    } catch (error) {
        res.status(404).json();
    }
};

export const getJournalEntryById = async (req, res) => {
    try {
        const entry = await Journal.findById(req.params.id);
        res.status(200).json(entry);
    } catch (error) {
        res.status(400).json({ message: "journal entry not found" });
    }
};

export const updateJournalEntry = async (req, res) => {
    try {
        const { title, content, date } = req.body;
        const updatedEntry = await Journal.findByIdAndUpdate(req.params.id,
            { title, content, date },
            { new: true });
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(400).json({ message: "journal entry not found" });
    };
}

export const deleteJournalEntry = async (req, res) => {
    try {
        await Journal.findByIdAndDelete(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ message: "journal entry not found" });
    }
};
  
  
