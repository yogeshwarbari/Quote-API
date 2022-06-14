import express from "express";
import { deleteQuote, getQuote, getQuotes, saveQuote, updateQuote } from "../controllers/quotes.js";

const router = express.Router();


router.get('/', getQuotes);

router.post('/',saveQuote);

router.get('/:id', getQuote);

router.delete('/:id', deleteQuote);

router.patch('/:id',updateQuote);

export default router;